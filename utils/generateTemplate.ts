import { KeywordType } from "@/types";

export const generateTemplate = (blocks: KeywordType[]) => {
  const columns = blocks
    .map((block) =>
      block.args.map((arg) => {
        if (arg.dynamic) {
          return `[${block.name}] ${arg.name}${arg.required ? "*" : ""}`;
        }
        return null;
      })
    )
    .flat()
    .filter((b) => b != null);

  console.log(columns);

  //generate csv file
  const csvContent = `${columns.join(",")}\n`;

  const blob = new Blob([csvContent], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  // Create a download link
  const a = document.createElement("a");
  a.href = url;
  a.download = "template.csv";
  a.click();
};
