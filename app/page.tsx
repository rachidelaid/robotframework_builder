"use client";

import { Card, CardBody } from "@nextui-org/card";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@nextui-org/button";
import { KeywordType } from "@/types";
import { generateScript } from "@/utils/generateScript";
import { toast } from "react-toastify";
import { AlertIcon } from "@/components/Icons";
import Keywords from "@/components/Keywords";
import BlockModal from "@/components/BlockModal";
import { generateTemplate } from "@/utils/generateTemplate";
import UploadCSV from "@/components/UploadCSV";
import BlockCard from "@/components/BlockCard";
import { checkScriptFormat } from "@/utils/checkScriptFormat";
import { useGlobalContext } from "@/context/GlobalContext";

const Page = () => {
  const { setUrl } = useGlobalContext();

  const [error, setError] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [csvData, setCsvData] = useState<string[][]>([[]]);
  const [selectedKeyword, setSelectedKeyword] = useState<KeywordType | null>(
    null
  );
  const [blocks, setBlocks] = useState<KeywordType[]>([]);

  const disableBlock = (id: number) => {
    const newBlocks = blocks.map((block) => {
      if (block.id === id) {
        return {
          ...block,
          disabled: !block.disabled,
        };
      }
      return block;
    });
    setBlocks(newBlocks);
  };

  const deleteBlock = (id: number) => {
    const newBlocks = blocks.filter((block) => block.id !== id);
    setBlocks(newBlocks);
  };

  const editBlock = (block: KeywordType) => {
    if (block.args.length > 0) {
      setSelectedKeyword(block);
      setShowModal(true);
    }
  };

  const duplicateBlock = (id: number) => {
    const block = blocks.find((block) => block.id === id);
    if (block) {
      setBlocks((blocks) => [
        ...blocks,
        {
          ...block,
          id: Date.now(),
        },
      ]);
    }
  };

  const modifyBlock = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const newBlock = {
      ...selectedKeyword,
      args: selectedKeyword?.args.map((arg) => ({
        name: arg.name,
        type: arg.type,
        default: arg.default,
        required: arg.required,
        value: formData.get(arg.name),
        dynamic: formData.get(`${arg.name}_dynamic`) === "true",
      })),
      canFail: formData.get("can_fail") === "true",
    };

    if (newBlock.name === "Open Browser" || newBlock.name === "Go To") {
      setUrl(
        (newBlock.args?.find((arg) => arg.name === "url")?.value as string) ||
          ""
      );
    }

    const newBlocks = blocks.map((block) => {
      if (block.id === selectedKeyword?.id) {
        return newBlock;
      }
      return block;
    });
    setBlocks(newBlocks as KeywordType[]);
  };

  const resetDragStyles = () => {
    document.querySelectorAll("#block-card").forEach((elm) => {
      elm.classList.remove("marginOnDragTop");
      elm.classList.remove("marginOnDragBottom");
    });
  };

  const moveBlockUp = (id: number, refId: number) => {
    const arr: KeywordType[] = [];
    blocks.forEach((block) => {
      if (block.id === id) {
        arr.push(blocks.find((b) => b.id === refId) as KeywordType);
        arr.push(block);
      } else if (block.id !== refId) {
        arr.push(block);
      }
    });

    setBlocks(arr);
  };

  const moveBlockDown = (id: number, refId: number) => {
    const arr: KeywordType[] = [];
    blocks.forEach((block) => {
      if (block.id === id) {
        arr.push(block);
        arr.push(blocks.find((b) => b.id === refId) as KeywordType);
      } else if (block.id !== refId) {
        arr.push(block);
      }
    });

    setBlocks(arr);
  };

  const handelDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const target = e.target as HTMLDivElement;

    if (
      target.id !== "block-card" ||
      target.classList.contains("border-yellow-200")
    )
      return;

    const targetHeight = target.offsetHeight;
    const targetOffset = target.offsetTop;
    const targetMiddle = targetOffset + targetHeight / 2;

    const mousePosition = e.clientY;
    const mouseOffset = mousePosition - targetMiddle;

    resetDragStyles();

    if (mouseOffset < 0 && !target.classList.contains("marginOnDragTop")) {
      target.classList.add("marginOnDragTop");
    } else if (!target.classList.contains("marginOnDragBottom")) {
      target.classList.add("marginOnDragBottom");
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    if (
      (!document.querySelector(".marginOnDragTop") ||
        !document.querySelector(".marginOnDragBottom")) &&
      !document.querySelector('[data-dragging="true"]')
    )
      return;

    const target =
      (document.querySelector(".marginOnDragTop") as HTMLDivElement) ||
      (document.querySelector(".marginOnDragBottom") as HTMLDivElement);

    const targetHeight = target.offsetHeight;
    const targetOffset = target.offsetTop;
    const targetMiddle = targetOffset + targetHeight / 2;

    const mousePosition = e.clientY;
    const mouseOffset = mousePosition - targetMiddle;

    const refId = Number(
      document.querySelector('[data-dragging="true"]')?.getAttribute("data-id")
    );

    if (mouseOffset < 0) {
      moveBlockUp(Number(target.dataset.id), refId);
    } else {
      moveBlockDown(Number(target.dataset.id), refId);
    }

    resetDragStyles();
    document
      .querySelectorAll('[data-dragging="true"]')
      .forEach((elm) => elm?.removeAttribute("data-dragging"));
  };

  const headersForValidation = useMemo(() => {
    const keys: string[] = [];
    return blocks
      .map((block) =>
        block.args.map((arg) => {
          if (arg.dynamic) {
            const keyName = keys.includes(arg.name)
              ? `${arg.name} (${
                  keys.filter((k) => k.includes(arg.name)).length
                })`
              : arg.name;
            keys.push(arg.name);
            return `[${block.name}] ${keyName}${arg.required ? "*" : ""}`;
          }
          return null;
        })
      )
      .flat()
      .filter((b) => b != null);
  }, [blocks]) as string[];

  const isDynamic = useMemo(
    () => blocks.some((b) => b.args.some((arg) => arg.dynamic)),
    [blocks]
  );

  useEffect(() => {
    if (isDynamic && !blocks.some((b) => b.name === "FOR LOOP START")) {
      setBlocks((old) => [
        {
          name: "FOR LOOP START",
          args: [],
          description: "",
          source: "",
          canFail: false,
          id: Date.now() + 1,
          noActions: true,
        },
        ...old,
        {
          name: "FOR LOOP END",
          args: [],
          description: "",
          source: "",
          canFail: false,
          id: Date.now() + 2,
          noActions: true,
        },
      ]);
    }

    if (isDynamic && blocks.some((b) => b.name === "FOR LOOP START")) {
      checkScriptFormat(blocks, setError);
    }
  }, [blocks, isDynamic]);

  const loopStartIndex = useMemo(
    () => blocks.findIndex((b) => b.name === "FOR LOOP START"),
    [blocks]
  );

  const loopEndIndex = useMemo(
    () => blocks.findIndex((b) => b.name === "FOR LOOP END"),
    [blocks]
  );

  return (
    <div className="flex">
      <Keywords setBlocks={setBlocks} />

      {selectedKeyword && (
        <BlockModal
          show={showModal}
          setShow={setShowModal}
          block={selectedKeyword}
          onSubmit={modifyBlock}
          modify
        />
      )}

      <div
        className="flex flex-col gap-4 items-center p-6 w-full h-screen overflow-y-auto pb-14"
        onDragOver={handelDragOver}
        onDrop={handleDrop}
      >
        <div className="flex gap-2 items-center text-red-400 min-h-6 w-full">
          {error && (
            <>
              <AlertIcon />
              <p>{error}</p>
            </>
          )}
        </div>

        {blocks.length === 0 ? (
          <div className="my-auto">
            <Card>
              <CardBody>
                <p>
                  script is empty for now. try adding some methods from the left
                  side bar
                </p>
              </CardBody>
            </Card>
          </div>
        ) : (
          blocks.map((block, index) => (
            <BlockCard
              key={index}
              block={block}
              disableBlock={disableBlock}
              deleteBlock={deleteBlock}
              editBlock={editBlock}
              duplicateBlock={duplicateBlock}
              indent={
                isDynamic && loopStartIndex < index && loopEndIndex > index
              }
            />
          ))
        )}
      </div>

      <div className="flex gap-2 absolute bottom-8 right-8 z-50">
        {blocks.filter((b) => !b.disabled).length > 0 &&
          !blocks.some((b) => b.args.some((arg) => arg.dynamic)) &&
          !error && (
            <Button
              color="success"
              onPress={() => {
                generateScript(blocks, csvData);
                toast.success("script was downloaded successfully");
              }}
            >
              Generate Script
            </Button>
          )}
        {isDynamic && (
          <>
            {csvData[0].length > 0 && !error && (
              <Button
                color="success"
                onPress={() => {
                  generateScript(blocks, csvData);
                  toast.success("script was downloaded successfully");
                }}
              >
                Generate Script
              </Button>
            )}
            <Button
              color="primary"
              onPress={() => {
                generateTemplate(blocks);
                toast.success("template was downloaded successfully");
              }}
            >
              Download Template
            </Button>
            <UploadCSV
              setCsvData={setCsvData}
              headersForValidation={headersForValidation}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
