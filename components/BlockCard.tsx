import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { chipColors } from "@/config/variables";
import { KeywordType } from "@/types";
import { useState, useRef } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { MoreIcon } from "./Icons";

const BlockCard = ({
  block,
  indent,
  deleteBlock,
  disableBlock,
  editBlock,
  duplicateBlock,
}: {
  block: KeywordType;
  indent: boolean;
  deleteBlock: (id: number) => void;
  disableBlock: (id: number) => void;
  duplicateBlock: (id: number) => void;
  editBlock: (block: KeywordType) => void;
}) => {
  const [dragStart, setDragStart] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      className={clsx("w-full", block.disabled && "opacity-50")}
      draggable
      onDragStart={() => {
        setDragStart(true);
        cardRef.current?.setAttribute("data-dragging", "true");
      }}
      onDragEnd={() => setDragStart(false)}
    >
      <Card
        className={clsx(
          "border-dashed border relative transition-all delay-100 cursor-move py-1",
          dragStart ? "border-yellow-200 opacity-50" : "border-gray-600",
          indent && "ml-6",
          block.noActions && "border-purple-500 bg-purple-800/20 py-0 ml-0"
        )}
        id="block-card"
        data-id={block.id}
        ref={cardRef}
      >
        <CardBody>
          <div className="flex gap-8 items-center">
            {!block.noActions && (
              <>
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
              </>
            )}
            <p className="font-bold">{block.name}</p>
            {block.args.map((arg: any) => (
              <p key={arg.name} className="text-gray-500">
                {arg.value.length > 30
                  ? `${arg.value.slice(0, 30)}...`
                  : arg.value}
              </p>
            ))}
            {!block.noActions && (
              <div className="ml-auto">
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered" isIconOnly aria-label="Like">
                      <MoreIcon className="fill-slate-100" />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem
                      key="copy"
                      onPress={() => block.id && duplicateBlock(block.id)}
                    >
                      Duplicate Block
                    </DropdownItem>
                    <DropdownItem
                      key="toggle"
                      onPress={() => block.id && disableBlock(block.id)}
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
                      onPress={() => editBlock(block)}
                    >
                      Edit Block
                    </DropdownItem>
                    <DropdownItem
                      key="delete"
                      className="text-danger"
                      color="danger"
                      onPress={() => block.id && deleteBlock(block.id)}
                    >
                      Delete Block
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            )}
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default BlockCard;
