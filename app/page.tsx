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
import { generateScript } from "@/utils/generateScript";

import Keywords from "@/components/Keywords";
import BlockModal from "@/components/BlockModal";
import { generateTemplate } from "@/utils/generateTemplate";
import UploadCSV from "@/components/UploadCSV";

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
      id: 1695652106506,
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
      canFail: false,
      id: 1695652113838,
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
      id: 1695652128557,
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
      id: 1695652183893,
    },
  ]);

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

    const newBlocks = blocks.map((block) => {
      if (block.id === selectedKeyword?.id) {
        return newBlock;
      }
      return block;
    });
    setBlocks(newBlocks as KeywordType[]);
  };

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
                    {block.canFail && (
                      <span className="text-xs text-yellow-300 font-normal absolute bottom-0 left-2">
                        (with try catch)
                      </span>
                    )}
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
      <div className="flex gap-2 absolute bottom-8 right-8 z-50">
        {blocks.filter((b) => !b.disabled).length > 0 &&
          !blocks.some((b) => b.args.some((arg) => arg.dynamic)) && (
            <Button
              color="success"
              onPress={() => generateScript(blocks, csvData)}
            >
              Generate Script
            </Button>
          )}
        {blocks.some((b) => b.args.some((arg) => arg.dynamic)) && (
          <>
            {csvData[0].length > 0 && (
              <Button
                color="success"
                onPress={() => generateScript(blocks, csvData)}
              >
                Generate Script
              </Button>
            )}
            <Button color="primary" onPress={() => generateTemplate(blocks)}>
              Download Template
            </Button>
            <UploadCSV setCsvData={setCsvData} />
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
