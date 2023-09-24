"use client";

import { Card, CardBody } from "@nextui-org/card";
import { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { KeywordType } from "@/types";
import { Chip } from "@nextui-org/chip";

import Keywords from "@/components/Keywords";
import BlockModal from "@/components/BlockModal";

const chipColors: Record<
  string,
  "primary" | "secondary" | "success" | "warning" | "danger" | "default"
> = {
  SeleniumLibrary: "primary",
  BuiltIn: "secondary",
  // "": "success",
  // "": "warning",
  // "": "danger",
  default: "default",
};

const MoreIcon = (props: { className?: string }) => (
  <svg
    fill="none"
    focusable="false"
    height="1.5em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1.5em"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
    <path d="M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
    <path d="M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
    <path d="M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
    <path d="M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
    <path d="M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
  </svg>
);

const Page = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedKeyword, setSelectedKeyword] = useState<KeywordType | null>(
    null
  );
  const [blocks, setBlocks] = useState<KeywordType[]>([]);

  const disableBlock = (index: number) => {
    const newBlocks = [...blocks];
    newBlocks[index].disabled = !newBlocks[index].disabled;
    setBlocks(newBlocks);
  };

  const deleteBlock = (index: number) => {
    const newBlocks = [...blocks];
    newBlocks.splice(index, 1);
    setBlocks(newBlocks);
  };

  const generateScript = () => {
    const robotScript = blocks
      .map((keywordData) => {
        const { name, args, disabled } = keywordData;
        const argumentLines = args.map((arg: any) => arg.value).join("\t");

        return `${disabled ? "#" : ""}\t${name}\t${argumentLines}`;
      })
      .join("\n");

    const fileContent = `*** Settings ***
Library     SeleniumLibrary

*** Test Cases ***
RUN USER DEFINED SCRIPT
${robotScript}`;

    // Create a Blob containing the .robot file content
    const blob = new Blob([fileContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    // Create a download link
    const a = document.createElement("a");
    a.href = url;
    a.download = "generated.robot";
    a.click();
  };

  const modifyBlock = (e: React.FormEvent<HTMLFormElement>) => {};

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
      <div className="flex flex-col gap-4 items-center p-6 w-full h-screen overflow-y-auto pb-14">
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
            <div
              key={index}
              className={`w-full ${block.disabled ? "opacity-50" : ""}`}
            >
              <Card className="border-gray-600 border-dashed border relative py-1">
                <CardBody>
                  <div className="flex gap-8 items-center">
                    <Chip
                      size="sm"
                      color={chipColors?.[block.source]}
                      variant="faded"
                      className="absolute top-0 left-1"
                    >
                      {block.source}
                    </Chip>
                    <p className="font-bold">{block.name}</p>
                    {block.args.map((arg: any) => (
                      <p key={arg.name} className="text-gray-500">
                        {arg.value}
                      </p>
                    ))}
                    <div className="ml-auto">
                      <Dropdown>
                        <DropdownTrigger>
                          <Button
                            variant="bordered"
                            isIconOnly
                            aria-label="Like"
                          >
                            <MoreIcon className="fill-slate-100" />
                          </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                          <DropdownItem
                            key="copy"
                            onPress={() => disableBlock(index)}
                          >
                            {block.disabled ? "Enable" : "Disable"} Block
                          </DropdownItem>
                          <DropdownItem
                            key="edit"
                            className={
                              block.args.length > 0
                                ? ""
                                : "opacity-50 cursor-not-allowed"
                            }
                            onPress={() => {
                              if (block.args.length > 0) {
                                setSelectedKeyword(block);
                                setShowModal(true);
                              }
                            }}
                          >
                            Edit Block
                          </DropdownItem>
                          <DropdownItem
                            key="delete"
                            className="text-danger"
                            color="danger"
                            onPress={() => deleteBlock(index)}
                          >
                            Delete Block
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          ))
        )}
      </div>
      <Button
        color="success"
        className="absolute bottom-8 right-8 z-50"
        onPress={generateScript}
      >
        Generate Script
      </Button>
    </div>
  );
};

export default Page;
