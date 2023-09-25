import { Button } from "@nextui-org/button";
import { useRef } from "react";

const CameraIcon = (props: { className?: string }) => (
  <svg
    fill="none"
    focusable="false"
    height="1.5em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1.5em"
    stroke-width="2"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="transparent"></path>
    <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"></path>
    <path d="M9 15l3 -3l3 3"></path>
    <path d="M12 12l0 9"></path>
  </svg>
);

const UploadCSV = ({ setCsvData }: { setCsvData: (data: any) => void }) => {
  const fileInput = useRef<HTMLInputElement>(null);

  const handleChange = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const csvData = event.target?.result
        ?.toString()
        .split("\n")
        .map((row) => row.split(","));
      setCsvData(csvData?.slice(1));
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
        aria-label="Take a photo"
        onClick={() => {
          fileInput.current?.click();
        }}
      >
        <CameraIcon />
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
