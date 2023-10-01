import { Button } from "@nextui-org/button";
import { useRef } from "react";
import { toast } from "react-toastify";

import { UploadIcon } from "./Icons";

const UploadCSV = ({
  setCsvData,
  headersForValidation,
}: {
  headersForValidation: string[];
  setCsvData: (data: any) => void;
}) => {
  const fileInput = useRef<HTMLInputElement>(null);

  const handleChange = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const csvData = event.target?.result
        ?.toString()
        .split("\n")
        .map((row) => row.split(","));

      if (
        csvData?.[0].map((x) => x.trim()).join("&&") !==
        headersForValidation.join("&&")
      ) {
        toast.error("csv file doesn't match the template");
        return;
      }
      toast.success("csv was uploaded successfully");

      const data = csvData?.slice(1) || [];

      if (data.length > 0) {
        setCsvData(data);
      } else {
        setCsvData([[]]);

        toast.error("csv file is empty");
      }
    };
    reader.readAsText(file);
  };

  return (
    <>
      <Button
        isIconOnly
        title="upload your csv file"
        color="warning"
        variant="faded"
        aria-label="upload csv"
        onClick={() => {
          fileInput.current?.click();
        }}
      >
        <UploadIcon />
      </Button>
      <input
        type="file"
        ref={fileInput}
        accept=".csv"
        onChange={handleChange}
        className="absolute top-0 left-0 hidden w-0 h-0"
      />
    </>
  );
};

export default UploadCSV;
