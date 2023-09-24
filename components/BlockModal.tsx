import React from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { KeywordType } from "@/types";

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
  const handleChange = (e: boolean) => {
    setShow(e);
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
                {block.args.length > 0 ? (
                  block.args.map((arg) => (
                    <Input
                      key={arg.name}
                      autoFocus
                      label={arg.name}
                      variant="bordered"
                      isRequired={arg.required}
                      name={arg.name}
                      defaultValue={arg?.value}
                    />
                  ))
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
