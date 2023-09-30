import { KeywordType } from "@/types";

export const checkScriptFormat = (
  blocks: KeywordType[],
  setError: (str: string) => void
) => {
  const loopStartIndex = blocks.findIndex(
    (block) => block.name === "FOR LOOP START"
  );
  const loopEndIndex = blocks.findIndex(
    (block) => block.name === "FOR LOOP END"
  );

  //check the variables are within the loop

  const varsIndexs =
    blocks
      .map((block, index) => {
        if (block.args.some((arg) => arg.dynamic)) return index;
        return null;
      })
      .filter((i) => i !== null) || [];

  for (let i = 0; i < varsIndexs.length; i++) {
    const index = varsIndexs[i];
    if (index && (index < loopStartIndex || index > loopEndIndex)) {
      setError("Dynamic arguments must be within a loop");
      return;
    }
  }

  //check the open and close browser are both within the loop or both outside the loop

  const openBrowserIndex = blocks.findIndex((b) => b.name === "Open Browser");
  const closeBrowserIndex = blocks.findIndex((b) => b.name === "Close Browser");

  if (openBrowserIndex < loopStartIndex && closeBrowserIndex < loopEndIndex) {
    setError(
      "move close browser to outside of loop or move open browser to inside of loop"
    );
    return;
  }

  if (openBrowserIndex > loopStartIndex && closeBrowserIndex > loopEndIndex) {
    setError(
      "move open browser to outside of loop or move close browser to inside of loop"
    );
    return;
  }

  //reset error
  setError("");
};
