import React, { useState, useEffect } from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";
import { KeywordType } from "@/types";
import { Switch } from "@nextui-org/switch";

export default function BlockModal({
  show,
  setShow,
  block,
  onSubmit,
  modify = false,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  block: KeywordType;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  modify?: boolean;
}) {
  const [currentBlock, setCurrentBlock] = useState<KeywordType>(block);

  useEffect(() => {
    setCurrentBlock(block);
  }, [block, show]);

  const handleChange = (e: boolean) => {
    setShow(e);
  };

  const updateBlock = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name.split("_dynamic")[0];

    const newBlock = {
      ...currentBlock,
      args: currentBlock.args.map((arg) => {
        if (arg.name === name) {
          if (e.target.checked) {
            return {
              ...arg,
              dynamic: e.target.checked,
              value: "{VARIABLE}",
            };
          } else if (arg.value === "{VARIABLE}") {
            const input =
              e.target.parentElement?.parentElement?.nextElementSibling?.querySelector(
                "input"
              );

            if (input) {
              input.value = "";
            }
            return {
              ...arg,
              dynamic: e.target.checked,
              value: "",
            };
          }
        }

        return arg;
      }),
    };

    setCurrentBlock(newBlock);
  };

  return (
    <>
      <Modal isOpen={show} onOpenChange={handleChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit(e);
                onClose();
              }}
            >
              <ModalHeader className="flex flex-col gap-1">
                {modify ? "Modify" : "Add"} Block
              </ModalHeader>
              <ModalBody>
                {currentBlock.args.length > 0 ? (
                  <>
                    {currentBlock.args.map((arg) => {
                      const valueProps: any = {};

                      if (arg?.dynamic) {
                        valueProps["value"] = arg.value;
                      } else {
                        valueProps["defaultValue"] = arg.value;
                      }

                      return (
                        <div className="flex items-center gap-2" key={arg.name}>
                          <Checkbox
                            isSelected={arg?.dynamic}
                            size="sm"
                            title="this is a dynamic argument"
                            name={`${arg.name}_dynamic`}
                            value="true"
                            onChange={updateBlock}
                          />
                          <Input
                            autoFocus
                            label={arg.name}
                            variant="bordered"
                            isRequired={arg.required}
                            name={arg.name}
                            readOnly={arg?.dynamic}
                            {...valueProps}
                          />
                        </div>
                      );
                    })}

                    <div className="border-t border-gray-600 w-full mt-2 pt-4">
                      <Switch
                        size="sm"
                        name="can_fail"
                        value="true"
                        defaultSelected={currentBlock.canFail}
                      >
                        It&apos;s okay for this block to fail
                      </Switch>
                    </div>
                  </>
                ) : (
                  <p className="text-gray-500 text-center">
                    This keyword doesn&rsquo;t have arguments
                  </p>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" type="submit">
                  {modify ? "Modify" : "Add"}
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
