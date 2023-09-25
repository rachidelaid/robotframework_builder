import { KeywordType } from "@/types";

export const generateScript = (blocks: KeywordType[], csvData: string[][]) => {
  const keys: string[] = [];

  const robotScript = blocks
    .map((keywordData) => {
      const { name, args, disabled, canFail } = keywordData;

      const argumentLines = args
        .map((arg: any) => {
          if (arg.dynamic) {
            if (!keys.includes(arg.name)) {
              keys.push(arg.name);
            }
            return `\${VARIABLES}[${arg.name}]`;
          }

          return arg.value;
        })
        .join("\t");

      return `${disabled ? "#" : ""}\t${
        canFail ? "Run Keyword And Continue On Failure" : ""
      }\t${name}\t${argumentLines}`;
    })
    .join("\n");

  const simpleFileContent = `*** Settings ***
Library     SeleniumLibrary
    
*** Test Cases ***
RUN USER DEFINED SCRIPT
${robotScript}`;

  const varsDefinition = csvData
    .map(
      (row, index) =>
        `&{obj${index + 1}}\t${row
          .map((col, index) => `${keys[index]}=${col}`)
          .join("\t")}`
    )
    .join("\n");

  const fileContentWithVars = `*** Settings ***
Library     SeleniumLibrary

*** Variables ***
${varsDefinition}
@{LIST}\t${csvData.map((_, index) => `&{obj${index + 1}}`).join("\t")}

*** Test Cases ***
RUN USER DEFINED SCRIPT
  FOR    \${VARIABLES}    IN    @{LIST}
    Log    \${VARIABLES}
    ${robotScript
      .split("\n")
      .map((r) => `\t${r}`)
      .join("\n")}
  END
`;

  const fileContent =
    csvData?.[0]?.length > 0 ? fileContentWithVars : simpleFileContent;

  // Create a Blob containing the .robot file content
  const blob = new Blob([fileContent], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  // Create a download link
  const a = document.createElement("a");
  a.href = url;
  a.download = "generated.robot";
  a.click();
};
