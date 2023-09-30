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
  const [blocks, setBlocks] = useState<KeywordType[]>([
    {
      name: "Open Browser",
      args: [
        {
          name: "url",
          type: ["<str>", "<None>"],
          default: "None",
          required: false,
          value: "",
          dynamic: false,
        },
        {
          name: "browser",
          type: ["<str>"],
          default: "firefox",
          required: false,
          value: "",
          dynamic: false,
        },
        {
          name: "alias",
          type: ["<str>", "<None>"],
          default: "None",
          required: false,
          value: "",
          dynamic: false,
        },
        {
          name: "remote_url",
          type: ["<bool>", "<str>"],
          default: "False",
          required: false,
          value: "",
          dynamic: false,
        },
        {
          name: "desired_capabilities",
          type: ["<dict>", "<None>", "<str>"],
          default: "None",
          required: false,
          value: "",
          dynamic: false,
        },
        {
          name: "ff_profile_dir",
          type: ["<FirefoxProfile>", "<str>", "<None>"],
          default: "None",
          required: false,
          value: "",
          dynamic: false,
        },
        {
          name: "options",
          type: ["<Any>", "<None>"],
          default: "None",
          required: false,
          value: "",
          dynamic: false,
        },
        {
          name: "service_log_path",
          type: ["<str>", "<None>"],
          default: "None",
          required: false,
          value: "",
          dynamic: false,
        },
        {
          name: "executable_path",
          type: ["<str>", "<None>"],
          default: "None",
          required: false,
          value: "",
          dynamic: false,
        },
      ],
      description: "Opens a new browser instance to the optional url.",
      example:
        '<table border="1"><tbody><tr><th>Browser</th><th>Name(s)</th></tr><tr><td>Firefox</td><td>firefox, ff</td></tr><tr><td>Google Chrome</td><td>googlechrome, chrome, gc</td></tr><tr><td>Headless Firefox</td><td>headlessfirefox</td></tr><tr><td>Headless Chrome</td><td>headlesschrome</td></tr><tr><td>Internet Explorer</td><td>internetexplorer, ie</td></tr><tr><td>Edge</td><td>edge</td></tr><tr><td>Safari</td><td>safari</td></tr></tbody></table>',
      source: "SeleniumLibrary",
      canFail: false,
      id: 1695898002919,
    },
    {
      name: "Go To",
      args: [
        {
          name: "url",
          required: true,
          value: "{VARIABLE}",
          dynamic: true,
        },
      ],
      description: "Navigates the current browser window to the provided url.",
      source: "SeleniumLibrary",
      canFail: true,
      id: 1695898014556,
    },
    {
      name: "Input Text",
      args: [
        {
          name: "locator",
          type: ["<WebElement>", "<str>"],
          required: true,
          value: "css=[name='q']",
          dynamic: false,
        },
        {
          name: "text",
          type: ["<str>"],
          required: true,
          value: "{VARIABLE}",
          dynamic: true,
        },
        {
          name: "clear",
          type: ["<bool>"],
          default: "True",
          required: false,
          value: "",
          dynamic: false,
        },
      ],
      description:
        "Types the given text into the text field identified by locator.",
      source: "SeleniumLibrary",
      canFail: true,
      id: 1695898028167,
    },
    {
      name: "Input Text",
      args: [
        {
          name: "locator",
          type: ["<WebElement>", "<str>"],
          required: true,
          value: "css=[name='qs']",
          dynamic: false,
        },
        {
          name: "text",
          type: ["<str>"],
          required: true,
          value: "{VARIABLE}",
          dynamic: true,
        },
        {
          name: "clear",
          type: ["<bool>"],
          default: "True",
          required: false,
          value: "",
          dynamic: false,
        },
      ],
      description:
        "Types the given text into the text field identified by locator.",
      source: "SeleniumLibrary",
      canFail: true,
      id: 1695898028168,
    },
    {
      name: "Press Keys",
      args: [
        {
          name: "locator",
          type: ["<WebElement>", "<None>", "<str>"],
          default: "None",
          required: false,
          value: "css=[name='q']",
          dynamic: false,
        },
        {
          name: "* keys",
          type: ["<str>"],
          required: false,
          value: "ENTER",
          dynamic: false,
        },
      ],
      description:
        "Simulates the user pressing key(s) to an element or on the active browser.",
      example:
        '<table border="1"><tbody><tr><td><a href="#Press%20Keys" class="name">Press Keys</a></td><td>text_field</td><td>AAAAA</td><td></td><td># Sends string "AAAAA" to element.</td></tr><tr><td><a href="#Press%20Keys" class="name">Press Keys</a></td><td>None</td><td>BBBBB</td><td></td><td># Sends string "BBBBB" to currently active browser.</td></tr><tr><td><a href="#Press%20Keys" class="name">Press Keys</a></td><td>text_field</td><td>E+N+D</td><td></td><td># Sends string "END" to element.</td></tr><tr><td><a href="#Press%20Keys" class="name">Press Keys</a></td><td>text_field</td><td>XXX</td><td>YY</td><td># Sends strings "XXX" and "YY" to element.</td></tr><tr><td><a href="#Press%20Keys" class="name">Press Keys</a></td><td>text_field</td><td>XXX+YY</td><td></td><td># Same as above.</td></tr><tr><td><a href="#Press%20Keys" class="name">Press Keys</a></td><td>text_field</td><td>ALT+ARROW_DOWN</td><td></td><td># Pressing "ALT" key down, then pressing ARROW_DOWN and then releasing both keys.</td></tr><tr><td><a href="#Press%20Keys" class="name">Press Keys</a></td><td>text_field</td><td>ALT</td><td>ARROW_DOWN</td><td># Pressing "ALT" key and then pressing ARROW_DOWN.</td></tr><tr><td><a href="#Press%20Keys" class="name">Press Keys</a></td><td>text_field</td><td>CTRL+c</td><td></td><td># Pressing CTRL key down, sends string "c" and then releases CTRL key.</td></tr><tr><td><a href="#Press%20Keys" class="name">Press Keys</a></td><td>button</td><td>RETURN</td><td></td><td># Pressing "ENTER" key to element.</td></tr></tbody></table>',
      source: "SeleniumLibrary",
      canFail: false,
      id: 1695898043403,
    },
    {
      name: "Sleep",
      source: "BuiltIn",
      args: [
        {
          name: "time_",
          required: true,
          value: "3",
          dynamic: false,
        },
        {
          name: "reason",
          default: "None",
          required: false,
          value: "",
          dynamic: false,
        },
      ],
      description: "Pauses the test executed for the given time.",
      example:
        "<tbody><tr>n<td>Sleep</td>n<td>42</td>n<td></td>n</tr>n<tr>n<td>Sleep</td>n<td>1.5</td>n<td></td>n</tr>n<tr>n<td>Sleep</td>n<td>2 minutes 10 seconds</td>n<td></td>n</tr>n<tr>n<td>Sleep</td>n<td>10s</td>n<td>Wait for a reply</td>n</tr>n</tbody>",
      canFail: false,
      id: 1695898057386,
    },
    {
      name: "Close Browser",
      args: [],
      description: "Closes the current browser.",
      source: "SeleniumLibrary",
      canFail: false,
      id: 1695898750955,
    },
  ]);

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
