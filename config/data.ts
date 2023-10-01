import { KeywordType } from "@/types";

export const SeleniumLibrary: KeywordType[] = [
  {
    name: "Add Cookie",
    args: [
      { name: "name", required: true, type: ["<str>"] },
      { name: "value", required: true, type: ["<str>"] },
      {
        name: "path",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
      {
        name: "domain",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
      {
        name: "secure",
        required: false,
        default: "None",
        type: ["<bool>", "<None>"],
      },
      {
        name: "expiry",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
    ],
    description: "Adds a cookie to your current session.",

    source: "SeleniumLibrary",
  },
  {
    name: "Add Location Strategy",
    args: [
      { name: "strategy_name", required: true, type: ["<str>"] },
      { name: "strategy_keyword", required: true, type: ["<str>"] },
      { name: "persist", required: false, default: "False", type: ["<bool>"] },
    ],
    description: "Adds a custom location strategy.",
    source: "SeleniumLibrary",
  },
  {
    name: "Alert Should Be Present",
    args: [
      { name: "text", required: false, default: "", type: ["<str>"] },
      { name: "action", required: false, default: "ACCEPT", type: ["<str>"] },
      {
        name: "timeout",
        required: false,
        default: "None",
        type: ["<timedelta>", "<None>"],
      },
    ],
    description:
      "Verifies that an alert is present and by default, accepts it.",
    source: "SeleniumLibrary",
  },
  {
    name: "Alert Should Not Be Present",
    args: [
      { name: "action", required: false, default: "ACCEPT", type: ["<str>"] },
      {
        name: "timeout",
        required: false,
        default: "None",
        type: ["<timedelta>", "<None>"],
      },
    ],
    description: "Verifies that no alert is present.",
    source: "SeleniumLibrary",
  },
  {
    name: "Assign Id To Element",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      { name: "id", required: true, type: ["<str>"] },
    ],
    description: "Assigns a temporary id to the element specified by locator.",

    source: "SeleniumLibrary",
  },
  {
    name: "Capture Element Screenshot",
    args: [
      {
        name: "locator",
        required: true,
        type: ["<WebElement>", "<None>", "<str>"],
      },
      {
        name: "filename",
        required: false,
        default: "selenium-element-screenshot-{index}.png",
        type: ["<str>"],
      },
    ],
    description:
      "Captures a screenshot from the element identified by locator and embeds it into log file.",

    source: "SeleniumLibrary",
  },
  {
    name: "Capture Page Screenshot",
    args: [
      {
        name: "filename",
        required: false,
        default: "selenium-screenshot-{index}.png",
        type: ["<str>"],
      },
    ],
    description:
      "Takes a screenshot of the current page and embeds it into a log file.",

    source: "SeleniumLibrary",
  },
  {
    name: "Checkbox Should Be Selected",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description: "Verifies checkbox locator is selected/checked.",
    source: "SeleniumLibrary",
  },
  {
    name: "Checkbox Should Not Be Selected",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description: "Verifies checkbox locator is not selected/checked.",
    source: "SeleniumLibrary",
  },
  {
    name: "Choose File",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      { name: "file_path", required: true, type: ["<str>"] },
    ],
    description: "Inputs the file_path into the file input field locator.",

    source: "SeleniumLibrary",
  },
  {
    name: "Clear Element Text",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description:
      "Clears the value of the text-input-element identified by locator.",
    source: "SeleniumLibrary",
  },
  {
    name: "Click Button",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      {
        name: "modifier",
        required: false,
        default: "False",
        type: ["<bool>", "<str>"],
      },
    ],
    description: "Clicks the button identified by locator.",
    source: "SeleniumLibrary",
  },
  {
    name: "Click Element",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      {
        name: "modifier",
        required: false,
        default: "False",
        type: ["<bool>", "<str>"],
      },
      {
        name: "action_chain",
        required: false,
        default: "False",
        type: ["<bool>"],
      },
    ],
    description: "Click the element identified by locator.",

    source: "SeleniumLibrary",
  },
  {
    name: "Click Element At Coordinates",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      { name: "xoffset", required: true, type: ["<int>"] },
      { name: "yoffset", required: true, type: ["<int>"] },
    ],
    description: "Click the element locator at xoffset/yoffset.",
    source: "SeleniumLibrary",
  },
  {
    name: "Click Image",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      {
        name: "modifier",
        required: false,
        default: "False",
        type: ["<bool>", "<str>"],
      },
    ],
    description: "Clicks an image identified by locator.",
    source: "SeleniumLibrary",
  },
  {
    name: "Click Link",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      {
        name: "modifier",
        required: false,
        default: "False",
        type: ["<bool>", "<str>"],
      },
    ],
    description: "Clicks a link identified by locator.",
    source: "SeleniumLibrary",
  },
  {
    name: "Close All Browsers",
    args: [],
    description: "Closes all open browsers and resets the browser cache.",
    source: "SeleniumLibrary",
  },
  {
    name: "Close Browser",
    args: [],
    description: "Closes the current browser.",
    source: "SeleniumLibrary",
  },
  {
    name: "Close Window",
    args: [],
    description: "Closes currently opened and selected browser window/tab.",
    source: "SeleniumLibrary",
  },
  {
    name: "Cover Element",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description:
      "Will cover elements identified by locator with a blue div without breaking page layout.",
    source: "SeleniumLibrary",
  },
  {
    name: "Create Webdriver",
    args: [
      { name: "driver_name", required: true, type: ["<str>"] },
      {
        name: "alias",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
      { name: "kwargs", required: false, default: "{}" },
      { name: "** init_kwargs", required: false },
    ],
    description: "Creates an instance of Selenium WebDriver.",

    source: "SeleniumLibrary",
  },
  {
    name: "Current Frame Should Contain",
    args: [
      { name: "text", required: true, type: ["<str>"] },
      { name: "loglevel", required: false, default: "TRACE", type: ["<str>"] },
    ],
    description: "Verifies that the current frame contains text.",
    source: "SeleniumLibrary",
  },
  {
    name: "Current Frame Should Not Contain",
    args: [
      { name: "text", required: true, type: ["<str>"] },
      { name: "loglevel", required: false, default: "TRACE", type: ["<str>"] },
    ],
    description: "Verifies that the current frame does not contain text.",
    source: "SeleniumLibrary",
  },
  {
    name: "Delete All Cookies",
    args: [],
    description: "Deletes all cookies.",
    source: "SeleniumLibrary",
  },
  {
    name: "Delete Cookie",
    args: [{ name: "name", required: true }],
    description: "Deletes the cookie matching name.",
    source: "SeleniumLibrary",
  },
  {
    name: "Double Click Element",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description: "Double clicks the element identified by locator.",
    source: "SeleniumLibrary",
  },
  {
    name: "Drag And Drop",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      { name: "target", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description:
      "Drags the element identified by locator into the target element.",

    source: "SeleniumLibrary",
  },
  {
    name: "Drag And Drop By Offset",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      { name: "xoffset", required: true, type: ["<int>"] },
      { name: "yoffset", required: true, type: ["<int>"] },
    ],
    description:
      "Drags the element identified with locator by xoffset/yoffset.",

    source: "SeleniumLibrary",
  },
  {
    name: "Element Attribute Value Should Be",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      { name: "attribute", required: true, type: ["<str>"] },
      { name: "expected", required: true, type: ["<None>", "<str>"] },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
    ],
    description:
      "Verifies element identified by locator contains expected attribute value.",
    source: "SeleniumLibrary",
  },
  {
    name: "Element Should Be Disabled",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description: "Verifies that element identified by locator is disabled.",
    source: "SeleniumLibrary",
  },
  {
    name: "Element Should Be Enabled",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description: "Verifies that element identified by locator is enabled.",
    source: "SeleniumLibrary",
  },
  {
    name: "Element Should Be Focused",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description: "Verifies that element identified by locator is focused.",
    source: "SeleniumLibrary",
  },
  {
    name: "Element Should Be Visible",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
    ],
    description: "Verifies that the element identified by locator is visible.",
    source: "SeleniumLibrary",
  },
  {
    name: "Element Should Contain",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      { name: "expected", required: true, type: ["<None>", "<str>"] },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
      {
        name: "ignore_case",
        required: false,
        default: "False",
        type: ["<bool>"],
      },
    ],
    description: "Verifies that element locator contains text expected.",
    source: "SeleniumLibrary",
  },
  {
    name: "Element Should Not Be Visible",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
    ],
    description:
      "Verifies that the element identified by locator is NOT visible.",
    source: "SeleniumLibrary",
  },
  {
    name: "Element Should Not Contain",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      { name: "expected", required: true, type: ["<None>", "<str>"] },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
      {
        name: "ignore_case",
        required: false,
        default: "False",
        type: ["<bool>"],
      },
    ],
    description:
      "Verifies that element locator does not contain text expected.",
    source: "SeleniumLibrary",
  },
  {
    name: "Element Text Should Be",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      { name: "expected", required: true, type: ["<None>", "<str>"] },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
      {
        name: "ignore_case",
        required: false,
        default: "False",
        type: ["<bool>"],
      },
    ],
    description:
      "Verifies that element locator contains exact the text expected.",
    source: "SeleniumLibrary",
  },
  {
    name: "Element Text Should Not Be",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      { name: "not_expected", required: true, type: ["<None>", "<str>"] },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
      {
        name: "ignore_case",
        required: false,
        default: "False",
        type: ["<bool>"],
      },
    ],
    description:
      "Verifies that element locator does not contain exact the text not_expected.",
    source: "SeleniumLibrary",
  },
  {
    name: "Execute Async Javascript",
    args: [
      { name: "* code", required: false, type: ["<WebElement>", "<str>"] },
    ],
    description:
      "Executes asynchronous JavaScript code with possible arguments.",

    source: "SeleniumLibrary",
  },
  {
    name: "Execute Javascript",
    args: [
      { name: "* code", required: false, type: ["<WebElement>", "<str>"] },
    ],
    description: "Executes the given JavaScript code with possible arguments.",

    source: "SeleniumLibrary",
  },
  {
    name: "Frame Should Contain",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      { name: "text", required: true, type: ["<str>"] },
      { name: "loglevel", required: false, default: "TRACE", type: ["<str>"] },
    ],
    description: "Verifies that frame identified by locator contains text.",
    source: "SeleniumLibrary",
  },
  {
    name: "Get Action Chain Delay",
    args: [],
    description:
      "Gets the currently stored value for chain_delay_value in timestr format.",
    source: "SeleniumLibrary",
  },
  {
    name: "Get All Links",
    args: [],
    description:
      "Returns a list containing ids of all links found in current page.",
    source: "SeleniumLibrary",
  },
  {
    name: "Get Browser Aliases",
    args: [],
    description:
      "Returns aliases of all active browser that has an alias as NormalizedDict. The dictionary contains the aliases as keys and the index as value. This can be accessed as dictionary {aliases.key} or as list @{aliases}[0].",

    source: "SeleniumLibrary",
  },
  {
    name: "Get Browser Ids",
    args: [],
    description: "Returns index of all active browser as list.",

    source: "SeleniumLibrary",
  },
  {
    name: "Get Cookie",
    args: [{ name: "name", required: true, type: ["<str>"] }],
    description: "Returns information of cookie with name as an object.",

    source: "SeleniumLibrary",
  },
  {
    name: "Get Cookies",
    args: [
      { name: "as_dict", required: false, default: "False", type: ["<bool>"] },
    ],
    description: "Returns all cookies of the current page.",
    source: "SeleniumLibrary",
  },
  {
    name: "Get Element Attribute",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      { name: "attribute", required: true, type: ["<str>"] },
    ],
    description: "Returns the value of attribute from the element locator.",

    source: "SeleniumLibrary",
  },
  {
    name: "Get Element Count",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description: "Returns the number of elements matching locator.",

    source: "SeleniumLibrary",
  },
  {
    name: "Get Element Size",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description:
      "Returns width and height of the element identified by locator.",

    source: "SeleniumLibrary",
  },
  {
    name: "Get Horizontal Position",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description:
      "Returns the horizontal position of the element identified by locator.",
    source: "SeleniumLibrary",
  },
  {
    name: "Get List Items",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      { name: "values", required: false, default: "False", type: ["<bool>"] },
    ],
    description: "Returns all labels or values of selection list locator.",

    source: "SeleniumLibrary",
  },
  {
    name: "Get Location",
    args: [],
    description: "Returns the current browser window URL.",
    source: "SeleniumLibrary",
  },
  {
    name: "Get Locations",
    args: [
      { name: "browser", required: false, default: "CURRENT", type: ["<str>"] },
    ],
    description:
      "Returns and logs URLs of all windows of the selected browser.",
    source: "SeleniumLibrary",
  },
  {
    name: "Get Selected List Label",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description:
      "Returns the label of selected option from selection list locator.",
    source: "SeleniumLibrary",
  },
  {
    name: "Get Selected List Labels",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description:
      "Returns labels of selected options from selection list locator.",
    source: "SeleniumLibrary",
  },
  {
    name: "Get Selected List Value",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description:
      "Returns the value of selected option from selection list locator.",
    source: "SeleniumLibrary",
  },
  {
    name: "Get Selected List Values",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description:
      "Returns values of selected options from selection list locator.",
    source: "SeleniumLibrary",
  },
  {
    name: "Get Selenium Implicit Wait",
    args: [],
    description: "Gets the implicit wait value used by Selenium.",
    source: "SeleniumLibrary",
  },
  {
    name: "Get Selenium Page Load Timeout",
    args: [],
    description:
      "Gets the timeout to wait for a page load to complete before throwing an error.",
    source: "SeleniumLibrary",
  },
  {
    name: "Get Selenium Speed",
    args: [],
    description: "Gets the delay that is waited after each Selenium command.",
    source: "SeleniumLibrary",
  },
  {
    name: "Get Selenium Timeout",
    args: [],
    description: "Gets the timeout that is used by various keywords.",
    source: "SeleniumLibrary",
  },
  {
    name: "Get Session Id",
    args: [],
    description: "Returns the currently active browser session id.",
    source: "SeleniumLibrary",
  },
  {
    name: "Get Source",
    args: [],
    description: "Returns the entire HTML source of the current page or frame.",
    source: "SeleniumLibrary",
  },
  {
    name: "Get Table Cell",
    args: [
      {
        name: "locator",
        required: true,
        type: ["<WebElement>", "<None>", "<str>"],
      },
      { name: "row", required: true, type: ["<int>"] },
      { name: "column", required: true, type: ["<int>"] },
      { name: "loglevel", required: false, default: "TRACE", type: ["<str>"] },
    ],
    description: "Returns contents of a table cell.",
    source: "SeleniumLibrary",
  },
  {
    name: "Get Text",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description: "Returns the text value of the element identified by locator.",
    source: "SeleniumLibrary",
  },
  {
    name: "Get Title",
    args: [],
    description: "Returns the title of the current page.",
    source: "SeleniumLibrary",
  },
  {
    name: "Get Value",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description:
      "Returns the value attribute of the element identified by locator.",
    source: "SeleniumLibrary",
  },
  {
    name: "Get Vertical Position",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description:
      "Returns the vertical position of the element identified by locator.",
    source: "SeleniumLibrary",
  },
  {
    name: "Get WebElement",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description: "Returns the first WebElement matching the given locator.",
    source: "SeleniumLibrary",
  },
  {
    name: "Get WebElements",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description: "Returns a list of WebElement objects matching the locator.",
    source: "SeleniumLibrary",
  },
  {
    name: "Get Window Handles",
    args: [
      { name: "browser", required: false, default: "CURRENT", type: ["<str>"] },
    ],
    description:
      "Returns all child window handles of the selected browser as a list.",
    source: "SeleniumLibrary",
  },
  {
    name: "Get Window Identifiers",
    args: [
      { name: "browser", required: false, default: "CURRENT", type: ["<str>"] },
    ],
    description:
      "Returns and logs id attributes of all windows of the selected browser.",
    source: "SeleniumLibrary",
  },
  {
    name: "Get Window Names",
    args: [
      { name: "browser", required: false, default: "CURRENT", type: ["<str>"] },
    ],
    description:
      "Returns and logs names of all windows of the selected browser.",
    source: "SeleniumLibrary",
  },
  {
    name: "Get Window Position",
    args: [],
    description: "Returns current window position.",

    source: "SeleniumLibrary",
  },
  {
    name: "Get Window Size",
    args: [
      { name: "inner", required: false, default: "False", type: ["<bool>"] },
    ],
    description: "Returns current window width and height as integers.",

    source: "SeleniumLibrary",
  },
  {
    name: "Get Window Titles",
    args: [
      { name: "browser", required: false, default: "CURRENT", type: ["<str>"] },
    ],
    description:
      "Returns and logs titles of all windows of the selected browser.",
    source: "SeleniumLibrary",
  },
  {
    name: "Go Back",
    args: [],
    description:
      "Simulates the user clicking the back button on their browser.",
    source: "SeleniumLibrary",
  },
  {
    name: "Go To",
    args: [{ name: "url", required: true }],
    description: "Navigates the current browser window to the provided url.",
    source: "SeleniumLibrary",
  },
  {
    name: "Handle Alert",
    args: [
      { name: "action", required: false, default: "ACCEPT", type: ["<str>"] },
      {
        name: "timeout",
        required: false,
        default: "None",
        type: ["<timedelta>", "<None>"],
      },
    ],
    description: "Handles the current alert and returns its message.",

    source: "SeleniumLibrary",
  },
  {
    name: "Input Password",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      { name: "password", required: true, type: ["<str>"] },
      { name: "clear", required: false, default: "True", type: ["<bool>"] },
    ],
    description:
      "Types the given password into the text field identified by locator.",

    source: "SeleniumLibrary",
  },
  {
    name: "Input Text",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      { name: "text", required: true, type: ["<str>"] },
      { name: "clear", required: false, default: "True", type: ["<bool>"] },
    ],
    description:
      "Types the given text into the text field identified by locator.",
    source: "SeleniumLibrary",
  },
  {
    name: "Input Text Into Alert",
    args: [
      { name: "text", required: true, type: ["<str>"] },
      { name: "action", required: false, default: "ACCEPT", type: ["<str>"] },
      {
        name: "timeout",
        required: false,
        default: "None",
        type: ["<timedelta>", "<None>"],
      },
    ],
    description: "Types the given text into an input field in an alert.",
    source: "SeleniumLibrary",
  },
  {
    name: "List Selection Should Be",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      { name: "* expected", required: false, type: ["<str>"] },
    ],
    description:
      "Verifies selection list locator has expected options selected.",

    source: "SeleniumLibrary",
  },
  {
    name: "List Should Have No Selections",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description: "Verifies selection list locator has no options selected.",
    source: "SeleniumLibrary",
  },
  {
    name: "Location Should Be",
    args: [
      { name: "url", required: true, type: ["<str>"] },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
    ],
    description: "Verifies that the current URL is exactly url.",
    source: "SeleniumLibrary",
  },
  {
    name: "Location Should Contain",
    args: [
      { name: "expected", required: true, type: ["<str>"] },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
    ],
    description: "Verifies that the current URL contains expected.",
    source: "SeleniumLibrary",
  },
  {
    name: "Log Location",
    args: [],
    description: "Logs and returns the current browser window URL.",
    source: "SeleniumLibrary",
  },
  {
    name: "Log Source",
    args: [
      { name: "loglevel", required: false, default: "INFO", type: ["<str>"] },
    ],
    description:
      "Logs and returns the HTML source of the current page or frame.",
    source: "SeleniumLibrary",
  },
  {
    name: "Log Title",
    args: [],
    description: "Logs and returns the title of the current page.",
    source: "SeleniumLibrary",
  },
  {
    name: "Maximize Browser Window",
    args: [],
    description: "Maximizes current browser window.",
    source: "SeleniumLibrary",
  },
  {
    name: "Mouse Down",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description:
      "Simulates pressing the left mouse button on the element locator.",
    source: "SeleniumLibrary",
  },
  {
    name: "Mouse Down On Image",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description:
      "Simulates a mouse down event on an image identified by locator.",
    source: "SeleniumLibrary",
  },
  {
    name: "Mouse Down On Link",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description:
      "Simulates a mouse down event on a link identified by locator.",
    source: "SeleniumLibrary",
  },
  {
    name: "Mouse Out",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description: "Simulates moving the mouse away from the element locator.",
    source: "SeleniumLibrary",
  },
  {
    name: "Mouse Over",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description: "Simulates hovering the mouse over the element locator.",
    source: "SeleniumLibrary",
  },
  {
    name: "Mouse Up",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description:
      "Simulates releasing the left mouse button on the element locator.",
    source: "SeleniumLibrary",
  },
  {
    name: "Open Browser",
    args: [
      {
        name: "url",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
      { name: "browser", required: false, default: "firefox", type: ["<str>"] },
      {
        name: "alias",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
      {
        name: "remote_url",
        required: false,
        default: "False",
        type: ["<bool>", "<str>"],
      },
      {
        name: "desired_capabilities",
        required: false,
        default: "None",
        type: ["<dict>", "<None>", "<str>"],
      },
      {
        name: "ff_profile_dir",
        required: false,
        default: "None",
        type: ["<FirefoxProfile>", "<str>", "<None>"],
      },
      {
        name: "options",
        required: false,
        default: "None",
        type: ["<Any>", "<None>"],
      },
      {
        name: "service_log_path",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
      {
        name: "executable_path",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
    ],
    description: "Opens a new browser instance to the optional url.",

    source: "SeleniumLibrary",
  },
  {
    name: "Open Context Menu",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description: "Opens the context menu on the element identified by locator.",
    source: "SeleniumLibrary",
  },
  {
    name: "Page Should Contain",
    args: [
      { name: "text", required: true, type: ["<str>"] },
      { name: "loglevel", required: false, default: "TRACE", type: ["<str>"] },
    ],
    description: "Verifies that current page contains text.",
    source: "SeleniumLibrary",
  },
  {
    name: "Page Should Contain Button",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
      { name: "loglevel", required: false, default: "TRACE", type: ["<str>"] },
    ],
    description: "Verifies button locator is found from current page.",
    source: "SeleniumLibrary",
  },
  {
    name: "Page Should Contain Checkbox",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
      { name: "loglevel", required: false, default: "TRACE", type: ["<str>"] },
    ],
    description: "Verifies checkbox locator is found from the current page.",
    source: "SeleniumLibrary",
  },
  {
    name: "Page Should Contain Element",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
      { name: "loglevel", required: false, default: "TRACE", type: ["<str>"] },
      {
        name: "limit",
        required: false,
        default: "None",
        type: ["<int>", "<None>"],
      },
    ],
    description: "Verifies that element locator is found on the current page.",

    source: "SeleniumLibrary",
  },
  {
    name: "Page Should Contain Image",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
      { name: "loglevel", required: false, default: "TRACE", type: ["<str>"] },
    ],
    description:
      "Verifies image identified by locator is found from current page.",
    source: "SeleniumLibrary",
  },
  {
    name: "Page Should Contain Link",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
      { name: "loglevel", required: false, default: "TRACE", type: ["<str>"] },
    ],
    description:
      "Verifies link identified by locator is found from current page.",
    source: "SeleniumLibrary",
  },
  {
    name: "Page Should Contain List",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
      { name: "loglevel", required: false, default: "TRACE", type: ["<str>"] },
    ],
    description: "Verifies selection list locator is found from current page.",
    source: "SeleniumLibrary",
  },
  {
    name: "Page Should Contain Radio Button",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
      { name: "loglevel", required: false, default: "TRACE", type: ["<str>"] },
    ],
    description: "Verifies radio button locator is found from current page.",
    source: "SeleniumLibrary",
  },
  {
    name: "Page Should Contain Textfield",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
      { name: "loglevel", required: false, default: "TRACE", type: ["<str>"] },
    ],
    description: "Verifies text field locator is found from current page.",
    source: "SeleniumLibrary",
  },
  {
    name: "Page Should Not Contain",
    args: [
      { name: "text", required: true, type: ["<str>"] },
      { name: "loglevel", required: false, default: "TRACE", type: ["<str>"] },
    ],
    description: "Verifies the current page does not contain text.",
    source: "SeleniumLibrary",
  },
  {
    name: "Page Should Not Contain Button",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
      { name: "loglevel", required: false, default: "TRACE", type: ["<str>"] },
    ],
    description: "Verifies button locator is not found from current page.",
    source: "SeleniumLibrary",
  },
  {
    name: "Page Should Not Contain Checkbox",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
      { name: "loglevel", required: false, default: "TRACE", type: ["<str>"] },
    ],
    description:
      "Verifies checkbox locator is not found from the current page.",
    source: "SeleniumLibrary",
  },
  {
    name: "Page Should Not Contain Element",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
      { name: "loglevel", required: false, default: "TRACE", type: ["<str>"] },
    ],
    description:
      "Verifies that element locator is not found on the current page.",
    source: "SeleniumLibrary",
  },
  {
    name: "Page Should Not Contain Image",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
      { name: "loglevel", required: false, default: "TRACE", type: ["<str>"] },
    ],
    description:
      "Verifies image identified by locator is not found from current page.",
    source: "SeleniumLibrary",
  },
  {
    name: "Page Should Not Contain Link",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
      { name: "loglevel", required: false, default: "TRACE", type: ["<str>"] },
    ],
    description:
      "Verifies link identified by locator is not found from current page.",
    source: "SeleniumLibrary",
  },
  {
    name: "Page Should Not Contain List",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
      { name: "loglevel", required: false, default: "TRACE", type: ["<str>"] },
    ],
    description:
      "Verifies selection list locator is not found from current page.",
    source: "SeleniumLibrary",
  },
  {
    name: "Page Should Not Contain Radio Button",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
      { name: "loglevel", required: false, default: "TRACE", type: ["<str>"] },
    ],
    description:
      "Verifies radio button locator is not found from current page.",
    source: "SeleniumLibrary",
  },
  {
    name: "Page Should Not Contain Textfield",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
      { name: "loglevel", required: false, default: "TRACE", type: ["<str>"] },
    ],
    description: "Verifies text field locator is not found from current page.",
    source: "SeleniumLibrary",
  },
  {
    name: "Press Key",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      { name: "key", required: true, type: ["<str>"] },
    ],
    description: "DEPRECATED in SeleniumLibrary 4.0. use Press Keys instead.",
    source: "SeleniumLibrary",
  },
  {
    name: "Press Keys",
    args: [
      {
        name: "locator",
        required: false,
        default: "None",
        type: ["<WebElement>", "<None>", "<str>"],
      },
      { name: "* keys", required: false, type: ["<str>"] },
    ],
    description:
      "Simulates the user pressing key(s) to an element or on the active browser.",

    source: "SeleniumLibrary",
  },
  {
    name: "Radio Button Should Be Set To",
    args: [
      { name: "group_name", required: true, type: ["<str>"] },
      { name: "value", required: true, type: ["<str>"] },
    ],
    description: "Verifies radio button group group_name is set to value.",
    source: "SeleniumLibrary",
  },
  {
    name: "Radio Button Should Not Be Selected",
    args: [{ name: "group_name", required: true, type: ["<str>"] }],
    description: "Verifies radio button group group_name has no selection.",
    source: "SeleniumLibrary",
  },
  {
    name: "Register Keyword To Run On Failure",
    args: [{ name: "keyword", required: true, type: ["<str>", "<None>"] }],
    description:
      "Sets the keyword to execute, when a SeleniumLibrary keyword fails.",

    source: "SeleniumLibrary",
  },
  {
    name: "Reload Page",
    args: [],
    description: "Simulates user reloading page.",
    source: "SeleniumLibrary",
  },
  {
    name: "Remove Location Strategy",
    args: [{ name: "strategy_name", required: true, type: ["<str>"] }],
    description: "Removes a previously added custom location strategy.",
    source: "SeleniumLibrary",
  },
  {
    name: "Scroll Element Into View",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description: "Scrolls the element identified by locator into view.",
    source: "SeleniumLibrary",
  },
  {
    name: "Select All From List",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description: "Selects all options from multi-selection list locator.",
    source: "SeleniumLibrary",
  },
  {
    name: "Select Checkbox",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description: "Selects the checkbox identified by locator.",
    source: "SeleniumLibrary",
  },
  {
    name: "Select Frame",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description: "Sets frame identified by locator as the current frame.",

    source: "SeleniumLibrary",
  },
  {
    name: "Select From List By Index",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      { name: "* indexes", required: false, type: ["<str>"] },
    ],
    description: "Selects options from selection list locator by indexes.",
    source: "SeleniumLibrary",
  },
  {
    name: "Select From List By Label",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      { name: "* labels", required: false, type: ["<str>"] },
    ],
    description: "Selects options from selection list locator by labels.",
    source: "SeleniumLibrary",
  },
  {
    name: "Select From List By Value",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      { name: "* values", required: false, type: ["<str>"] },
    ],
    description: "Selects options from selection list locator by values.",
    source: "SeleniumLibrary",
  },
  {
    name: "Select Radio Button",
    args: [
      { name: "group_name", required: true, type: ["<str>"] },
      { name: "value", required: true, type: ["<str>"] },
    ],
    description: "Sets the radio button group group_name to value.",

    source: "SeleniumLibrary",
  },
  {
    name: "Set Action Chain Delay",
    args: [{ name: "value", required: true, type: ["<timedelta>"] }],
    description:
      "Sets the duration of delay in ActionChains() used by SeleniumLibrary.",
    source: "SeleniumLibrary",
  },
  {
    name: "Set Browser Implicit Wait",
    args: [{ name: "value", required: true, type: ["<timedelta>"] }],
    description: "Sets the implicit wait value used by Selenium.",
    source: "SeleniumLibrary",
  },
  {
    name: "Set Focus To Element",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description: "Sets the focus to the element identified by locator.",
    source: "SeleniumLibrary",
  },
  {
    name: "Set Screenshot Directory",
    args: [{ name: "path", required: true, type: ["<None>", "<str>"] }],
    description: "Sets the directory for captured screenshots.",
    source: "SeleniumLibrary",
  },
  {
    name: "Set Selenium Implicit Wait",
    args: [{ name: "value", required: true, type: ["<timedelta>"] }],
    description: "Sets the implicit wait value used by Selenium.",

    source: "SeleniumLibrary",
  },
  {
    name: "Set Selenium Page Load Timeout",
    args: [{ name: "value", required: true, type: ["<timedelta>"] }],
    description: "Sets the page load timeout value used by Selenium.",

    source: "SeleniumLibrary",
  },
  {
    name: "Set Selenium Speed",
    args: [{ name: "value", required: true, type: ["<timedelta>"] }],
    description: "Sets the delay that is waited after each Selenium command.",

    source: "SeleniumLibrary",
  },
  {
    name: "Set Selenium Timeout",
    args: [{ name: "value", required: true, type: ["<timedelta>"] }],
    description: "Sets the timeout that is used by various keywords.",

    source: "SeleniumLibrary",
  },
  {
    name: "Set Window Position",
    args: [
      { name: "x", required: true, type: ["<int>"] },
      { name: "y", required: true, type: ["<int>"] },
    ],
    description: "Sets window position using x and y coordinates.",

    source: "SeleniumLibrary",
  },
  {
    name: "Set Window Size",
    args: [
      { name: "width", required: true, type: ["<int>"] },
      { name: "height", required: true, type: ["<int>"] },
      { name: "inner", required: false, default: "False", type: ["<bool>"] },
    ],
    description: "Sets current windows size to given width and height.",

    source: "SeleniumLibrary",
  },
  {
    name: "Simulate Event",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      { name: "event", required: true, type: ["<str>"] },
    ],
    description: "Simulates event on the element identified by locator.",
    source: "SeleniumLibrary",
  },
  {
    name: "Submit Form",
    args: [
      {
        name: "locator",
        required: false,
        default: "None",
        type: ["<WebElement>", "<None>", "<str>"],
      },
    ],
    description: "Submits a form identified by locator.",
    source: "SeleniumLibrary",
  },
  {
    name: "Switch Browser",
    args: [{ name: "index_or_alias", required: true, type: ["<str>"] }],
    description: "Switches between active browsers using index_or_alias.",

    source: "SeleniumLibrary",
  },
  {
    name: "Switch Window",
    args: [
      {
        name: "locator",
        required: false,
        default: "MAIN",
        type: ["<list>", "<str>"],
      },
      {
        name: "timeout",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
      { name: "browser", required: false, default: "CURRENT", type: ["<str>"] },
    ],
    description: "Switches to browser window matching locator.",

    source: "SeleniumLibrary",
  },
  {
    name: "Table Cell Should Contain",
    args: [
      {
        name: "locator",
        required: true,
        type: ["<WebElement>", "<None>", "<str>"],
      },
      { name: "row", required: true, type: ["<int>"] },
      { name: "column", required: true, type: ["<int>"] },
      { name: "expected", required: true, type: ["<str>"] },
      { name: "loglevel", required: false, default: "TRACE", type: ["<str>"] },
    ],
    description: "Verifies table cell contains text expected.",
    source: "SeleniumLibrary",
  },
  {
    name: "Table Column Should Contain",
    args: [
      {
        name: "locator",
        required: true,
        type: ["<WebElement>", "<None>", "<str>"],
      },
      { name: "column", required: true, type: ["<int>"] },
      { name: "expected", required: true, type: ["<str>"] },
      { name: "loglevel", required: false, default: "TRACE", type: ["<str>"] },
    ],
    description: "Verifies table column contains text expected.",
    source: "SeleniumLibrary",
  },
  {
    name: "Table Footer Should Contain",
    args: [
      {
        name: "locator",
        required: true,
        type: ["<WebElement>", "<None>", "<str>"],
      },
      { name: "expected", required: true, type: ["<str>"] },
      { name: "loglevel", required: false, default: "TRACE", type: ["<str>"] },
    ],
    description: "Verifies table footer contains text expected.",
    source: "SeleniumLibrary",
  },
  {
    name: "Table Header Should Contain",
    args: [
      {
        name: "locator",
        required: true,
        type: ["<WebElement>", "<None>", "<str>"],
      },
      { name: "expected", required: true, type: ["<str>"] },
      { name: "loglevel", required: false, default: "TRACE", type: ["<str>"] },
    ],
    description: "Verifies table header contains text expected.",
    source: "SeleniumLibrary",
  },
  {
    name: "Table Row Should Contain",
    args: [
      {
        name: "locator",
        required: true,
        type: ["<WebElement>", "<None>", "<str>"],
      },
      { name: "row", required: true, type: ["<int>"] },
      { name: "expected", required: true, type: ["<str>"] },
      { name: "loglevel", required: false, default: "TRACE", type: ["<str>"] },
    ],
    description: "Verifies that table row contains text expected.",
    source: "SeleniumLibrary",
  },
  {
    name: "Table Should Contain",
    args: [
      {
        name: "locator",
        required: true,
        type: ["<WebElement>", "<None>", "<str>"],
      },
      { name: "expected", required: true, type: ["<str>"] },
      { name: "loglevel", required: false, default: "TRACE", type: ["<str>"] },
    ],
    description: "Verifies table contains text expected.",
    source: "SeleniumLibrary",
  },
  {
    name: "Textarea Should Contain",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      { name: "expected", required: true, type: ["<str>"] },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
    ],
    description: "Verifies text area locator contains text expected.",
    source: "SeleniumLibrary",
  },
  {
    name: "Textarea Value Should Be",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      { name: "expected", required: true, type: ["<str>"] },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
    ],
    description: "Verifies text area locator has exactly text expected.",
    source: "SeleniumLibrary",
  },
  {
    name: "Textfield Should Contain",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      { name: "expected", required: true, type: ["<str>"] },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
    ],
    description: "Verifies text field locator contains text expected.",
    source: "SeleniumLibrary",
  },
  {
    name: "Textfield Value Should Be",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      { name: "expected", required: true, type: ["<str>"] },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
    ],
    description: "Verifies text field locator has exactly text expected.",
    source: "SeleniumLibrary",
  },
  {
    name: "Title Should Be",
    args: [
      { name: "title", required: true, type: ["<str>"] },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
    ],
    description: "Verifies that the current page title equals title.",
    source: "SeleniumLibrary",
  },
  {
    name: "Unselect All From List",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description: "Unselects all options from multi-selection list locator.",
    source: "SeleniumLibrary",
  },
  {
    name: "Unselect Checkbox",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description: "Removes the selection of checkbox identified by locator.",
    source: "SeleniumLibrary",
  },
  {
    name: "Unselect Frame",
    args: [],
    description: "Sets the main frame as the current frame.",
    source: "SeleniumLibrary",
  },
  {
    name: "Unselect From List By Index",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      { name: "* indexes", required: false, type: ["<str>"] },
    ],
    description: "Unselects options from selection list locator by indexes.",
    source: "SeleniumLibrary",
  },
  {
    name: "Unselect From List By Label",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      { name: "* labels", required: false, type: ["<str>"] },
    ],
    description: "Unselects options from selection list locator by labels.",
    source: "SeleniumLibrary",
  },
  {
    name: "Unselect From List By Value",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
      { name: "* values", required: false, type: ["<str>"] },
    ],
    description: "Unselects options from selection list locator by values.",
    source: "SeleniumLibrary",
  },
  {
    name: "Wait For Condition",
    args: [
      { name: "condition", required: true, type: ["<str>"] },
      {
        name: "timeout",
        required: false,
        default: "None",
        type: ["<timedelta>", "<None>"],
      },
      {
        name: "error",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
    ],
    description: "Waits until condition is true or timeout expires.",

    source: "SeleniumLibrary",
  },
  {
    name: "Wait Until Element Contains",
    args: [
      {
        name: "locator",
        required: true,
        type: ["<WebElement>", "<None>", "<str>"],
      },
      { name: "text", required: true, type: ["<str>"] },
      {
        name: "timeout",
        required: false,
        default: "None",
        type: ["<timedelta>", "<None>"],
      },
      {
        name: "error",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
    ],
    description: "Waits until the element locator contains text.",
    source: "SeleniumLibrary",
  },
  {
    name: "Wait Until Element Does Not Contain",
    args: [
      {
        name: "locator",
        required: true,
        type: ["<WebElement>", "<None>", "<str>"],
      },
      { name: "text", required: true, type: ["<str>"] },
      {
        name: "timeout",
        required: false,
        default: "None",
        type: ["<timedelta>", "<None>"],
      },
      {
        name: "error",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
    ],
    description: "Waits until the element locator does not contain text.",
    source: "SeleniumLibrary",
  },
  {
    name: "Wait Until Element Is Enabled",
    args: [
      {
        name: "locator",
        required: true,
        type: ["<WebElement>", "<None>", "<str>"],
      },
      {
        name: "timeout",
        required: false,
        default: "None",
        type: ["<timedelta>", "<None>"],
      },
      {
        name: "error",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
    ],
    description: "Waits until the element locator is enabled.",
    source: "SeleniumLibrary",
  },
  {
    name: "Wait Until Element Is Not Visible",
    args: [
      {
        name: "locator",
        required: true,
        type: ["<WebElement>", "<None>", "<str>"],
      },
      {
        name: "timeout",
        required: false,
        default: "None",
        type: ["<timedelta>", "<None>"],
      },
      {
        name: "error",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
    ],
    description: "Waits until the element locator is not visible.",
    source: "SeleniumLibrary",
  },
  {
    name: "Wait Until Element Is Visible",
    args: [
      {
        name: "locator",
        required: true,
        type: ["<WebElement>", "<None>", "<str>"],
      },
      {
        name: "timeout",
        required: false,
        default: "None",
        type: ["<timedelta>", "<None>"],
      },
      {
        name: "error",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
    ],
    description: "Waits until the element locator is visible.",
    source: "SeleniumLibrary",
  },
  {
    name: "Wait Until Location Contains",
    args: [
      { name: "expected", required: true, type: ["<str>"] },
      {
        name: "timeout",
        required: false,
        default: "None",
        type: ["<timedelta>", "<None>"],
      },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
    ],
    description: "Waits until the current URL contains expected.",
    source: "SeleniumLibrary",
  },
  {
    name: "Wait Until Location Does Not Contain",
    args: [
      { name: "location", required: true, type: ["<str>"] },
      {
        name: "timeout",
        required: false,
        default: "None",
        type: ["<timedelta>", "<None>"],
      },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
    ],
    description: "Waits until the current URL does not contains location.",
    source: "SeleniumLibrary",
  },
  {
    name: "Wait Until Location Is",
    args: [
      { name: "expected", required: true, type: ["<str>"] },
      {
        name: "timeout",
        required: false,
        default: "None",
        type: ["<timedelta>", "<None>"],
      },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
    ],
    description: "Waits until the current URL is expected.",
    source: "SeleniumLibrary",
  },
  {
    name: "Wait Until Location Is Not",
    args: [
      { name: "location", required: true, type: ["<str>"] },
      {
        name: "timeout",
        required: false,
        default: "None",
        type: ["<timedelta>", "<None>"],
      },
      {
        name: "message",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
    ],
    description: "Waits until the current URL is not location.",
    source: "SeleniumLibrary",
  },
  {
    name: "Wait Until Page Contains",
    args: [
      { name: "text", required: true, type: ["<str>"] },
      {
        name: "timeout",
        required: false,
        default: "None",
        type: ["<timedelta>", "<None>"],
      },
      {
        name: "error",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
    ],
    description: "Waits until text appears on the current page.",
    source: "SeleniumLibrary",
  },
  {
    name: "Wait Until Page Contains Element",
    args: [
      {
        name: "locator",
        required: true,
        type: ["<WebElement>", "<None>", "<str>"],
      },
      {
        name: "timeout",
        required: false,
        default: "None",
        type: ["<timedelta>", "<None>"],
      },
      {
        name: "error",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
      {
        name: "limit",
        required: false,
        default: "None",
        type: ["<int>", "<None>"],
      },
    ],
    description: "Waits until the element locator appears on the current page.",
    source: "SeleniumLibrary",
  },
  {
    name: "Wait Until Page Does Not Contain",
    args: [
      { name: "text", required: true, type: ["<str>"] },
      {
        name: "timeout",
        required: false,
        default: "None",
        type: ["<timedelta>", "<None>"],
      },
      {
        name: "error",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
    ],
    description: "Waits until text disappears from the current page.",
    source: "SeleniumLibrary",
  },
  {
    name: "Wait Until Page Does Not Contain Element",
    args: [
      {
        name: "locator",
        required: true,
        type: ["<WebElement>", "<None>", "<str>"],
      },
      {
        name: "timeout",
        required: false,
        default: "None",
        type: ["<timedelta>", "<None>"],
      },
      {
        name: "error",
        required: false,
        default: "None",
        type: ["<str>", "<None>"],
      },
      {
        name: "limit",
        required: false,
        default: "None",
        type: ["<int>", "<None>"],
      },
    ],
    description:
      "Waits until the element locator disappears from the current page.",
    source: "SeleniumLibrary",
  },
];

export const BuiltIn: KeywordType[] = [
  {
    name: "Call Method",
    source: "BuiltIn",
    args: [
      { name: "object", required: true },
      { name: "method_name", required: true },
      { name: "* args", required: false },
      { name: "** kwargs", required: false },
    ],
    description:
      "Calls the named method of the given object with the provided arguments.",
    example:
      "Example:\nCall Method  {my_object}  my_method  arg1  arg2  kwarg1=value1",
  },
  {
    name: "Catenate",
    source: "BuiltIn",
    args: [{ name: "* items", required: false }],
    description:
      "Catenates the given items together and returns the resulted string.",
    example: "Example:\nCatenate  Hello  world",
  },
  {
    name: "Comment",
    source: "BuiltIn",
    args: [{ name: "* messages", required: false }],
    description:
      "Displays the given messages in the log file as keyword arguments.",
    example: "Example:\nComment  This is a comment  Another comment",
  },
  {
    name: "Continue For Loop",
    source: "BuiltIn",
    args: [],
    description:
      "Skips the current FOR loop iteration and continues from the next.",
    example:
      "Example:\nFOR  ${var}  IN  @{VALUES}\n  Run Keyword If  '${var}' == 'CONTINUE'  Continue For Loop\n  Do Something  ${var}\nEND",
  },
  {
    name: "Continue For Loop If",
    source: "BuiltIn",
    args: [{ name: "condition", required: true }],
    description:
      "Skips the current FOR loop iteration if the condition is true.",
    example:
      "Example:\nFOR  ${var}  IN  @{VALUES}\n  Continue For Loop If  '${var}' == 'CONTINUE'\n  Do Something  ${var}\nEND",
  },
  {
    name: "Convert To Binary",
    source: "BuiltIn",
    args: [
      { name: "item", required: true },
      { name: "base", required: false, default: "None" },
      { name: "prefix", required: false, default: "None" },
      { name: "length", required: false, default: "None" },
    ],
    description: "Converts the given item to a binary string.",
    example: "Example:\nConvert To Binary  10",
  },
  {
    name: "Convert To Boolean",
    source: "BuiltIn",
    args: [{ name: "item", required: true }],
    description: "Converts the given item to Boolean true or false.",
    example: "Example:\nConvert To Boolean  True",
  },
  {
    name: "Convert To Bytes",
    source: "BuiltIn",
    args: [
      { name: "input", required: true },
      { name: "input_type", required: false, default: "text" },
    ],
    description:
      "Converts the given input to bytes according to the input_type.",
    example: "Example:\nConvert To Bytes  hyvä",
  },
  {
    name: "Convert To Hex",
    source: "BuiltIn",
    args: [
      { name: "item", required: true },
      { name: "base", required: false, default: "None" },
      { name: "prefix", required: false, default: "None" },
      { name: "length", required: false, default: "None" },
      { name: "lowercase", required: false, default: "False" },
    ],
    description: "Converts the given item to a hexadecimal string.",
    example: "Example:\nConvert To Hex  255",
  },
  {
    name: "Convert To Integer",
    source: "BuiltIn",
    args: [
      { name: "item", required: true },
      { name: "base", required: false, default: "None" },
    ],
    description: "Converts the given item to an integer number.",
    example: "Example:\nConvert To Integer  100",
  },
  {
    name: "Convert To Number",
    source: "BuiltIn",
    args: [{ name: "item", required: true }],
    description: "Converts the given item to a number.",
    example: "Example:\nConvert To Number  3.14",
  },
  {
    name: "Convert To Octal",
    source: "BuiltIn",
    args: [
      { name: "item", required: true },
      { name: "prefix", required: false, default: "None" },
      { name: "length", required: false, default: "None" },
    ],
    description: "Converts the given item to an octal string.",
    example: "Example:\nConvert To Octal  15",
  },
  {
    name: "Convert To String",
    source: "BuiltIn",
    args: [{ name: "item", required: true }],
    description: "Converts the given item to a string.",
    example: "Example:\nConvert To String  42",
  },
  {
    name: "Convert To Unicode",
    source: "BuiltIn",
    args: [{ name: "item", required: true }],
    description: "Converts the given item to a Unicode string.",
    example: "Example:\nConvert To Unicode  hyvä",
  },

  {
    name: "Return From Keyword If",
    source: "BuiltIn",
    args: [
      { name: "condition", required: true },
      { name: "* return_values", required: false },
    ],
    description:
      "Returns from the enclosing user keyword if condition is true.",
    example: "Example:\nReturn From Keyword If  ${condition}  value_to_return",
  },
  {
    name: "Run Keyword",
    source: "BuiltIn",
    args: [
      { name: "name", required: true },
      { name: "* args", required: false },
    ],
    description: "Executes the given keyword with the given arguments.",
    example: "Example:\nRun Keyword  MyKeyword  arg1  arg2",
  },
  {
    name: "Run Keyword And Continue On Failure",
    source: "BuiltIn",
    args: [
      { name: "name", required: true },
      { name: "* args", required: false },
    ],
    description:
      "Runs the keyword and continues execution even if a failure occurs.",
    example:
      "Example:\nRun Keyword And Continue On Failure  Fail  This is a stupid example",
  },
  {
    name: "Run Keyword And Expect Error",
    source: "BuiltIn",
    args: [
      { name: "expected_error", required: true },
      { name: "name", required: true },
      { name: "* args", required: false },
    ],
    description:
      "Runs the keyword and checks that the expected error occurred.",
    example:
      "Example:\nRun Keyword And Expect Error  ERROR  MyKeyword  arg1  arg2",
  },
  {
    name: "Run Keyword And Ignore Error",
    source: "BuiltIn",
    args: [
      { name: "name", required: true },
      { name: "* args", required: false },
    ],
    description:
      "Runs the given keyword with the given arguments and ignores possible error.",
    example: "Example:\nRun Keyword And Ignore Error  MyKeyword  arg1  arg2",
  },
  {
    name: "Run Keyword And Return",
    source: "BuiltIn",
    args: [
      { name: "name", required: true },
      { name: "* args", required: false },
    ],
    description:
      "Runs the specified keyword and returns from the enclosing user keyword.",
    example: "Example:\nRun Keyword And Return  MyKeyword  arg1  arg2",
  },
  {
    name: "Run Keyword And Return If",
    source: "BuiltIn",
    args: [
      { name: "condition", required: true },
      { name: "name", required: true },
      { name: "* args", required: false },
    ],
    description:
      "Runs the specified keyword and returns from the enclosing user keyword.",
    example:
      "Example:\nRun Keyword And Return If  ${condition}  MyKeyword  arg1  arg2",
  },
  {
    name: "Run Keyword And Return Status",
    source: "BuiltIn",
    args: [
      { name: "name", required: true },
      { name: "* args", required: false },
    ],
    description:
      "Runs the given keyword with given arguments and returns the status as a Boolean value.",
    example: "Example:\nRun Keyword And Return Status  MyKeyword  arg1  arg2",
  },
  {
    name: "Run Keyword And Warn On Failure",
    source: "BuiltIn",
    args: [
      { name: "name", required: true },
      { name: "* args", required: false },
    ],
    description:
      "Runs the specified keyword logs a warning if the keyword fails.",
    example: "Example:\nRun Keyword And Warn On Failure  MyKeyword  arg1  arg2",
  },
  {
    name: "Run Keyword If",
    source: "BuiltIn",
    args: [
      { name: "condition", required: true },
      { name: "name", required: true },
      { name: "* args", required: false },
    ],
    description:
      "Runs the given keyword with the given arguments, if the condition is true.",
    example: "Example:\nRun Keyword If  ${condition}  MyKeyword  arg1  arg2",
  },
  {
    name: "Run Keyword If All Tests Passed",
    source: "BuiltIn",
    args: [
      { name: "name", required: true },
      { name: "* args", required: false },
    ],
    description:
      "Runs the given keyword with the given arguments if all tests passed.",
    example: "Example:\nRun Keyword If All Tests Passed  MyKeyword  arg1  arg2",
  },
  {
    name: "Run Keyword If Any Tests Failed",
    source: "BuiltIn",
    args: [
      { name: "name", required: true },
      { name: "* args", required: false },
    ],
    description:
      "Runs the given keyword with the given arguments if one or more tests failed.",
    example: "Example:\nRun Keyword If Any Tests Failed  MyKeyword  arg1  arg2",
  },
  {
    name: "Run Keyword If Test Failed",
    source: "BuiltIn",
    args: [
      { name: "name", required: true },
      { name: "* args", required: false },
    ],
    description:
      "Runs the given keyword with the given arguments if the test failed.",
    example: "Example:\nRun Keyword If Test Failed  MyKeyword  arg1  arg2",
  },
  {
    name: "Run Keyword If Test Passed",
    source: "BuiltIn",
    args: [
      { name: "name", required: true },
      { name: "* args", required: false },
    ],
    description:
      "Runs the given keyword with the given arguments if the test passed.",
    example: "Example:\nRun Keyword If Test Passed  MyKeyword  arg1  arg2",
  },
  {
    name: "Run Keyword If Timeout Occurred",
    source: "BuiltIn",
    args: [
      { name: "name", required: true },
      { name: "* args", required: false },
    ],
    description:
      "Runs the given keyword if either a test or a keyword timeout has occurred.",
    example: "Example:\nRun Keyword If Timeout Occurred  MyKeyword  arg1  arg2",
  },
  {
    name: "Run Keyword Unless",
    source: "BuiltIn",
    args: [
      { name: "condition", required: true },
      { name: "name", required: true },
      { name: "* args", required: false },
    ],
    description:
      "DEPRECATED since RF 5.0. Use Native IF/ELSE or Run Keyword If instead.",
  },
  {
    name: "Run Keywords",
    source: "BuiltIn",
    args: [{ name: "* keywords", required: false }],
    description: "Executes all the given keywords in a sequence.",
    example: "Example:\nRun Keywords  Keyword1  Keyword2",
  },
  {
    name: "Set Global Variable",
    source: "BuiltIn",
    args: [
      { name: "name", required: true },
      { name: "* values", required: false },
    ],
    description: "Makes a variable available globally in all tests and suites.",
    example: "Example:\nSet Global Variable  ${var_name}  value",
  },
  {
    name: "Set Library Search Order",
    source: "BuiltIn",
    args: [{ name: "* search_order", required: false }],
    description:
      "Sets the resolution order to use when a name matches multiple keywords.",
    example: "Example:\nSet Library Search Order  MyLibrary.Keyword",
  },
  {
    name: "Set Local Variable",
    source: "BuiltIn",
    args: [
      { name: "name", required: true },
      { name: "* values", required: false },
    ],
    description:
      "Makes a variable available everywhere within the local scope.",
    example: "Example:\nSet Local Variable  ${var_name}  value",
  },
  {
    name: "Set Log Level",
    source: "BuiltIn",
    args: [{ name: "level", required: true }],
    description:
      "Sets the log threshold to the specified level and returns the old level.",
    example: "Example:\nSet Log Level  INFO",
  },
  {
    name: "Set Suite Documentation",
    source: "BuiltIn",
    args: [
      { name: "doc", required: true },
      { name: "append", required: false, default: "False" },
      { name: "top", required: false, default: "False" },
    ],
    description: "Sets documentation for the current test suite.",
    example:
      "Example:\nSet Suite Documentation  This is the suite documentation",
  },
  {
    name: "Set Suite Metadata",
    source: "BuiltIn",
    args: [
      { name: "name", required: true },
      { name: "value", required: true },
      { name: "append", required: false, default: "False" },
      { name: "top", required: false, default: "False" },
    ],
    description: "Sets metadata for the current test suite.",
    example: "Example:\nSet Suite Metadata  Suite Tag  tag_value",
  },
  {
    name: "Set Suite Variable",
    source: "BuiltIn",
    args: [
      { name: "name", required: true },
      { name: "* values", required: false },
    ],
    description:
      "Makes a variable available everywhere within the scope of the current suite.",
    example: "Example:\nSet Suite Variable  ${var_name}  value",
  },
  {
    name: "Set Tags",
    source: "BuiltIn",
    args: [{ name: "* tags", required: false }],
    description:
      "Adds given tags for the current test or all tests in a suite.",
    example: "Example:\nSet Tags  tag1  tag2",
  },
  {
    name: "Set Task Variable",
    source: "BuiltIn",
    args: [
      { name: "name", required: true },
      { name: "* values", required: false },
    ],
    description:
      "Makes a variable available everywhere within the scope of the current task.",
    example: "Example:\nSet Task Variable  ${var_name}  value",
  },
  {
    name: "Set Test Documentation",
    source: "BuiltIn",
    args: [
      { name: "doc", required: true },
      { name: "append", required: false, default: "False" },
    ],
    description: "Sets documentation for the current test case.",
    example: "Example:\nSet Test Documentation  This is the test documentation",
  },
  {
    name: "Set Test Message",
    source: "BuiltIn",
    args: [
      { name: "message", required: true },
      { name: "append", required: false, default: "False" },
    ],
    description: "Sets message for the current test case.",
    example: "Example:\nSet Test Message  My message",
  },
  {
    name: "Set Test Variable",
    source: "BuiltIn",
    args: [
      { name: "name", required: true },
      { name: "* values", required: false },
    ],
    description:
      "Makes a variable available everywhere within the scope of the current test.",
    example: "Example:\nSet Test Variable  ${var_name}  value",
  },
  {
    name: "Set Variable",
    source: "BuiltIn",
    args: [{ name: "* values", required: false }],
    description:
      "Returns the given values which can then be assigned to variables.",
    example: "Example:\nSet Variable  ${var_name}  value",
  },
  {
    name: "Set Variable If",
    source: "BuiltIn",
    args: [
      { name: "condition", required: true },
      { name: "* values", required: false },
    ],
    description: "Sets a variable based on the given condition.",
    example: "Example:\nSet Variable If  ${condition}  value1  value2",
  },
  {
    name: "Should Be Empty",
    source: "BuiltIn",
    args: [
      { name: "item", required: true },
      { name: "msg", required: false, default: "None" },
    ],
    description: "Verifies that the given item is empty.",
    example: "Example:\nShould Be Empty  ${my_list}",
  },
  {
    name: "Should Be Equal",
    source: "BuiltIn",
    args: [
      { name: "first", required: true },
      { name: "second", required: true },
      { name: "msg", required: false, default: "None" },
      { name: "values", required: false, default: "True" },
      { name: "ignore_case", required: false, default: "False" },
    ],
    description: "Fails if the given objects are unequal.",
    example: `Example:
        Should Be Equal    \${x}    expected`,
  },
  {
    name: "Should Be Equal As Integers",
    source: "BuiltIn",
    args: [
      { name: "first", required: true },
      { name: "second", required: true },
      { name: "msg", required: false, default: "None" },
      { name: "values", required: false, default: "True" },
      { name: "base", required: false, default: "None" },
    ],
    description:
      "Fails if objects are unequal after converting them to integers.",
    example: `Example:
        Should Be Equal As Integers    42    \${42}`,
  },
  {
    name: "Should Be Equal As Numbers",
    source: "BuiltIn",
    args: [
      { name: "first", required: true },
      { name: "second", required: true },
      { name: "msg", required: false, default: "None" },
      { name: "values", required: false, default: "True" },
      { name: "precision", required: false, default: "6" },
    ],
    description:
      "Fails if objects are unequal after converting them to real numbers.",
    example: `Example:
        Should Be Equal As Numbers    \${x}    1.1`,
  },
  {
    name: "Should Be Equal As Strings",
    source: "BuiltIn",
    args: [
      { name: "first", required: true },
      { name: "second", required: true },
      { name: "msg", required: false, default: "None" },
      { name: "values", required: false, default: "True" },
      { name: "ignore_case", required: false, default: "False" },
    ],
    description:
      "Fails if objects are unequal after converting them to strings.",
    example: `Example:
        Should Be Equal As Strings    \${x}    expected`,
  },
  {
    name: "Should Be True",
    source: "BuiltIn",
    args: [
      { name: "condition", required: true },
      { name: "msg", required: false, default: "None" },
    ],
    description: "Fails if the given condition is not true.",
    example: `Example:
        Should Be True    \${rc} < 10`,
  },
  {
    name: "Should Contain",
    source: "BuiltIn",
    args: [
      { name: "container", required: true },
      { name: "item", required: true },
      { name: "msg", required: false, default: "None" },
      { name: "values", required: false, default: "True" },
      { name: "ignore_case", required: false, default: "False" },
    ],
    description: "Fails if container does not contain item one or more times.",
    example: `Example:
        Should Contain    \${output}    PASS`,
  },
  {
    name: "Should Contain Any",
    source: "BuiltIn",
    args: [
      { name: "container", required: true },
      { name: "* items", required: false },
    ],
    description: "Fails if container does not contain any of the *items.",
    example: `Example:
        Should Contain Any    \${string}    substring 1    substring 2`,
  },
  {
    name: "Should Contain X Times",
    source: "BuiltIn",
    args: [
      { name: "container", required: true },
      { name: "item", required: true },
      { name: "count", required: true },
      { name: "msg", required: false, default: "None" },
      { name: "ignore_case", required: false, default: "False" },
    ],
    description: "Fails if container does not contain item count times.",
    example: `Example:
        Should Contain X Times    \${output}    hello    2`,
  },
  {
    name: "Should End With",
    source: "BuiltIn",
    args: [
      { name: "str1", required: true },
      { name: "str2", required: true },
      { name: "msg", required: false, default: "None" },
      { name: "values", required: false, default: "True" },
      { name: "ignore_case", required: false, default: "False" },
    ],
    description: "Fails if the string str1 does not end with the string str2.",
    example: `Example:
        Should End With    \${str1}    \${str2}`,
  },
  {
    name: "Should Match",
    source: "BuiltIn",
    args: [
      { name: "string", required: true },
      { name: "pattern", required: true },
      { name: "msg", required: false, default: "None" },
      { name: "values", required: false, default: "True" },
      { name: "ignore_case", required: false, default: "False" },
    ],
    description: "Fails if the given string does not match the given pattern.",
    example: `Example:
        Should Match    \${string}    pattern`,
  },
  {
    name: "Should Match Regexp",
    source: "BuiltIn",
    args: [
      { name: "string", required: true },
      { name: "pattern", required: true },
      { name: "msg", required: false, default: "None" },
      { name: "values", required: false, default: "True" },
    ],
    description:
      "Fails if string does not match pattern as a regular expression.",
    example: `Example:
        Should Match Regexp    \${output}    d{6}`,
  },
  {
    name: "Should Not Be Empty",
    source: "BuiltIn",
    args: [
      { name: "item", required: true },
      { name: "msg", required: false, default: "None" },
    ],
    description: "Verifies that the given item is not empty.",
    example: `Example:
        Should Not Be Empty    \${item}`,
  },
  {
    name: "Should Not Be Equal",
    source: "BuiltIn",
    args: [
      { name: "first", required: true },
      { name: "second", required: true },
      { name: "msg", required: false, default: "None" },
      { name: "values", required: false, default: "True" },
    ],
    description: "Fails if the given objects are equal.",
    example: `Example:
        Should Not Be Equal    \${x}    unexpected`,
  },
  {
    name: "Should Not Contain",
    source: "BuiltIn",
    args: [
      { name: "container", required: true },
      { name: "item", required: true },
      { name: "msg", required: false, default: "None" },
      { name: "values", required: false, default: "True" },
    ],
    description: "Fails if container contains item one or more times.",
    example: `Example:
        Should Not Contain    \${output}    FAIL`,
  },
  {
    name: "Should Not Match",
    source: "BuiltIn",
    args: [
      { name: "string", required: true },
      { name: "pattern", required: true },
      { name: "msg", required: false, default: "None" },
      { name: "values", required: false, default: "True" },
    ],
    description: "Fails if the given string matches the given pattern.",
    example: `Example:
        Should Not Match    \${string}    pattern`,
  },
  {
    name: "Should Not Match Regexp",
    source: "BuiltIn",
    args: [
      { name: "string", required: true },
      { name: "pattern", required: true },
      { name: "msg", required: false, default: "None" },
      { name: "values", required: false, default: "True" },
    ],
    description: "Fails if string matches pattern as a regular expression.",
    example: `Example:
        Should Not Match Regexp    \${output}    d{6}`,
  },
  {
    name: "Should Start With",
    source: "BuiltIn",
    args: [
      { name: "str1", required: true },
      { name: "str2", required: true },
      { name: "msg", required: false, default: "None" },
      { name: "values", required: false, default: "True" },
      { name: "ignore_case", required: false, default: "False" },
    ],
    description:
      "Fails if the string str1 does not start with the string str2.",
    example: `Example:
        Should Start With    \${str1}    \${str2}`,
  },
  {
    name: "Should Not Be True",
    source: "BuiltIn",
    args: [
      { name: "condition", required: true },
      { name: "msg", required: false, default: "None" },
    ],
    description: "Fails if the given condition is true.",
    example: `Example:
        Should Not Be True    \${rc} > 10`,
  },
];

export const Screenshot: KeywordType[] = [
  {
    name: "Set Screenshot Directory",
    args: [{ name: "path", required: true }],
    description: "Sets the directory where screenshots are saved.",
    source: "Screenshot",
    example: "Set Screenshot Directory\t/path/to/screenshot/directory",
  },
  {
    name: "Take Screenshot",
    args: [
      { name: "name", required: false, default: "screenshot" },
      { name: "width", required: false, default: "800px" },
    ],
    description:
      "Takes a screenshot in JPEG format and embeds it into the log file.",
    source: "Screenshot",
    example: "Take Screenshot\tmy_screenshot_name\t1280x720",
  },
  {
    name: "Take Screenshot Without Embedding",
    args: [{ name: "name", required: false, default: "screenshot" }],
    description: "Takes a screenshot and links it from the log file.",
    source: "Screenshot",
    example: "Take Screenshot Without Embedding\tcustom_screenshot_name",
  },
];

export const Strings: KeywordType[] = [
  {
    name: "Convert To Lower Case",
    args: [{ name: "string", required: true }],
    description: "Converts string to lower case.",
    example: `Convert To Lower Case  ABC\n
Should Be Equal  \${str1}  abc\n
\n
Convert To Lower Case  1A2c3D\n
Should Be Equal  \${str2}  1a2c3d`,
    source: "Strings",
  },
  {
    name: "Convert To Title Case",
    args: [
      { name: "string", required: true },
      { name: "exclude", required: false, default: "None" },
    ],
    description: "Converts string to title case.",
    example: `Convert To Title Case  hello, world!\n
Should Be Equal  \${str1}  Hello, World!\n
\n
Convert To Title Case  it's an OK iPhone  exclude=a, an, the\n
Should Be Equal  \${str2}  It's an OK iPhone\n
\n
Convert To Title Case  distance is 1 km.  exclude=is, km.?\n
Should Be Equal  \${str3}  Distance is 1 km.`,
    source: "Strings",
  },
  {
    name: "Convert To Upper Case",
    args: [{ name: "string", required: true }],
    description: "Converts string to upper case.",
    example: `Convert To Upper Case  abc\n
Should Be Equal  \${str1}  ABC\n
\n
Convert To Upper Case  1a2C3d\n
Should Be Equal  \${str2}  1A2C3D`,
    source: "Strings",
  },
  {
    name: "Decode Bytes To String",
    args: [
      { name: "bytes", required: true },
      { name: "encoding", required: true },
      { name: "errors", required: false, default: "strict" },
    ],
    description:
      "Decodes the given bytes to a Unicode string using the given encoding.",
    example: `Decode Bytes To String  \${bytes}  UTF-8\n
Decode Bytes To String  \${bytes}  ASCII  errors=ignore`,
    source: "Strings",
  },
  {
    name: "Encode String To Bytes",
    args: [
      { name: "string", required: true },
      { name: "encoding", required: true },
      { name: "errors", required: false, default: "strict" },
    ],
    description:
      "Encodes the given Unicode string to bytes using the given encoding.",
    example: `Encode String To Bytes  \${string}  UTF-8\n
Encode String To Bytes  \${string}  ASCII  errors=ignore`,
    source: "Strings",
  },
  {
    name: "Fetch From Left",
    args: [
      { name: "string", required: true },
      { name: "marker", required: true },
    ],
    description:
      "Returns contents of the string before the first occurrence of marker.",
    source: "Strings",
  },
  {
    name: "Fetch From Right",
    args: [
      { name: "string", required: true },
      { name: "marker", required: true },
    ],
    description:
      "Returns contents of the string after the last occurrence of marker.",
    source: "Strings",
  },
  {
    name: "Format String",
    args: [
      { name: "template", required: true },
      { name: "* positional", required: false },
      { name: "** named", required: false },
    ],
    description:
      "Formats a template using the given positional and named arguments.",
    example: `Format String  To: {} <{}>  \${user}  \${email}\n
Format String  To: {name} <{email}>  name=\${name}  email=\${email}\n
Format String  To: {user.name} <{user.email}>  user=\${user}\n
Format String  {*^30}  centered\n
Format String  {0:{width}{base}}  {42}  base=X  width=10\n
Format String  \${CURDIR}/template.txt  positional  named=value`,
    source: "Strings",
  },
  {
    name: "Generate Random String",
    args: [
      { name: "length", required: false, default: "8" },
      { name: "chars", required: false, default: "[LETTERS][NUMBERS]" },
    ],
    description:
      "Generates a string with a desired length from the given chars.",
    example: `Generate Random String  \${length}  \${chars}\n\n[LOWER]  Lowercase ASCII characters from a to z.\n[UPPER]  Uppercase ASCII characters from A to Z.\n[LETTERS]  Lowercase and uppercase ASCII characters.\n[NUMBERS]  Numbers from 0 to 9.`,
    source: "Strings",
  },
  {
    name: "Get Line",
    args: [
      { name: "string", required: true },
      { name: "line_number", required: true },
    ],
    description: "Returns the specified line from the given string.",
    example: `Get Line  \${string}  0\n
Get Line  \${string}  -2`,
    source: "Strings",
  },
  {
    name: "Get Line Count",
    args: [{ name: "string", required: true }],
    description: "Returns and logs the number of lines in the given string.",
    source: "Strings",
  },
  {
    name: "Get Lines Containing String",
    args: [
      { name: "string", required: true },
      { name: "pattern", required: true },
      { name: "case_insensitive", required: false, default: "False" },
    ],
    description: "Returns lines of the given string that contain the pattern.",
    example: `Get Lines Containing String  \${result}  An example\n
Get Lines Containing String  \${ret}  FAIL  case-insensitive`,
    source: "Strings",
  },
  {
    name: "Get Lines Matching Pattern",
    args: [
      { name: "string", required: true },
      { name: "pattern", required: true },
      { name: "case_insensitive", required: false, default: "False" },
    ],
    description: "Returns lines of the given string that match the pattern.",
    example: `Get Lines Matching Pattern  \${result}  Regw{3} example\n
Get Lines Matching Pattern  \${result}  Regw{3} example  partial_match=true\n
Get Lines Matching Pattern  \${ret}  (?i)FAIL: .*`,
    source: "Strings",
  },
  {
    name: "Get Lines Matching Regexp",
    args: [
      { name: "string", required: true },
      { name: "pattern", required: true },
      { name: "partial_match", required: false, default: "False" },
      { name: "flags", required: false, default: "None" },
    ],
    description:
      "Returns lines of the given string that match the regexp pattern.",
    example: `Get Lines Matching Regexp  \${result}  \\bReg\\w{3} example\\b\n
Get Lines Matching Regexp  \${result}  (\\w+)-\\d+  partial_match=true\n
Get Lines Matching Regexp  \${ret}  FAIL: .*  flags=i`,
    source: "Strings",
  },
  {
    name: "Get Regexp Matches",
    args: [
      { name: "string", required: true },
      { name: "pattern", required: true },
      { name: "* groups", required: false },
      { name: "** flags", required: false },
    ],
    description: "Returns a list of regexp matches from the given string.",
    example: `Get Regexp Matches  \${string}  (\\d{2})(\\d{2})(\\d{4})\n
Get Regexp Matches  \${input}  [A-Z]+\\d+  groups=0\n
Get Regexp Matches  \${text}  (.*?)(\\d+)  groups=2\n
Get Regexp Matches  \${text}  pattern  flags=re.S`,
    source: "Strings",
  },
  {
    name: "Get Substring",
    args: [
      { name: "string", required: true },
      { name: "start", required: true },
      { name: "end", required: false, default: "None" },
    ],
    description: "Returns a substring of the given string.",
    example: `Get Substring  \${string}  6  11\n
Get Substring  \${text}  0  -1`,
    source: "Strings",
  },
  {
    name: "Remove String",
    args: [
      { name: "string", required: true },
      { name: "* removables", required: true },
    ],
    description: "Removes specified substrings from the given string.",
    example: `Remove String  \${string}  'remove', 'this'\n
Remove String  \${text}  'abc', 'def', 'xyz'`,
    source: "Strings",
  },
  {
    name: "Remove String Using Regexp",
    args: [
      { name: "string", required: true },
      { name: "* patterns", required: true },
      { name: "** flags", required: false },
    ],
    description:
      "Removes substrings matching specified regex patterns from the given string.",
    example: `Remove String Using Regexp  \${string}  'pattern\\d+'\n
Remove String Using Regexp  \${text}  'abc.*', 'xyz', flags=i`,
    source: "Strings",
  },
  {
    name: "Replace String",
    args: [
      { name: "string", required: true },
      { name: "search_for", required: true },
      { name: "replace_with", required: true },
      { name: "count", required: false, default: "-1" },
    ],
    description: "Replaces occurrences of a substring in the given string.",
    example: `Replace String  \${string}  'old'  'new'\n
Replace String  \${text}  'apple'  'orange'  count=2`,
    source: "Strings",
  },
  {
    name: "Replace String Using Regexp",
    args: [
      { name: "string", required: true },
      { name: "pattern", required: true },
      { name: "replace_with", required: true },
      { name: "count", required: false, default: "-1" },
      { name: "** flags", required: false },
    ],
    description:
      "Replaces substrings matching regex patterns in the given string.",
    example: `Replace String Using Regexp  \${string}  '\\d+'  'number'\n
Replace String Using Regexp  \${text}  'abc.*'  'xyz'  count=1  flags=i`,
    source: "Strings",
  },
  {
    name: "Should Be Byte String",
    args: [
      { name: "item", required: true },
      { name: "msg", required: false, default: "None" },
    ],
    description: "Fails if the given item is not a byte string.",
    example: `Should Be Byte String  \${item}\n
Should Be Byte String  \${data}  msg=Expected \${data} to be a byte string`,
    source: "Strings",
  },
  {
    name: "Should Be Lower Case",
    args: [
      { name: "string", required: true },
      { name: "msg", required: false, default: "None" },
    ],
    description: "Fails if the given string is not in lowercase.",
    example: `Should Be Lower Case  \${string}\n
Should Be Lower Case  \${text}  msg=Expected \${text} to be in lowercase`,
    source: "Strings",
  },
  {
    name: "Should Be String",
    args: [
      { name: "item", required: true },
      { name: "msg", required: false, default: "None" },
    ],
    description: "Fails if the given item is not a string.",
    example: `Should Be String  \${item}\n
Should Be String  \${text}  msg=Expected \${text} to be a string`,
    source: "Strings",
  },
  {
    name: "Should Be Title Case",
    args: [
      { name: "string", required: true },
      { name: "msg", required: false, default: "None" },
      { name: "exclude", required: false, default: "None" },
    ],
    description: "Fails if the given string is not in title case.",
    example: `Should Be Title Case  \${string}\n
Should Be Title Case  \${text}  msg=Expected \${text} to be in title case  exclude=an, the`,
    source: "Strings",
  },
  {
    name: "Should Be Unicode String",
    args: [
      { name: "item", required: true },
      { name: "msg", required: false, default: "None" },
    ],
    description: "Fails if the given item is not a Unicode string.",
    example: `Should Be Unicode String  \${item}\n
Should Be Unicode String  \${text}  msg=Expected \${text} to be a Unicode string`,
    source: "Strings",
  },
  {
    name: "Should Be Upper Case",
    args: [
      { name: "string", required: true },
      { name: "msg", required: false, default: "None" },
    ],
    description: "Fails if the given string is not in uppercase.",
    example: `Should Be Upper Case  \${string}\n
Should Be Upper Case  \${text}  msg=Expected \${text} to be in uppercase`,
    source: "Strings",
  },
  {
    name: "Split String",
    args: [
      { name: "string", required: true },
      { name: "delimiter", required: true },
    ],
    description:
      "Splits a string into a list of substrings using the given delimiter.",
    example: `Split String  \${string}  ','\n
Split String  \${text}  ' '`,
    source: "Strings",
  },
  {
    name: "Trim String",
    args: [
      { name: "string", required: true },
      { name: "chars", required: false, default: "None" },
    ],
    description:
      "Removes leading and trailing characters from the given string.",
    example: `Trim String  \${string}  ' '\n
Trim String  \${text}  'xy'`,
    source: "Strings",
  },
  {
    name: "URL Decode String",
    args: [
      { name: "string", required: true },
      { name: "encoding", required: false, default: "UTF-8" },
    ],
    description: "Decodes a URL-encoded string using the specified encoding.",
    example: `URL Decode String  \${url_encoded_string}\n
URL Decode String  \${encoded_string}  encoding=ISO-8859-1`,
    source: "Strings",
  },
  {
    name: "URL Encode String",
    args: [
      { name: "string", required: true },
      { name: "encoding", required: false, default: "UTF-8" },
    ],
    description: "URL-encodes a string using the specified encoding.",
    example: `URL Encode String  \${string}\n
URL Encode String  \${text}  encoding=ISO-8859-1`,
    source: "Strings",
  },
];
