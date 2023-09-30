import { KeywordType } from "@/types";

export const generateTemplate = (blocks: KeywordType[]) => {
  const keys: string[] = [];

  const columns = blocks
    .map((block) =>
      block.args.map((arg) => {
        if (arg.dynamic) {
          const keyName = keys.includes(arg.name)
            ? `${arg.name} (${keys.filter((k) => k.includes(arg.name)).length})`
            : arg.name;
          keys.push(arg.name);
          return `[${block.name}] ${keyName}${arg.required ? "*" : ""}`;
        }
        return null;
      })
    )
    .flat()
    .filter((b) => b != null);

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
