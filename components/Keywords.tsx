"use client";

import React, { useState, useEffect, useRef } from "react";
import { Input } from "@nextui-org/input";
import { KeywordType } from "@/types";
import { SeleniumLibrary, BuiltIn, Screenshot, Strings } from "@/config/data";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";

import { SearchIcon, FilterIcon } from "./Icons";
import { useGlobalContext } from "@/context/GlobalContext";
import BlockModal from "./BlockModal";
import clsx from "clsx";

const sources = ["SeleniumLibrary", "BuiltIn", "Screenshot", "Strings"];

const chipColors: Record<
  string,
  "primary" | "secondary" | "success" | "warning" | "danger" | "default"
> = {
  SeleniumLibrary: "primary",
  BuiltIn: "secondary",
  Screenshot: "success",
  Strings: "warning",
  // "": "danger",
  default: "default",
};

const allKeywords = [...SeleniumLibrary, ...BuiltIn, ...Screenshot, ...Strings];

const Keywords = ({
  setBlocks,
}: {
  setBlocks: React.Dispatch<React.SetStateAction<any[]>>;
}) => {
  const { setUrl } = useGlobalContext();

  const addBtnRef = useRef<HTMLButtonElement>(null);
  const [list, setList] = useState<KeywordType[]>(allKeywords);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedKeyword, setSelectedKeyword] = useState<KeywordType | null>(
    null
  );
  const [selectedSources, setSelectedSources] = useState<string[]>(sources);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setList(allKeywords);
    } else {
      const filteredList = allKeywords.filter((keyword) =>
        keyword.name.toLowerCase().includes(value.toLowerCase())
      );
      setList(filteredList);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      id: Date.now(),
    };

    if (newBlock.name === "Open Browser" || newBlock.name === "Go To") {
      setUrl(
        (newBlock.args?.find((arg) => arg.name === "url")?.value as string) ||
          ""
      );
    }

    setBlocks((blocks) => [...blocks, newBlock]);
  };

  const filterBySource = (str: string) => {
    if (selectedSources.includes(str)) {
      setSelectedSources((sources) => sources.filter((s) => s !== str));
    } else {
      setSelectedSources((sources) => [...sources, str]);
    }
  };

  useEffect(() => {
    setList(
      allKeywords.filter((keyword) => selectedSources.includes(keyword.source))
    );
  }, [selectedSources]);

  return (
    <div className="flex flex-col gap-4 p-6 pr-0 border-r border-gray-700 h-screen w-[600px] overflow-hidden">
      {selectedKeyword && (
        <BlockModal
          show={showModal}
          setShow={setShowModal}
          block={selectedKeyword}
          onSubmit={handleSubmit}
        />
      )}
      <div className="pr-6 flex items-center gap-2">
        <Input
          label="Search for keywords"
          isClearable
          radius="lg"
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focused=true]:bg-default-200/50",
              "dark:group-data-[focused=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
          placeholder="Type to search..."
          startContent={
            <SearchIcon className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
          onChange={handleFilter}
          onClear={() => setList(allKeywords)}
        />
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered" isIconOnly aria-label="Like">
              <FilterIcon className="fill-slate-100" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Multiple selection example"
            variant="flat"
            closeOnSelect={false}
            disallowEmptySelection
            selectionMode="multiple"
            selectedKeys={selectedSources}
            // onSelectionChange={filterBySource}
          >
            {sources.map((source) => (
              <DropdownItem key={source} onPress={() => filterBySource(source)}>
                {source}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
      <p className="text-xs text-slate-400">
        ({allKeywords.length}) Keywords from ({sources.length}) sources
        available
      </p>
      <div className="overflow-auto flex flex-col h-full">
        <div className="flex flex-col gap-2 h-full">
          {list.length > 0 ? (
            list.map((keyword, index) => (
              <div
                className="flex gap-2 items-center"
                key={keyword.name + index}
              >
                {keyword.source && (
                  <Chip
                    size="sm"
                    color={chipColors?.[keyword.source]}
                    variant="faded"
                  >
                    {keyword.source}
                  </Chip>
                )}
                <span
                  title={keyword.description}
                  className="text-slate-500 cursor-pointer hover:text-slate-200 transition-all"
                  onClick={() => {
                    setSelectedKeyword(keyword);
                    addBtnRef.current?.focus();
                  }}
                >
                  {keyword.name}
                </span>
              </div>
            ))
          ) : (
            <p className="text-slate-400 my-auto text-center">
              you have filtered out all keywords
            </p>
          )}
        </div>
      </div>
      <div
        className={clsx(
          "transition-all delay-200",
          selectedKeyword
            ? "h-fit border-t border-gray-700 mt-auto mr-6 pt-4"
            : "h-0"
        )}
      >
        {selectedKeyword && (
          <>
            <h3 className="text-xl font-bold">{selectedKeyword.name}</h3>
            <p className="text-slate-500">{selectedKeyword.description}</p>
            {selectedKeyword?.args &&
              selectedKeyword?.args.map((arg) => (
                <div key={arg.name} className="flex gap-4 m-1 justify-between">
                  <p
                    className={`text-slate-300 ${
                      arg.required
                        ? "after:content-['*'] after:text-red-500"
                        : ""
                    }`}
                    title="argument title"
                  >
                    {arg.name}
                  </p>
                  <span
                    title="argument default value"
                    className="text-gray-300 p-1 rounded text-xs bg-gray-800"
                  >
                    {arg.default || "--"}
                  </span>
                  <span
                    title="argument type"
                    className="text-gray-300 p-1 rounded text-xs bg-gray-800"
                  >
                    {arg.type?.join(" ") || "--"}
                  </span>
                </div>
              ))}
            <Button
              color="primary"
              variant="bordered"
              className="mt-4 w-full"
              onPress={() => setShowModal(true)}
              ref={addBtnRef}
            >
              Add Block
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Keywords;
