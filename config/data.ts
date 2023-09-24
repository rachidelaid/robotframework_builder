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
    example: `<table border="1"><tbody><tr><td><a href="#Add%20Cookie" class="name">Add Cookie</a></td><td>foo</td><td>bar</td><td></td><td></td></tr><tr><td><a href="#Add%20Cookie" class="name">Add Cookie</a></td><td>foo</td><td>bar</td><td>domain=example.com</td><td></td></tr><tr><td><a href="#Add%20Cookie" class="name">Add Cookie</a></td><td>foo</td><td>bar</td><td>expiry=2027-09-28 16:21:35</td><td># Expiry as timestamp.</td></tr><tr><td><a href="#Add%20Cookie" class="name">Add Cookie</a></td><td>foo</td><td>bar</td><td>expiry=1822137695</td><td># Expiry as epoch seconds.</td></tr></tbody></table>`,
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
    example: `<table border="1"><tbody><tr><td><a href="#Assign%20Id%20To%20Element" class="name">Assign ID to Element</a></td><td>//ul[@class='example' and ./li[contains(., 'Stuff')]]</td><td>my id</td></tr><tr><td><a href="#Page%20Should%20Contain%20Element" class="name">Page Should Contain Element</a></td><td>my id</td><td></td></tr></tbody></table>`,
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
    example: `<table border="1"><tbody><tr><td><a href="#Capture%20Element%20Screenshot" class="name">Capture Element Screenshot</a></td><td>id:image_id</td><td></td></tr><tr><td><a href="#Capture%20Element%20Screenshot" class="name">Capture Element Screenshot</a></td><td>id:image_id</td><td>{OUTPUTDIR}/id_image_id-1.png</td></tr><tr><td><a href="#Capture%20Element%20Screenshot" class="name">Capture Element Screenshot</a></td><td>id:image_id</td><td>EMBED</td></tr></tbody></table>`,
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
    example: `<table border="1"><tbody><tr><td><a href="#Capture%20Page%20Screenshot" class="name">Capture Page Screenshot</a></td><td></td></tr><tr><td><span class="name">File Should Exist</span></td><td>{OUTPUTDIR}/selenium-screenshot-1.png</td></tr><tr><td>{path} =</td><td><a href="#Capture%20Page%20Screenshot" class="name">Capture Page Screenshot</a></td></tr><tr><td><span class="name">File Should Exist</span></td><td>{OUTPUTDIR}/selenium-screenshot-2.png</td></tr><tr><td><span class="name">File Should Exist</span></td><td>{path}</td></tr><tr><td><a href="#Capture%20Page%20Screenshot" class="name">Capture Page Screenshot</a></td><td>custom_name.png</td></tr><tr><td><span class="name">File Should Exist</span></td><td>{OUTPUTDIR}/custom_name.png</td></tr><tr><td><a href="#Capture%20Page%20Screenshot" class="name">Capture Page Screenshot</a></td><td>custom_with_index_{index}.png</td></tr><tr><td><span class="name">File Should Exist</span></td><td>{OUTPUTDIR}/custom_with_index_1.png</td></tr><tr><td><a href="#Capture%20Page%20Screenshot" class="name">Capture Page Screenshot</a></td><td>formatted_index_{index:03}.png</td></tr><tr><td><span class="name">File Should Exist</span></td><td>{OUTPUTDIR}/formatted_index_001.png</td></tr><tr><td><a href="#Capture%20Page%20Screenshot" class="name">Capture Page Screenshot</a></td><td>EMBED</td></tr><tr><td><span class="name">File Should Not Exist</span></td><td>EMBED</td></tr></tbody></table>`,
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
    example: `<table border="1"><tbody><tr><td><a href="#Choose%20File" class="name">Choose File</a></td><td>my_upload_field</td><td>{CURDIR}/trades.csv</td></tr></tbody></table>`,
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
    example: `<table border="1"><tbody><tr><td>Click Element</td><td>id:button</td><td></td><td># Would click element without any modifiers.</td></tr><tr><td>Click Element</td><td>id:button</td><td>CTRL</td><td># Would click element with CTLR key pressed down.</td></tr><tr><td>Click Element</td><td>id:button</td><td>CTRL+ALT</td><td># Would click element with CTLR and ALT keys pressed down.</td></tr><tr><td>Click Element</td><td>id:button</td><td>action_chain=True</td><td># Clicks the button using an Selenium  ActionChains</td></tr></tbody></table>`,
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
    example: `<table border="1"><tbody><tr><td># Use proxy with Firefox</td><td></td><td></td><td></td></tr><tr><td>{proxy}=</td><td><span class="name">Evaluate</span></td><td>selenium.webdriver.Proxy()</td><td>modules=selenium, selenium.webdriver</td></tr><tr><td>{proxy.http_proxy}=</td><td><span class="name">Set Variable</span></td><td>localhost:8888</td><td></td></tr><tr><td><a href="#Create%20Webdriver" class="name">Create Webdriver</a></td><td>Firefox</td><td>proxy={proxy}</td><td></td></tr></tbody></table>`,
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
    example: `<table border="1"><tbody><tr><td><a href="#Drag%20And%20Drop" class="name">Drag And Drop</a></td><td>css:div#element</td><td>css:div.target</td></tr></tbody></table>`,
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
    example: `<table border="1"><tbody><tr><td><a href="#Drag%20And%20Drop%20By%20Offset" class="name">Drag And Drop By Offset</a></td><td>myElem</td><td>50</td><td>-35</td><td># Move myElem 50px right and 35px down</td></tr></tbody></table>`,
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
    example: `<table border="1"><tbody><tr><td><a href="#Execute%20Async%20Javascript" class="name">Execute Async JavaScript</a></td><td>var callback = arguments[arguments.length - 1]; window.setTimeout(callback, 2000);</td><td></td></tr><tr><td><a href="#Execute%20Async%20Javascript" class="name">Execute Async JavaScript</a></td><td>{CURDIR}/async_js_to_execute.js</td><td></td></tr><tr><td>{result} =</td><td><a href="#Execute%20Async%20Javascript" class="name">Execute Async JavaScript</a></td><td></td></tr><tr><td>...</td><td>var callback = arguments[arguments.length - 1];</td><td></td></tr><tr><td>...</td><td>function answer(){callback("text");};</td><td></td></tr><tr><td>...</td><td>window.setTimeout(answer, 2000);</td><td></td></tr><tr><td><span class="name">Should Be Equal</span></td><td>{result}</td><td>text</td></tr></tbody></table>`,
    source: "SeleniumLibrary",
  },
  {
    name: "Execute Javascript",
    args: [
      { name: "* code", required: false, type: ["<WebElement>", "<str>"] },
    ],
    description: "Executes the given JavaScript code with possible arguments.",
    example: `<table border="1"><tbody><tr><td><a href="#Execute%20Javascript" class="name">Execute JavaScript</a></td><td>window.myFunc('arg1', 'arg2')</td><td></td><td></td><td></td></tr><tr><td><a href="#Execute%20Javascript" class="name">Execute JavaScript</a></td><td>{CURDIR}/js_to_execute.js</td><td></td><td></td><td></td></tr><tr><td><a href="#Execute%20Javascript" class="name">Execute JavaScript</a></td><td>alert(arguments[0]);</td><td>ARGUMENTS</td><td>123</td><td></td></tr><tr><td><a href="#Execute%20Javascript" class="name">Execute JavaScript</a></td><td>ARGUMENTS</td><td>123</td><td>JAVASCRIPT</td><td>alert(arguments[0]);</td></tr></tbody></table>`,
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
    example: `<table border="1"><tbody><tr><td><a href="#Open%20Browser" class="name">Open Browser</a></td><td><a href="https://example.com">https://example.com</a></td><td>alias=BrowserA</td><td></td></tr><tr><td><a href="#Open%20Browser" class="name">Open Browser</a></td><td><a href="https://example.com">https://example.com</a></td><td>alias=BrowserB</td><td></td></tr><tr><td>&amp;{aliases}</td><td><a href="#Get%20Browser%20Aliases" class="name">Get Browser Aliases</a></td><td></td><td># &amp;{aliases} = { BrowserA=1|BrowserB=2 }</td></tr><tr><td><span class="name">Log</span></td><td>{aliases.BrowserA}</td><td></td><td># logs <code>1</code></td></tr><tr><td>FOR</td><td>{alias}</td><td>IN</td><td>@{aliases}</td></tr><tr><td></td><td><span class="name">Log</span></td><td>{alias}</td><td># logs <code>BrowserA</code> and <code>BrowserB</code></td></tr><tr><td>END</td><td></td><td></td><td></td></tr></tbody></table>`,
    source: "SeleniumLibrary",
  },
  {
    name: "Get Browser Ids",
    args: [],
    description: "Returns index of all active browser as list.",
    example: `<table border="1"><tbody><tr><td>@{browser_ids}=</td><td>Get Browser Ids</td><td></td><td></td></tr><tr><td>FOR</td><td>{id}</td><td>IN</td><td>@{browser_ids}</td></tr><tr><td></td><td>@{window_titles}=</td><td>Get Window Titles</td><td>browser={id}</td></tr><tr><td></td><td>Log</td><td>Browser {id} has these windows: {window_titles}</td><td></td></tr><tr><td>END</td><td></td><td></td><td></td></tr></tbody></table>`,
    source: "SeleniumLibrary",
  },
  {
    name: "Get Cookie",
    args: [{ name: "name", required: true, type: ["<str>"] }],
    description: "Returns information of cookie with name as an object.",
    example: `<table border="1"><tbody><tr><th>Attribute</th><th>Explanation</th></tr><tr><td>name</td><td>The name of a cookie.</td></tr><tr><td>value</td><td>Value of the cookie.</td></tr><tr><td>path</td><td>Indicates a URL path, for example <code>/</code>.</td></tr><tr><td>domain</td><td>The domain, the cookie is visible to.</td></tr><tr><td>secure</td><td>When true, the cookie is only used with HTTPS connections.</td></tr><tr><td>httpOnly</td><td>When true, the cookie is not accessible via JavaScript.</td></tr><tr><td>expiry</td><td>Python datetime object indicating when the cookie expires.</td></tr><tr><td>extra</td><td>Possible attributes outside of the WebDriver specification</td></tr></tbody></table>`,
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
    example: `<table border="1"><tbody><tr><td>{id}=</td><td><a href="#Get%20Element%20Attribute" class="name">Get Element Attribute</a></td><td>css:h1</td><td>id</td></tr></tbody></table>`,
    source: "SeleniumLibrary",
  },
  {
    name: "Get Element Count",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description: "Returns the number of elements matching locator.",
    example: `<table border="1"><tbody><tr><td>{count} =</td><td><a href="#Get%20Element%20Count" class="name">Get Element Count</a></td><td>name:div_name</td></tr><tr><td><span class="name">Should Be True</span></td><td>{count} &gt; 2</td><td></td></tr></tbody></table>`,
    source: "SeleniumLibrary",
  },
  {
    name: "Get Element Size",
    args: [
      { name: "locator", required: true, type: ["<WebElement>", "<str>"] },
    ],
    description:
      "Returns width and height of the element identified by locator.",
    example: `<table border="1"><tbody><tr><td>{width}</td><td>{height} =</td><td><a href="#Get%20Element%20Size" class="name">Get Element Size</a></td><td>css:div#container</td></tr></tbody></table>`,
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
    example: `<table border="1"><tbody><tr><td>{labels} =</td><td><a href="#Get%20List%20Items" class="name">Get List Items</a></td><td>mylist</td><td></td></tr><tr><td>{values} =</td><td><a href="#Get%20List%20Items" class="name">Get List Items</a></td><td>css:#example select</td><td>values=True</td></tr></tbody></table>`,
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
    example: `<table border="1"><tbody><tr><td>{x}</td><td>{y}=</td><td><a href="#Get%20Window%20Position" class="name">Get Window Position</a></td></tr></tbody></table>`,
    source: "SeleniumLibrary",
  },
  {
    name: "Get Window Size",
    args: [
      { name: "inner", required: false, default: "False", type: ["<bool>"] },
    ],
    description: "Returns current window width and height as integers.",
    example: `<table border="1"><tbody><tr><td>{width}</td><td>{height}=</td><td><a href="#Get%20Window%20Size" class="name">Get Window Size</a></td><td></td></tr><tr><td>{width}</td><td>{height}=</td><td><a href="#Get%20Window%20Size" class="name">Get Window Size</a></td><td>True</td></tr></tbody></table>`,
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
    example: `<table border="1"><tbody><tr><td>Handle Alert</td><td></td><td></td><td># Accept alert.</td></tr><tr><td>Handle Alert</td><td>action=DISMISS</td><td></td><td># Dismiss alert.</td></tr><tr><td>Handle Alert</td><td>timeout=10 s</td><td></td><td># Use custom timeout and accept alert.</td></tr><tr><td>Handle Alert</td><td>DISMISS</td><td>1 min</td><td># Use custom timeout and dismiss alert.</td></tr><tr><td>{message} =</td><td>Handle Alert</td><td></td><td># Accept alert and get its message.</td></tr><tr><td>{message} =</td><td>Handle Alert</td><td>LEAVE</td><td># Leave alert open and get its message.</td></tr></tbody></table>`,
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
    example: `<table border="1"><tbody><tr><td>Input Password</td><td>password_field</td><td>password</td></tr></tbody></table>`,
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
    example: `<table border="1"><tbody><tr><td><a href="#List%20Selection%20Should%20Be" class="name">List Selection Should Be</a></td><td>gender</td><td>Female</td><td></td></tr><tr><td><a href="#List%20Selection%20Should%20Be" class="name">List Selection Should Be</a></td><td>interests</td><td>Test Automation</td><td>Python</td></tr></tbody></table>`,
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
    example: `<table border="1"><tbody><tr><th>Browser</th><th>Name(s)</th></tr><tr><td>Firefox</td><td>firefox, ff</td></tr><tr><td>Google Chrome</td><td>googlechrome, chrome, gc</td></tr><tr><td>Headless Firefox</td><td>headlessfirefox</td></tr><tr><td>Headless Chrome</td><td>headlesschrome</td></tr><tr><td>Internet Explorer</td><td>internetexplorer, ie</td></tr><tr><td>Edge</td><td>edge</td></tr><tr><td>Safari</td><td>safari</td></tr></tbody></table>`,
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
    example: `<table border="1"><tbody><tr><td><a href="#Page%20Should%20Contain%20Element" class="name">Page Should Contain Element</a></td><td>div_name</td><td>limit=1</td><td># Keyword fails.</td></tr><tr><td><a href="#Page%20Should%20Contain%20Element" class="name">Page Should Contain Element</a></td><td>div_name</td><td>limit=2</td><td># Keyword passes.</td></tr><tr><td><a href="#Page%20Should%20Contain%20Element" class="name">Page Should Contain Element</a></td><td>div_name</td><td>limit=none</td><td># None is considered one or more.</td></tr><tr><td><a href="#Page%20Should%20Contain%20Element" class="name">Page Should Contain Element</a></td><td>div_name</td><td></td><td># Same as above.</td></tr></tbody></table>`,
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
    example: `<table border="1"><tbody><tr><td><a href="#Press%20Keys" class="name">Press Keys</a></td><td>text_field</td><td>AAAAA</td><td></td><td># Sends string "AAAAA" to element.</td></tr><tr><td><a href="#Press%20Keys" class="name">Press Keys</a></td><td>None</td><td>BBBBB</td><td></td><td># Sends string "BBBBB" to currently active browser.</td></tr><tr><td><a href="#Press%20Keys" class="name">Press Keys</a></td><td>text_field</td><td>E+N+D</td><td></td><td># Sends string "END" to element.</td></tr><tr><td><a href="#Press%20Keys" class="name">Press Keys</a></td><td>text_field</td><td>XXX</td><td>YY</td><td># Sends strings "XXX" and "YY" to element.</td></tr><tr><td><a href="#Press%20Keys" class="name">Press Keys</a></td><td>text_field</td><td>XXX+YY</td><td></td><td># Same as above.</td></tr><tr><td><a href="#Press%20Keys" class="name">Press Keys</a></td><td>text_field</td><td>ALT+ARROW_DOWN</td><td></td><td># Pressing "ALT" key down, then pressing ARROW_DOWN and then releasing both keys.</td></tr><tr><td><a href="#Press%20Keys" class="name">Press Keys</a></td><td>text_field</td><td>ALT</td><td>ARROW_DOWN</td><td># Pressing "ALT" key and then pressing ARROW_DOWN.</td></tr><tr><td><a href="#Press%20Keys" class="name">Press Keys</a></td><td>text_field</td><td>CTRL+c</td><td></td><td># Pressing CTRL key down, sends string "c" and then releases CTRL key.</td></tr><tr><td><a href="#Press%20Keys" class="name">Press Keys</a></td><td>button</td><td>RETURN</td><td></td><td># Pressing "ENTER" key to element.</td></tr></tbody></table>`,
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
    example: `<table border="1"><tbody><tr><td><a href="#Register%20Keyword%20To%20Run%20On%20Failure" class="name">Register Keyword To Run On Failure</a></td><td>Log Source</td><td></td></tr><tr><td>{previous kw}=</td><td><a href="#Register%20Keyword%20To%20Run%20On%20Failure" class="name">Register Keyword To Run On Failure</a></td><td>NONE</td></tr><tr><td><a href="#Register%20Keyword%20To%20Run%20On%20Failure" class="name">Register Keyword To Run On Failure</a></td><td>{previous kw}</td><td></td></tr></tbody></table>`,
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
    example: `<table border="1"><tbody><tr><td><a href="#Select%20Frame" class="name">Select Frame</a></td><td>top-frame</td><td># Select frame with id or name 'top-frame'</td></tr><tr><td><a href="#Click%20Link" class="name">Click Link</a></td><td>example</td><td># Click link 'example' in the selected frame</td></tr><tr><td><a href="#Unselect%20Frame" class="name">Unselect Frame</a></td><td></td><td># Back to main frame.</td></tr><tr><td><a href="#Select%20Frame" class="name">Select Frame</a></td><td>//iframe[@name='xxx']</td><td># Select frame using xpath</td></tr></tbody></table>`,
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
    example: `<table border="1"><tbody><tr><td><a href="#Select%20Radio%20Button" class="name">Select Radio Button</a></td><td>size</td><td>XL</td></tr><tr><td><a href="#Select%20Radio%20Button" class="name">Select Radio Button</a></td><td>contact</td><td>email</td></tr></tbody></table>`,
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
    example: `<table border="1"><tbody><tr><td>{orig wait} =</td><td><a href="#Set%20Selenium%20Implicit%20Wait" class="name">Set Selenium Implicit Wait</a></td><td>10 seconds</td></tr><tr><td><span class="name">Perform AJAX call that is slow</span></td><td></td><td></td></tr><tr><td><a href="#Set%20Selenium%20Implicit%20Wait" class="name">Set Selenium Implicit Wait</a></td><td>{orig wait}</td><td></td></tr></tbody></table>`,
    source: "SeleniumLibrary",
  },
  {
    name: "Set Selenium Page Load Timeout",
    args: [{ name: "value", required: true, type: ["<timedelta>"] }],
    description: "Sets the page load timeout value used by Selenium.",
    example: `<table border="1"><tbody><tr><td>{orig page load timeout} =</td><td><a href="#Set%20Selenium%20Page%20Load%20Timeout" class="name">Set Selenium Page Load Timeout</a></td><td>30 seconds</td></tr><tr><td><span class="name">Open page that loads slowly</span></td><td></td><td></td></tr><tr><td><a href="#Set%20Selenium%20Page%20Load%20Timeout" class="name">Set Selenium Page Load Timeout</a></td><td>{orig page load timeout}</td><td></td></tr></tbody></table>`,
    source: "SeleniumLibrary",
  },
  {
    name: "Set Selenium Speed",
    args: [{ name: "value", required: true, type: ["<timedelta>"] }],
    description: "Sets the delay that is waited after each Selenium command.",
    example: `<table border="1"><tbody><tr><td><a href="#Set%20Selenium%20Speed" class="name">Set Selenium Speed</a></td><td>0.5 seconds</td></tr></tbody></table>`,
    source: "SeleniumLibrary",
  },
  {
    name: "Set Selenium Timeout",
    args: [{ name: "value", required: true, type: ["<timedelta>"] }],
    description: "Sets the timeout that is used by various keywords.",
    example: `<table border="1"><tbody><tr><td>{orig timeout} =</td><td><a href="#Set%20Selenium%20Timeout" class="name">Set Selenium Timeout</a></td><td>15 seconds</td></tr><tr><td><span class="name">Open page that loads slowly</span></td><td></td><td></td></tr><tr><td><a href="#Set%20Selenium%20Timeout" class="name">Set Selenium Timeout</a></td><td>{orig timeout}</td><td></td></tr></tbody></table>`,
    source: "SeleniumLibrary",
  },
  {
    name: "Set Window Position",
    args: [
      { name: "x", required: true, type: ["<int>"] },
      { name: "y", required: true, type: ["<int>"] },
    ],
    description: "Sets window position using x and y coordinates.",
    example: `<table border="1"><tbody><tr><td><a href="#Set%20Window%20Position" class="name">Set Window Position</a></td><td>100</td><td>200</td></tr></tbody></table>`,
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
    example: `<table border="1"><tbody><tr><td><a href="#Set%20Window%20Size" class="name">Set Window Size</a></td><td>800</td><td>600</td><td></td></tr><tr><td><a href="#Set%20Window%20Size" class="name">Set Window Size</a></td><td>800</td><td>600</td><td>True</td></tr></tbody></table>`,
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
    example: `<table border="1"><tbody><tr><td><a href="#Open%20Browser" class="name">Open Browser</a></td><td><a href="http://google.com">http://google.com</a></td><td>ff</td><td></td></tr><tr><td><a href="#Location%20Should%20Be" class="name">Location Should Be</a></td><td><a href="http://google.com">http://google.com</a></td><td></td><td></td></tr><tr><td><a href="#Open%20Browser" class="name">Open Browser</a></td><td><a href="http://yahoo.com">http://yahoo.com</a></td><td>ie</td><td>alias=second</td></tr><tr><td><a href="#Location%20Should%20Be" class="name">Location Should Be</a></td><td><a href="http://yahoo.com">http://yahoo.com</a></td><td></td><td></td></tr><tr><td><a href="#Switch%20Browser" class="name">Switch Browser</a></td><td>1</td><td># index</td><td></td></tr><tr><td><a href="#Page%20Should%20Contain" class="name">Page Should Contain</a></td><td>I'm feeling lucky</td><td></td><td></td></tr><tr><td><a href="#Switch%20Browser" class="name">Switch Browser</a></td><td>second</td><td># alias</td><td></td></tr><tr><td><a href="#Page%20Should%20Contain" class="name">Page Should Contain</a></td><td>More Yahoo!</td><td></td><td></td></tr><tr><td><a href="#Close%20All%20Browsers" class="name">Close All Browsers</a></td><td></td><td></td><td></td></tr></tbody></table>`,
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
    example: `<table border="1"><tbody><tr><td><a href="#Click%20Link" class="name">Click Link</a></td><td>popup1</td><td></td><td># Open new window</td></tr><tr><td><a href="#Switch%20Window" class="name">Switch Window</a></td><td>example</td><td></td><td># Select window using default strategy</td></tr><tr><td><a href="#Title%20Should%20Be" class="name">Title Should Be</a></td><td>Pop-up 1</td><td></td><td></td></tr><tr><td><a href="#Click%20Button" class="name">Click Button</a></td><td>popup2</td><td></td><td># Open another window</td></tr><tr><td>{handle} =</td><td><a href="#Switch%20Window" class="name">Switch Window</a></td><td>NEW</td><td># Select latest opened window</td></tr><tr><td><a href="#Title%20Should%20Be" class="name">Title Should Be</a></td><td>Pop-up 2</td><td></td><td></td></tr><tr><td><a href="#Switch%20Window" class="name">Switch Window</a></td><td>{handle}</td><td></td><td># Select window using handle</td></tr><tr><td><a href="#Title%20Should%20Be" class="name">Title Should Be</a></td><td>Pop-up 1</td><td></td><td></td></tr><tr><td><a href="#Switch%20Window" class="name">Switch Window</a></td><td>MAIN</td><td></td><td># Select the main window</td></tr><tr><td><a href="#Title%20Should%20Be" class="name">Title Should Be</a></td><td>Main</td><td></td><td></td></tr><tr><td>{excludes} =</td><td><a href="#Get%20Window%20Handles" class="name">Get Window Handles</a></td><td></td><td># Get list of current windows</td></tr><tr><td><a href="#Click%20Link" class="name">Click Link</a></td><td>popup3</td><td></td><td># Open one more window</td></tr><tr><td><a href="#Switch%20Window" class="name">Switch Window</a></td><td>{excludes}</td><td></td><td># Select window using excludes</td></tr><tr><td><a href="#Title%20Should%20Be" class="name">Title Should Be</a></td><td>Pop-up 3</td><td></td><td></td></tr></tbody></table>`,
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
    example: `<table border="1"><tbody><tr><td><a href="#Wait%20For%20Condition" class="name">Wait For Condition</a></td><td>return document.title == "New Title"</td></tr><tr><td><a href="#Wait%20For%20Condition" class="name">Wait For Condition</a></td><td>return jQuery.active == 0</td></tr><tr><td><a href="#Wait%20For%20Condition" class="name">Wait For Condition</a></td><td>style = document.querySelector('h1').style; return style.background == "red" &amp;&amp; style.color == "white"</td></tr></tbody></table>`,
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
    example: `<tbody><tr>n<td>Call Method</td>n<td>{hashtable}</td>n<td>put</td>n<td>myname</td>n<td>myvalue</td>n</tr>n<tr>n<td>{isempty} =</td>n<td>Call Method</td>n<td>{hashtable}</td>n<td>isEmpty</td>n<td></td>n</tr>n<tr>n<td>Should Not Be True</td>n<td>{isempty}</td>n<td></td>n<td></td>n<td></td>n</tr>n<tr>n<td>{value} =</td>n<td>Call Method</td>n<td>{hashtable}</td>n<td>get</td>n<td>myname</td>n</tr>n<tr>n<td>Should Be Equal</td>n<td>{value}</td>n<td>myvalue</td>n<td></td>n<td></td>n</tr>n<tr>n<td>Call Method</td>n<td>{object}</td>n<td>kwargs</td>n<td>name=value</td>n<td>foo=bar</td>n</tr>n<tr>n<td>Call Method</td>n<td>{object}</td>n<td>positional</td>n<td>escaped=equals</td>n<td></td>n</tr>n</tbody>`,
  },
  {
    name: "Catenate",
    source: "BuiltIn",
    args: [{ name: "* items", required: false }],
    description:
      "Catenates the given items together and returns the resulted string.",
    example: `<tbody><tr>n<td>{str1} =</td>n<td>Catenate</td>n<td>Hello</td>n<td>world</td>n<td></td>n</tr>n<tr>n<td>{str2} =</td>n<td>Catenate</td>n<td>SEPARATOR=---</td>n<td>Hello</td>n<td>world</td>n</tr>n<tr>n<td>{str3} =</td>n<td>Catenate</td>n<td>SEPARATOR=</td>n<td>Hello</td>n<td>world</td>n</tr>n</tbody>`,
  },
  {
    name: "Comment",
    source: "BuiltIn",
    args: [{ name: "* messages", required: false }],
    description:
      "Displays the given messages in the log file as keyword arguments.",
  },
  {
    name: "Continue For Loop",
    source: "BuiltIn",
    args: [],
    description:
      "Skips the current FOR loop iteration and continues from the next.",
    example: `<tbody><tr>n<td>FOR</td>n<td>{var}</td>n<td>IN</td>n<td>@{VALUES}</td>n</tr>n<tr>n<td></td>n<td>Run Keyword If</td>n<td>'{var}' == 'CONTINUE'</td>n<td>Continue For Loop</td>n</tr>n<tr>n<td></td>n<td>Do Something</td>n<td>{var}</td>n<td></td>n</tr>n<tr>n<td>END</td>n<td></td>n<td></td>n<td></td>n</tr>n</tbody>`,
  },
  {
    name: "Continue For Loop If",
    source: "BuiltIn",
    args: [{ name: "condition", required: true }],
    description:
      "Skips the current FOR loop iteration if the condition is true.",
    example: `<tbody><tr>n<td>FOR</td>n<td>{var}</td>n<td>IN</td>n<td>@{VALUES}</td>n</tr>n<tr>n<td></td>n<td>Continue For Loop If</td>n<td>'{var}' == 'CONTINUE'</td>n<td></td>n</tr>n<tr>n<td></td>n<td>Do Something</td>n<td>{var}</td>n<td></td>n</tr>n<tr>n<td>END</td>n<td></td>n<td></td>n<td></td>n</tr>n</tbody>`,
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
    example: `<tbody><tr>n<td>{result} =</td>n<td>Convert To Binary</td>n<td>10</td>n<td></td>n<td></td>n<td># Result is 1010</td>n</tr>n<tr>n<td>{result} =</td>n<td>Convert To Binary</td>n<td>F</td>n<td>base=16</td>n<td>prefix=0b</td>n<td># Result is 0b1111</td>n</tr>n<tr>n<td>{result} =</td>n<td>Convert To Binary</td>n<td>-2</td>n<td>prefix=B</td>n<td>length=4</td>n<td># Result is -B0010</td>n</tr>n</tbody>`,
  },
  {
    name: "Convert To Boolean",
    source: "BuiltIn",
    args: [{ name: "item", required: true }],
    description: "Converts the given item to Boolean true or false.",
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
    example: `<tbody><tr>n<td>{bytes} =</td>n<td>Convert To Bytes</td>n<td>hyvä</td>n<td></td>n<td># hyvxe4</td>n</tr>n<tr>n<td>{bytes} =</td>n<td>Convert To Bytes</td>n<td>hyvxe4</td>n<td></td>n<td># hyvxe4</td>n</tr>n<tr>n<td>{bytes} =</td>n<td>Convert To Bytes</td>n<td>xffx07</td>n<td></td>n<td># xffx07</td>n</tr>n<tr>n<td>{bytes} =</td>n<td>Convert To Bytes</td>n<td>82 70</td>n<td>int</td>n<td># RF</td>n</tr>n<tr>n<td>{bytes} =</td>n<td>Convert To Bytes</td>n<td>0b10 0x10</td>n<td>int</td>n<td># x02x10</td>n</tr>n<tr>n<td>{bytes} =</td>n<td>Convert To Bytes</td>n<td>ff 00 07</td>n<td>hex</td>n<td># xffx00x07</td>n</tr>n<tr>n<td>{bytes} =</td>n<td>Convert To Bytes</td>n<td>52462121</td>n<td>hex</td>n<td># RF!!</td>n</tr>n<tr>n<td>{bytes} =</td>n<td>Convert To Bytes</td>n<td>0000 1000</td>n<td>bin</td>n<td># x08</td>n</tr>n<tr>n<td>{input} =</td>n<td>Create List</td>n<td>1</td>n<td>2</td>n<td>12</td>n</tr>n<tr>n<td>{bytes} =</td>n<td>Convert To Bytes</td>n<td>{input}</td>n<td>int</td>n<td># x01x02x0c</td>n</tr>n<tr>n<td>{bytes} =</td>n<td>Convert To Bytes</td>n<td>{input}</td>n<td>hex</td>n<td># x01x02x12</td>n</tr>n</tbody>`,
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
    example: `<tbody><tr>n<td>{result} =</td>n<td>Convert To Hex</td>n<td>255</td>n<td></td>n<td></td>n<td># Result is FF</td>n</tr>n<tr>n<td>{result} =</td>n<td>Convert To Hex</td>n<td>-10</td>n<td>prefix=0x</td>n<td>length=2</td>n<td># Result is -0x0A</td>n</tr>n<tr>n<td>{result} =</td>n<td>Convert To Hex</td>n<td>255</td>n<td>prefix=X</td>n<td>lowercase=yes</td>n<td># Result is Xff</td>n</tr>n</tbody>`,
  },
  {
    name: "Convert To Integer",
    source: "BuiltIn",
    args: [
      { name: "item", required: true },
      { name: "base", required: false, default: "None" },
    ],
    description: "Converts the given item to an integer number.",
    example: `<tbody><tr>n<td>{result} =</td>n<td>Convert To Integer</td>n<td>100</td>n<td></td>n<td># Result is 100</td>n</tr>n<tr>n<td>{result} =</td>n<td>Convert To Integer</td>n<td>FF AA</td>n<td>16</td>n<td># Result is 65450</td>n</tr>n<tr>n<td>{result} =</td>n<td>Convert To Integer</td>n<td>100</td>n<td>8</td>n<td># Result is 64</td>n</tr>n<tr>n<td>{result} =</td>n<td>Convert To Integer</td>n<td>-100</td>n<td>2</td>n<td># Result is -4</td>n</tr>n<tr>n<td>{result} =</td>n<td>Convert To Integer</td>n<td>0b100</td>n<td></td>n<td># Result is 4</td>n</tr>n<tr>n<td>{result} =</td>n<td>Convert To Integer</td>n<td>-0x100</td>n<td></td>n<td># Result is -256</td>n</tr>n</tbody>`,
  },
  {
    name: "Convert To Number",
    source: "BuiltIn",
    args: [
      { name: "item", required: true },
      { name: "precision", required: false, default: "None" },
    ],
    description: "Converts the given item to a floating point number.",
    example: `<tbody><tr>n<td>{result} =</td>n<td>Convert To Number</td>n<td>42.512</td>n<td></td>n<td># Result is 42.512</td>n</tr>n<tr>n<td>{result} =</td>n<td>Convert To Number</td>n<td>42.512</td>n<td>1</td>n<td># Result is 42.5</td>n</tr>n<tr>n<td>{result} =</td>n<td>Convert To Number</td>n<td>42.512</td>n<td>0</td>n<td># Result is 43.0</td>n</tr>n<tr>n<td>{result} =</td>n<td>Convert To Number</td>n<td>42.512</td>n<td>-1</td>n<td># Result is 40.0</td>n</tr>n</tbody>`,
  },
  {
    name: "Convert To Octal",
    source: "BuiltIn",
    args: [
      { name: "item", required: true },
      { name: "base", required: false, default: "None" },
      { name: "prefix", required: false, default: "None" },
      { name: "length", required: false, default: "None" },
    ],
    description: "Converts the given item to an octal string.",
    example: `<tbody><tr>n<td>{result} =</td>n<td>Convert To Octal</td>n<td>10</td>n<td></td>n<td></td>n<td># Result is 12</td>n</tr>n<tr>n<td>{result} =</td>n<td>Convert To Octal</td>n<td>-F</td>n<td>base=16</td>n<td>prefix=0</td>n<td># Result is -017</td>n</tr>n<tr>n<td>{result} =</td>n<td>Convert To Octal</td>n<td>16</td>n<td>prefix=oct</td>n<td>length=4</td>n<td># Result is oct0020</td>n</tr>n</tbody>`,
  },
  {
    name: "Convert To String",
    source: "BuiltIn",
    args: [{ name: "item", required: true }],
    description: "Converts the given item to a Unicode string.",
  },
  {
    name: "Create Dictionary",
    source: "BuiltIn",
    args: [{ name: "* items", required: false }],
    description: "Creates and returns a dictionary based on the given items.",
    example: `<tbody><tr>n<td>&amp;{dict} =</td>n<td>Create Dictionary</td>n<td>key=value</td>n<td>foo=bar</td>n<td></td>n<td></td>n<td># key=value syntax</td>n</tr>n<tr>n<td>Should Be True</td>n<td>{dict} == {'key': 'value', 'foo': 'bar'}</td>n<td></td>n<td></td>n<td></td>n<td></td>n<td></td>n</tr>n<tr>n<td>&amp;{dict2} =</td>n<td>Create Dictionary</td>n<td>key</td>n<td>value</td>n<td>foo</td>n<td>bar</td>n<td># separate key and value</td>n</tr>n<tr>n<td>Should Be Equal</td>n<td>{dict}</td>n<td>{dict2}</td>n<td></td>n<td></td>n<td></td>n<td></td>n</tr>n<tr>n<td>&amp;{dict} =</td>n<td>Create Dictionary</td>n<td>{1}={2}</td>n<td>&amp;{dict}</td>n<td>foo=new</td>n<td></td>n<td># using variables</td>n</tr>n<tr>n<td>Should Be True</td>n<td>{dict} == {1: 2, 'key': 'value', 'foo': 'new'}</td>n<td></td>n<td></td>n<td></td>n<td></td>n<td></td>n</tr>n<tr>n<td>Should Be Equal</td>n<td>{dict.key}</td>n<td>value</td>n<td></td>n<td></td>n<td></td>n<td># dot-access</td>n</tr>n</tbody>`,
  },
  {
    name: "Create List",
    source: "BuiltIn",
    args: [{ name: "* items", required: false }],
    description: "Returns a list containing given items.",
    example: `<tbody><tr>n<td>@{list} =</td>n<td>Create List</td>n<td>a</td>n<td>b</td>n<td>c</td>n</tr>n<tr>n<td>{scalar} =</td>n<td>Create List</td>n<td>a</td>n<td>b</td>n<td>c</td>n</tr>n<tr>n<td>{ints} =</td>n<td>Create List</td>n<td>{1}</td>n<td>{2}</td>n<td>{3}</td>n</tr>n</tbody>`,
  },
  {
    name: "Evaluate",
    source: "BuiltIn",
    args: [
      { name: "expression", required: true },
      { name: "modules", required: false, default: "None" },
      { name: "namespace", required: false, default: "None" },
    ],
    description:
      "Evaluates the given expression in Python and returns the result.",
    example: `<tbody><tr>n<td>{status} =</td>n<td>Evaluate</td>n<td>0 &lt; {result} &lt; 10</td>n<td># Would also work with string '3.14'</td>n</tr>n<tr>n<td>{status} =</td>n<td>Evaluate</td>n<td>0 &lt; $result &lt; 10</td>n<td># Using variable itself, not string representation</td>n</tr>n<tr>n<td>{random} =</td>n<td>Evaluate</td>n<td>random.randint(0, sys.maxsize)</td>n<td></td>n</tr>n<tr>n<td>{options} =</td>n<td>Evaluate</td>n<td>selenium.webdriver.ChromeOptions()</td>n<td>modules=selenium.webdriver</td>n</tr>n<tr>n<td>{items} =</td>n<td>Evaluate</td>n<td>[json.loads(item) for item in ('1', '"b"')]</td>n<td>modules=json</td>n</tr>n<tr>n<td>{ns} =</td>n<td>Create Dictionary</td>n<td>x={4}</td>n<td>y={2}</td>n</tr>n<tr>n<td>{result} =</td>n<td>Evaluate</td>n<td>x*10 + y</td>n<td>namespace={ns}</td>n</tr>n</tbody>`,
  },
  {
    name: "Exit For Loop",
    source: "BuiltIn",
    args: [],
    description: "Stops executing the enclosing FOR loop.",
    example: `<tbody><tr>n<td>FOR</td>n<td>{var}</td>n<td>IN</td>n<td>@{VALUES}</td>n</tr>n<tr>n<td></td>n<td>Run Keyword If</td>n<td>'{var}' == 'EXIT'</td>n<td>Exit For Loop</td>n</tr>n<tr>n<td></td>n<td>Do Something</td>n<td>{var}</td>n<td></td>n</tr>n<tr>n<td>END</td>n<td></td>n<td></td>n<td></td>n</tr>n</tbody>`,
  },
  {
    name: "Exit For Loop If",
    source: "BuiltIn",
    args: [{ name: "condition", required: true }],
    description:
      "Stops executing the enclosing FOR loop if the condition is true.",
    example: `<tbody><tr>n<td>FOR</td>n<td>{var}</td>n<td>IN</td>n<td>@{VALUES}</td>n</tr>n<tr>n<td></td>n<td>Exit For Loop If</td>n<td>'{var}' == 'EXIT'</td>n<td></td>n</tr>n<tr>n<td></td>n<td>Do Something</td>n<td>{var}</td>n<td></td>n</tr>n<tr>n<td>END</td>n<td></td>n<td></td>n<td></td>n</tr>n</tbody>`,
  },
  {
    name: "Fail",
    source: "BuiltIn",
    args: [
      { name: "msg", required: false, default: "None" },
      { name: "* tags", required: false },
    ],
    description:
      "Fails the test with the given message and optionally alters its tags.",
    example: `<tbody><tr>n<td>Fail</td>n<td>Test not ready</td>n<td></td>n<td></td>n<td># Fails with the given message.</td>n</tr>n<tr>n<td>Fail</td>n<td>*HTML*&lt;b&gt;Test not ready&lt;/b&gt;</td>n<td></td>n<td></td>n<td># Fails using HTML in the message.</td>n</tr>n<tr>n<td>Fail</td>n<td>Test not ready</td>n<td>not-ready</td>n<td></td>n<td># Fails and adds 'not-ready' tag.</td>n</tr>n<tr>n<td>Fail</td>n<td>OS not supported</td>n<td>-regression</td>n<td></td>n<td># Removes tag 'regression'.</td>n</tr>n<tr>n<td>Fail</td>n<td>My message</td>n<td>tag</td>n<td>-t*</td>n<td># Removes all tags starting with 't' except the newly added 'tag'.</td>n</tr>n</tbody>`,
  },
  {
    name: "Fatal Error",
    source: "BuiltIn",
    args: [{ name: "msg", required: false, default: "None" }],
    description: "Stops the whole test execution.",
  },
  {
    name: "Get Count",
    source: "BuiltIn",
    args: [
      { name: "container", required: true },
      { name: "item", required: true },
    ],
    description:
      "Returns and logs how many times item is found from container.",
    example: `<tbody><tr>n<td>{count} =</td>n<td>Get Count</td>n<td>{some item}</td>n<td>interesting value</td>n</tr>n<tr>n<td>Should Be True</td>n<td>5 &lt; {count} &lt; 10</td>n<td></td>n<td></td>n</tr>n</tbody>`,
  },
  {
    name: "Get Length",
    source: "BuiltIn",
    args: [{ name: "item", required: true }],
    description: "Returns and logs the length of the given item as an integer.",
    example: `<tbody><tr>n<td>{length} =</td>n<td>Get Length</td>n<td>Hello, world!</td>n<td></td>n</tr>n<tr>n<td>Should Be Equal As Integers</td>n<td>{length}</td>n<td>13</td>n<td></td>n</tr>n<tr>n<td>@{list} =</td>n<td>Create List</td>n<td>Hello,</td>n<td>world!</td>n</tr>n<tr>n<td>{length} =</td>n<td>Get Length</td>n<td>{list}</td>n<td></td>n</tr>n<tr>n<td>Should Be Equal As Integers</td>n<td>{length}</td>n<td>2</td>n<td></td>n</tr>n</tbody>`,
  },
  {
    name: "Get Library Instance",
    source: "BuiltIn",
    args: [
      { name: "name", required: false, default: "None" },
      { name: "all", required: false, default: "False" },
    ],
    description:
      "Returns the currently active instance of the specified library.",
    example: `<tbody><tr>n<td>&amp;{all libs} =</td>n<td>Get library instance</td>n<td>all=True</td>n</tr>n</tbody>`,
  },
  {
    name: "Get Time",
    source: "BuiltIn",
    args: [
      { name: "format", required: false, default: "timestamp" },
      { name: "time_", required: false, default: "NOW" },
    ],
    description: "Returns the given time in the requested format.",
    example: `<tbody><tr>n<td>{time} =</td>n<td>Get Time</td>n<td></td>n<td></td>n<td></td>n</tr>n<tr>n<td>{secs} =</td>n<td>Get Time</td>n<td>epoch</td>n<td></td>n<td></td>n</tr>n<tr>n<td>{year} =</td>n<td>Get Time</td>n<td>return year</td>n<td></td>n<td></td>n</tr>n<tr>n<td>{yyyy}</td>n<td>{mm}</td>n<td>{dd} =</td>n<td>Get Time</td>n<td>year,month,day</td>n</tr>n<tr>n<td>@{time} =</td>n<td>Get Time</td>n<td>year month day hour min sec</td>n<td></td>n<td></td>n</tr>n<tr>n<td>{y}</td>n<td>{s} =</td>n<td>Get Time</td>n<td>seconds and year</td>n<td></td>n</tr>n</tbody>`,
  },
  {
    name: "Get Variable Value",
    source: "BuiltIn",
    args: [
      { name: "name", required: true },
      { name: "default", required: false, default: "None" },
    ],
    description:
      "Returns variable value or default if the variable does not exist.",
  },
  {
    name: "Get Variables",
    source: "BuiltIn",
    args: [{ name: "no_decoration", required: false, default: "False" }],
    description:
      "Returns a dictionary containing all variables in the current scope.",
    example: `<tbody><tr>n<td>{example_variable} =</td>n<td>Set Variable</td>n<td>example value</td>n<td></td>n</tr>n<tr>n<td>{variables} =</td>n<td>Get Variables</td>n<td></td>n<td></td>n</tr>n<tr>n<td>Dictionary Should Contain Key</td>n<td>{variables}</td>n<td>{example_variable}</td>n<td></td>n</tr>n<tr>n<td>Dictionary Should Contain Key</td>n<td>{variables}</td>n<td>{ExampleVariable}</td>n<td></td>n</tr>n<tr>n<td>Set To Dictionary</td>n<td>{variables}</td>n<td>{name}</td>n<td>value</td>n</tr>n<tr>n<td>Variable Should Not Exist</td>n<td>{name}</td>n<td></td>n<td></td>n</tr>n<tr>n<td>{no decoration} =</td>n<td>Get Variables</td>n<td>no_decoration=Yes</td>n<td></td>n</tr>n<tr>n<td>Dictionary Should Contain Key</td>n<td>{no decoration}</td>n<td>example_variable</td>n<td></td>n</tr>n</tbody>`,
  },
  {
    name: "Import Library",
    source: "BuiltIn",
    args: [
      { name: "name", required: true },
      { name: "* args", required: false },
    ],
    description:
      "Imports a library with the given name and optional arguments.",
    example: `<tbody><tr>n<td>Import Library</td>n<td>MyLibrary</td>n<td></td>n<td></td>n<td></td>n<td></td>n</tr>n<tr>n<td>Import Library</td>n<td>{CURDIR}/Lib.py</td>n<td>arg1</td>n<td>named=arg2</td>n<td>WITH NAME</td>n<td>Custom</td>n</tr>n</tbody>`,
  },
  {
    name: "Import Resource",
    source: "BuiltIn",
    args: [{ name: "path", required: true }],
    description: "Imports a resource file with the given path.",
    example: `<tbody><tr>n<td>Import Resource</td>n<td>{CURDIR}/resource.txt</td>n</tr>n<tr>n<td>Import Resource</td>n<td>{CURDIR}/../resources/resource.html</td>n</tr>n<tr>n<td>Import Resource</td>n<td>found_from_pythonpath.robot</td>n</tr>n</tbody>`,
  },
  {
    name: "Import Variables",
    source: "BuiltIn",
    args: [
      { name: "path", required: true },
      { name: "* args", required: false },
    ],
    description:
      "Imports a variable file with the given path and optional arguments.",
    example: `<tbody><tr>n<td>Import Variables</td>n<td>{CURDIR}/variables.py</td>n<td></td>n<td></td>n</tr>n<tr>n<td>Import Variables</td>n<td>{CURDIR}/../vars/env.py</td>n<td>arg1</td>n<td>arg2</td>n</tr>n<tr>n<td>Import Variables</td>n<td>file_from_pythonpath.py</td>n<td></td>n<td></td>n</tr>n</tbody>`,
  },
  {
    name: "Keyword Should Exist",
    source: "BuiltIn",
    args: [
      { name: "name", required: true },
      { name: "msg", required: false, default: "None" },
    ],
    description: "Fails unless the given keyword exists in the current scope.",
  },
  {
    name: "Length Should Be",
    source: "BuiltIn",
    args: [
      { name: "item", required: true },
      { name: "length", required: true },
      { name: "msg", required: false, default: "None" },
    ],
    description: "Verifies that the length of the given item is correct.",
  },
  {
    name: "Log",
    source: "BuiltIn",
    args: [
      { name: "message", required: true },
      { name: "level", required: false, default: "INFO" },
      { name: "html", required: false, default: "False" },
      { name: "console", required: false, default: "False" },
      { name: "repr", required: false, default: "DEPRECATED" },
      { name: "formatter", required: false, default: "str" },
    ],
    description: "Logs the given message with the given level.",
    example: `<tbody><tr>n<td>Log</td>n<td>Hello, world!</td>n<td></td>n<td></td>n<td># Normal INFO message.</td>n</tr>n<tr>n<td>Log</td>n<td>Warning, world!</td>n<td>WARN</td>n<td></td>n<td># Warning.</td>n</tr>n<tr>n<td>Log</td>n<td>&lt;b&gt;Hello&lt;/b&gt;, world!</td>n<td>html=yes</td>n<td></td>n<td># INFO message as HTML.</td>n</tr>n<tr>n<td>Log</td>n<td>&lt;b&gt;Hello&lt;/b&gt;, world!</td>n<td>HTML</td>n<td></td>n<td># Same as above.</td>n</tr>n<tr>n<td>Log</td>n<td>&lt;b&gt;Hello&lt;/b&gt;, world!</td>n<td>DEBUG</td>n<td>html=true</td>n<td># DEBUG as HTML.</td>n</tr>n<tr>n<td>Log</td>n<td>Hello, console!</td>n<td>console=yes</td>n<td></td>n<td># Log also to the console.</td>n</tr>n<tr>n<td>Log</td>n<td>Hello, console!</td>n<td>CONSOLE</td>n<td></td>n<td># Log also to the console.</td>n</tr>n<tr>n<td>Log</td>n<td>Null is x00</td>n<td>formatter=repr</td>n<td></td>n<td># Log <code>'Null is x00'</code>.</td>n</tr>n</tbody>`,
  },
  {
    name: "Log Many",
    source: "BuiltIn",
    args: [{ name: "* messages", required: false }],
    description:
      "Logs the given messages as separate entries using the INFO level.",
    example: `<tbody><tr>n<td>Log Many</td>n<td>Hello</td>n<td>{var}</td>n</tr>n<tr>n<td>Log Many</td>n<td>@{list}</td>n<td>&amp;{dict}</td>n</tr>n</tbody>`,
  },
  {
    name: "Log To Console",
    source: "BuiltIn",
    args: [
      { name: "message", required: true },
      { name: "stream", required: false, default: "STDOUT" },
      { name: "no_newline", required: false, default: "False" },
      { name: "format", required: false, default: "" },
    ],
    description: "Logs the given message to the console.",
    example: `<tbody><tr>n<td>Log To Console</td>n<td>Hello, console!</td>n<td></td>n</tr>n<tr>n<td>Log To Console</td>n<td>Hello, stderr!</td>n<td>STDERR</td>n</tr>n<tr>n<td>Log To Console</td>n<td>Message starts here and is</td>n<td>no_newline=true</td>n</tr>n<tr>n<td>Log To Console</td>n<td>continued without newline.</td>n<td></td>n</tr>n<tr>n<td>Log To Console</td>n<td>center message with * pad</td>n<td>format=*^60</td>n</tr>n<tr>n<td>Log To Console</td>n<td>30 spaces before msg starts</td>n<td>format=&gt;30</td>n</tr>n</tbody>`,
  },
  {
    name: "Log Variables",
    source: "BuiltIn",
    args: [{ name: "level", required: false, default: "INFO" }],
    description:
      "Logs all variables in the current scope with given log level.",
  },
  {
    name: "No Operation",
    source: "BuiltIn",
    args: [],
    description: "Does absolutely nothing.",
  },
  {
    name: "Pass Execution",
    source: "BuiltIn",
    args: [
      { name: "message", required: true },
      { name: "* tags", required: false },
    ],
    description:
      "Skips rest of the current test, setup, or teardown with PASS status.",
    example: `<tbody><tr>n<td>Pass Execution</td>n<td>All features available in this version tested.</td>n<td></td>n<td></td>n</tr>n<tr>n<td>Pass Execution</td>n<td>Deprecated test.</td>n<td>deprecated</td>n<td>-regression</td>n</tr>n</tbody>`,
  },
  {
    name: "Pass Execution If",
    source: "BuiltIn",
    args: [
      { name: "condition", required: true },
      { name: "message", required: true },
      { name: "* tags", required: false },
    ],
    description:
      "Conditionally skips rest of the current test, setup, or teardown with PASS status.",
    example: `<tbody><tr>n<td>FOR</td>n<td>{var}</td>n<td>IN</td>n<td>@{VALUES}</td>n</tr>n<tr>n<td></td>n<td>Pass Execution If</td>n<td>'{var}' == 'EXPECTED'</td>n<td>Correct value was found</td>n</tr>n<tr>n<td></td>n<td>Do Something</td>n<td>{var}</td>n<td></td>n</tr>n<tr>n<td>END</td>n<td></td>n<td></td>n<td></td>n</tr>n</tbody>`,
  },
  {
    name: "Regexp Escape",
    source: "BuiltIn",
    args: [{ name: "* patterns", required: false }],
    description:
      "Returns each argument string escaped for use as a regular expression.",
    example: `<tbody><tr>n<td>{escaped} =</td>n<td>Regexp Escape</td>n<td>{original}</td>n</tr>n<tr>n<td>@{strings} =</td>n<td>Regexp Escape</td>n<td>@{strings}</td>n</tr>n</tbody>`,
  },
  {
    name: "Reload Library",
    source: "BuiltIn",
    args: [{ name: "name_or_instance", required: true }],
    description: "Rechecks what keywords the specified library provides.",
  },
  {
    name: "Remove Tags",
    source: "BuiltIn",
    args: [{ name: "* tags", required: false }],
    description:
      "Removes given tags from the current test or all tests in a suite.",
    example: `<tbody><tr>n<td>Remove Tags</td>n<td>mytag</td>n<td>something-*</td>n<td>?ython</td>n</tr>n</tbody>`,
  },
  {
    name: "Repeat Keyword",
    source: "BuiltIn",
    args: [
      { name: "repeat", required: true },
      { name: "name", required: true },
      { name: "* args", required: false },
    ],
    description: "Executes the specified keyword multiple times.",
    example: `<tbody><tr>n<td>Repeat Keyword</td>n<td>5 times</td>n<td>Go to Previous Page</td>n<td></td>n<td></td>n</tr>n<tr>n<td>Repeat Keyword</td>n<td>{var}</td>n<td>Some Keyword</td>n<td>arg1</td>n<td>arg2</td>n</tr>n<tr>n<td>Repeat Keyword</td>n<td>2 minutes</td>n<td>Some Keyword</td>n<td>arg1</td>n<td>arg2</td>n</tr>n</tbody>`,
  },
  {
    name: "Replace Variables",
    source: "BuiltIn",
    args: [{ name: "text", required: true }],
    description:
      "Replaces variables in the given text with their current values.",
    example: `<tbody><tr>n<td>{template} =</td>n<td>Get File</td>n<td>{CURDIR}/template.txt</td>n</tr>n<tr>n<td>{message} =</td>n<td>Replace Variables</td>n<td>{template}</td>n</tr>n<tr>n<td>Should Be Equal</td>n<td>{message}</td>n<td>Hello Robot!</td>n</tr>n</tbody>`,
  },
  {
    name: "Return From Keyword",
    source: "BuiltIn",
    args: [{ name: "* return_values", required: false }],
    description: "Returns from the enclosing user keyword.",
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
  },
  {
    name: "Run Keyword",
    source: "BuiltIn",
    args: [
      { name: "name", required: true },
      { name: "* args", required: false },
    ],
    description: "Executes the given keyword with the given arguments.",
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
    example: `<tbody><tr>n<td>Run Keyword And Continue On Failure</td>n<td>Fail</td>n<td>This is a stupid example</td>n</tr>n<tr>n<td>Log</td>n<td>This keyword is executed</td>n<td></td>n</tr>n</tbody>`,
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
    example: `<tbody><tr>n<th>Prefix</th>n<th>Explanation</th>n</tr>n<tr>n<td><code>EQUALS</code></td>n<td>Exact match. Especially useful if the error contains glob wildcards.</td>n</tr>n<tr>n<td><code>STARTS</code></td>n<td>Error must start with the specified error.</td>n</tr>n<tr>n<td><code>REGEXP</code></td>n<td>Regular expression match.</td>n</tr>n<tr>n<td><code>GLOB</code></td>n<td>Same as the default behavior.</td>n</tr>n</tbody>`,
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
    example: `<tbody><tr>n<td><a href="#Run%20Keyword%20And%20Return" class="name">Run Keyword And Return</a></td>n<td><span class="name">My Keyword</span></td>n<td>arg1</td>n<td>arg2</td>n</tr>n<tr>n<td># Above is equivalent to:</td>n<td></td>n<td></td>n<td></td>n</tr>n<tr>n<td>{result} =</td>n<td><span class="name">My Keyword</span></td>n<td>arg1</td>n<td>arg2</td>n</tr>n<tr>n<td><a href="#Return%20From%20Keyword" class="name">Return From Keyword</a></td>n<td>{result}</td>n<td></td>n<td></td>n</tr>n</tbody>`,
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
    example: `<tbody><tr>n<td><a href="#Run%20Keyword%20And%20Return%20If" class="name">Run Keyword And Return If</a></td>n<td>{rc} &gt; 0</td>n<td><span class="name">My Keyword</span></td>n<td>arg1</td>n<td>arg2</td>n<td></td>n</tr>n<tr>n<td># Above is equivalent to:</td>n<td></td>n<td></td>n<td></td>n<td></td>n<td></td>n</tr>n<tr>n<td><a href="#Run%20Keyword%20If" class="name">Run Keyword If</a></td>n<td>{rc} &gt; 0</td>n<td><a href="#Run%20Keyword%20And%20Return" class="name">Run Keyword And Return</a></td>n<td><span class="name">My Keyword </span></td>n<td>arg1</td>n<td>arg2</td>n</tr>n</tbody>`,
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
    example: `<tbody><tr>n<td>{passed} =</td>n<td><a href="#Run%20Keyword%20And%20Return%20Status" class="name">Run Keyword And Return Status</a></td>n<td>Keyword</td>n<td>args</td>n</tr>n<tr>n<td><a href="#Run%20Keyword%20If" class="name">Run Keyword If</a></td>n<td>{passed}</td>n<td>Another keyword</td>n<td></td>n</tr>n</tbody>`,
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
      "Runs the given keyword with the given arguments, if condition is true.",
    example: `<tbody><tr>n<td><a href="#Run%20Keyword%20If" class="name">Run Keyword If</a></td>n<td>'{status}' == 'OK'</td>n<td>Some Action</td>n<td>arg</td>n</tr>n<tr>n<td><a href="#Run%20Keyword%20If" class="name">Run Keyword If</a></td>n<td>'{status}' != 'OK'</td>n<td>Another Action</td>n<td></td>n</tr>n</tbody>`,
  },
  {
    name: "Run Keyword If All Tests Passed",
    source: "BuiltIn",
    args: [
      { name: "name", required: true },
      { name: "* args", required: false },
    ],
    description:
      "Runs the given keyword with the given arguments, if all tests passed.",
  },
  {
    name: "Run Keyword If Any Tests Failed",
    source: "BuiltIn",
    args: [
      { name: "name", required: true },
      { name: "* args", required: false },
    ],
    description:
      "Runs the given keyword with the given arguments, if one or more tests failed.",
  },
  {
    name: "Run Keyword If Test Failed",
    source: "BuiltIn",
    args: [
      { name: "name", required: true },
      { name: "* args", required: false },
    ],
    description:
      "Runs the given keyword with the given arguments, if the test failed.",
  },
  {
    name: "Run Keyword If Test Passed",
    source: "BuiltIn",
    args: [
      { name: "name", required: true },
      { name: "* args", required: false },
    ],
    description:
      "Runs the given keyword with the given arguments, if the test passed.",
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
    example: `<tbody><tr>n<td><a href="#Run%20Keywords" class="name">Run Keywords</a></td>n<td><span class="name">Initialize database</span></td>n<td><span class="name">Start servers</span></td>n<td><span class="name">Clear logs</span></td>n</tr>n<tr>n<td><a href="#Run%20Keywords" class="name">Run Keywords</a></td>n<td>{KW 1}</td>n<td>{KW 2}</td>n<td></td>n</tr>n<tr>n<td><a href="#Run%20Keywords" class="name">Run Keywords</a></td>n<td>@{KEYWORDS}</td>n<td></td>n<td></td>n</tr>n</tbody>`,
  },
  {
    name: "Set Global Variable",
    source: "BuiltIn",
    args: [
      { name: "name", required: true },
      { name: "* values", required: false },
    ],
    description: "Makes a variable available globally in all tests and suites.",
  },
  {
    name: "Set Library Search Order",
    source: "BuiltIn",
    args: [{ name: "* search_order", required: false }],
    description:
      "Sets the resolution order to use when a name matches multiple keywords.",
    example: `<tbody><tr>n<td>MyLibrary.Keyword</td>n<td>arg</td>n</tr>n<tr>n<td>MyLibrary.Another Keyword</td>n<td></td>n</tr>n<tr>n<td>MyLibrary.Keyword</td>n<td>xxx</td>n</tr>n</tbody>`,
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
  },
  {
    name: "Set Log Level",
    source: "BuiltIn",
    args: [{ name: "level", required: true }],
    description:
      "Sets the log threshold to the specified level and returns the old level.",
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
  },
  {
    name: "Set Tags",
    source: "BuiltIn",
    args: [{ name: "* tags", required: false }],
    description:
      "Adds given tags for the current test or all tests in a suite.",
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
  },
  {
    name: "Set Test Documentation",
    source: "BuiltIn",
    args: [
      { name: "doc", required: true },
      { name: "append", required: false, default: "False" },
    ],
    description: "Sets documentation for the current test case.",
  },
  {
    name: "Set Test Message",
    source: "BuiltIn",
    args: [
      { name: "message", required: true },
      { name: "append", required: false, default: "False" },
    ],
    description: "Sets message for the current test case.",
    example: `<tbody><tr>n<td>Set Test Message</td>n<td>My message</td>n<td></td>n</tr>n<tr>n<td>Set Test Message</td>n<td>is continued.</td>n<td>append=yes</td>n</tr>n<tr>n<td>Should Be Equal</td>n<td>{TEST MESSAGE}</td>n<td>My message is continued.</td>n</tr>n<tr>n<td>Set Test Message</td>n<td><span class="name">*</span>HTML<span class="name">*</span> &lt;b&gt;Hello!&lt;/b&gt;</td>n<td></td>n</tr>n</tbody>`,
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
  },
  {
    name: "Set Variable",
    source: "BuiltIn",
    args: [{ name: "* values", required: false }],
    description:
      "Returns the given values which can then be assigned to a variables.",
    example: `<tbody><tr>n<td>{hi} =</td>n<td>Set Variable</td>n<td>Hello, world!</td>n<td></td>n<td></td>n</tr>n<tr>n<td>{hi2} =</td>n<td>Set Variable</td>n<td>I said: {hi}</td>n<td></td>n<td></td>n</tr>n<tr>n<td>{var1}</td>n<td>{var2} =</td>n<td>Set Variable</td>n<td>Hello</td>n<td>world</td>n</tr>n<tr>n<td>@{list} =</td>n<td>Set Variable</td>n<td>{list with some items}</td>n<td></td>n<td></td>n</tr>n<tr>n<td>{item1}</td>n<td>{item2} =</td>n<td>Set Variable</td>n<td>{list with 2 items}</td>n<td></td>n</tr>n</tbody>`,
  },
  {
    name: "Set Variable If",
    source: "BuiltIn",
    args: [
      { name: "condition", required: true },
      { name: "* values", required: false },
    ],
    description: "Sets variable based on the given condition.",
    example: `<tbody><tr>n<td>{var1} =</td>n<td>Set Variable If</td>n<td>{rc} == 0</td>n<td>zero</td>n<td>nonzero</td>n</tr>n<tr>n<td>{var2} =</td>n<td>Set Variable If</td>n<td>{rc} &gt; 0</td>n<td>value1</td>n<td>value2</td>n</tr>n<tr>n<td>{var3} =</td>n<td>Set Variable If</td>n<td>{rc} &gt; 0</td>n<td>whatever</td>n<td></td>n</tr>n</tbody>`,
  },
  {
    name: "Should Be Empty",
    source: "BuiltIn",
    args: [
      { name: "item", required: true },
      { name: "msg", required: false, default: "None" },
    ],
    description: "Verifies that the given item is empty.",
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
      { name: "formatter", required: false, default: "str" },
      { name: "strip_spaces", required: false, default: "False" },
      { name: "collapse_spaces", required: false, default: "False" },
    ],
    description: "Fails if the given objects are unequal.",
    example: `<tbody><tr>n<td>Should Be Equal</td>n<td>{x}</td>n<td>expected</td>n<td></td>n<td></td>n</tr>n<tr>n<td>Should Be Equal</td>n<td>{x}</td>n<td>expected</td>n<td>Custom error message</td>n<td></td>n</tr>n<tr>n<td>Should Be Equal</td>n<td>{x}</td>n<td>expected</td>n<td>Custom message</td>n<td>values=False</td>n</tr>n<tr>n<td>Should Be Equal</td>n<td>{x}</td>n<td>expected</td>n<td>ignore_case=True</td>n<td>formatter=repr</td>n</tr>n</tbody>`,
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
    example: `<tbody><tr>n<td>Should Be Equal As Integers</td>n<td>42</td>n<td>{42}</td>n<td>Error message</td>n</tr>n<tr>n<td>Should Be Equal As Integers</td>n<td>ABCD</td>n<td>abcd</td>n<td>base=16</td>n</tr>n<tr>n<td>Should Be Equal As Integers</td>n<td>0b1011</td>n<td>11</td>n<td></td>n</tr>n</tbody>`,
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
    example: `<tbody><tr>n<td>Should Be Equal As Numbers</td>n<td>{x}</td>n<td>1.1</td>n<td></td>n<td># Passes if {x} is 1.1</td>n</tr>n<tr>n<td>Should Be Equal As Numbers</td>n<td>1.123</td>n<td>1.1</td>n<td>precision=1</td>n<td># Passes</td>n</tr>n<tr>n<td>Should Be Equal As Numbers</td>n<td>1.123</td>n<td>1.4</td>n<td>precision=0</td>n<td># Passes</td>n</tr>n<tr>n<td>Should Be Equal As Numbers</td>n<td>112.3</td>n<td>75</td>n<td>precision=-2</td>n<td># Passes</td>n</tr>n</tbody>`,
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
      { name: "strip_spaces", required: false, default: "False" },
      { name: "formatter", required: false, default: "str" },
      { name: "collapse_spaces", required: false, default: "False" },
    ],
    description:
      "Fails if objects are unequal after converting them to strings.",
  },
  {
    name: "Should Be True",
    source: "BuiltIn",
    args: [
      { name: "condition", required: true },
      { name: "msg", required: false, default: "None" },
    ],
    description: "Fails if the given condition is not true.",
    example: `<tbody><tr>n<td>Should Be True</td>n<td>{rc} &lt; 10</td>n<td></td>n</tr>n<tr>n<td>Should Be True</td>n<td>'{status}' == 'PASS'</td>n<td># Strings must be quoted</td>n</tr>n<tr>n<td>Should Be True</td>n<td>{number}</td>n<td># Passes if {number} is not zero</td>n</tr>n<tr>n<td>Should Be True</td>n<td>{list}</td>n<td># Passes if {list} is not empty</td>n</tr>n</tbody>`,
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
      { name: "strip_spaces", required: false, default: "False" },
      { name: "collapse_spaces", required: false, default: "False" },
    ],
    description: "Fails if container does not contain item one or more times.",
    example: `<tbody><tr>n<td>Should Contain</td>n<td>{output}</td>n<td>PASS</td>n<td></td>n<td></td>n</tr>n<tr>n<td>Should Contain</td>n<td>{some list}</td>n<td>value</td>n<td>msg=Failure!</td>n<td>values=False</td>n</tr>n<tr>n<td>Should Contain</td>n<td>{some list}</td>n<td>value</td>n<td>ignore_case=True</td>n<td></td>n</tr>n</tbody>`,
  },
  {
    name: "Should Contain Any",
    source: "BuiltIn",
    args: [
      { name: "container", required: true },
      { name: "* items", required: false },
      { name: "** configuration", required: false },
    ],
    description: "Fails if container does not contain any of the *items.",
    example: `<tbody><tr>n<td>Should Contain Any</td>n<td>{string}</td>n<td>substring 1</td>n<td>substring 2</td>n<td></td>n<td></td>n</tr>n<tr>n<td>Should Contain Any</td>n<td>{list}</td>n<td>item 1</td>n<td>item 2</td>n<td>item 3</td>n<td></td>n</tr>n<tr>n<td>Should Contain Any</td>n<td>{list}</td>n<td>item 1</td>n<td>item 2</td>n<td>item 3</td>n<td>ignore_case=True</td>n</tr>n<tr>n<td>Should Contain Any</td>n<td>{list}</td>n<td>@{items}</td>n<td>msg=Custom message</td>n<td>values=False</td>n<td></td>n</tr>n</tbody>`,
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
      { name: "strip_spaces", required: false, default: "False" },
      { name: "collapse_spaces", required: false, default: "False" },
    ],
    description: "Fails if container does not contain item count times.",
    example: `<tbody><tr>n<td>Should Contain X Times</td>n<td>{output}</td>n<td>hello</td>n<td>2</td>n<td></td>n</tr>n<tr>n<td>Should Contain X Times</td>n<td>{some list}</td>n<td>value</td>n<td>3</td>n<td>ignore_case=True</td>n</tr>n</tbody>`,
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
      { name: "strip_spaces", required: false, default: "False" },
      { name: "collapse_spaces", required: false, default: "False" },
    ],
    description: "Fails if the string str1 does not end with the string str2.",
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
  },
  {
    name: "Should Match Regexp",
    source: "BuiltIn",
    args: [
      { name: "string", required: true },
      { name: "pattern", required: true },
      { name: "msg", required: false, default: "None" },
      { name: "values", required: false, default: "True" },
      { name: "flags", required: false, default: "None" },
    ],
    description:
      "Fails if string does not match pattern as a regular expression.",
    example: `<tbody><tr>n<td>Should Match Regexp</td>n<td>{output}</td>n<td>d{6}</td>n<td># Output contains six numbers</td>n<td></td>n</tr>n<tr>n<td>Should Match Regexp</td>n<td>{output}</td>n<td>^d{6}$</td>n<td># Six numbers and nothing more</td>n<td></td>n</tr>n<tr>n<td>{ret} =</td>n<td>Should Match Regexp</td>n<td>Foo: 42</td>n<td>foo: d+</td>n<td>flags=IGNORECASE</td>n</tr>n<tr>n<td>{ret} =</td>n<td>Should Match Regexp</td>n<td>Foo: 42</td>n<td>(?i)foo: d+</td>n<td></td>n</tr>n<tr>n<td>{match}</td>n<td>{group1}</td>n<td>{group2} =</td>n<td></td>n<td></td>n</tr>n<tr>n<td>...</td>n<td>Should Match Regexp</td>n<td>Bar: 43</td>n<td>(Foo|Bar): (d+)</td>n<td></td>n</tr>n</tbody>`,
  },
  {
    name: "Should Not Be Empty",
    source: "BuiltIn",
    args: [
      { name: "item", required: true },
      { name: "msg", required: false, default: "None" },
    ],
    description: "Verifies that the given item is not empty.",
  },
  {
    name: "Should Not Be Equal",
    source: "BuiltIn",
    args: [
      { name: "first", required: true },
      { name: "second", required: true },
      { name: "msg", required: false, default: "None" },
      { name: "values", required: false, default: "True" },
      { name: "ignore_case", required: false, default: "False" },
      { name: "strip_spaces", required: false, default: "False" },
      { name: "collapse_spaces", required: false, default: "False" },
    ],
    description: "Fails if the given objects are equal.",
  },
  {
    name: "Should Not Be Equal As Integers",
    source: "BuiltIn",
    args: [
      { name: "first", required: true },
      { name: "second", required: true },
      { name: "msg", required: false, default: "None" },
      { name: "values", required: false, default: "True" },
      { name: "base", required: false, default: "None" },
    ],
    description:
      "Fails if objects are equal after converting them to integers.",
  },
  {
    name: "Should Not Be Equal As Numbers",
    source: "BuiltIn",
    args: [
      { name: "first", required: true },
      { name: "second", required: true },
      { name: "msg", required: false, default: "None" },
      { name: "values", required: false, default: "True" },
      { name: "precision", required: false, default: "6" },
    ],
    description:
      "Fails if objects are equal after converting them to real numbers.",
  },
  {
    name: "Should Not Be Equal As Strings",
    source: "BuiltIn",
    args: [
      { name: "first", required: true },
      { name: "second", required: true },
      { name: "msg", required: false, default: "None" },
      { name: "values", required: false, default: "True" },
      { name: "ignore_case", required: false, default: "False" },
      { name: "strip_spaces", required: false, default: "False" },
      { name: "collapse_spaces", required: false, default: "False" },
    ],
    description: "Fails if objects are equal after converting them to strings.",
  },
  {
    name: "Should Not Be True",
    source: "BuiltIn",
    args: [
      { name: "condition", required: true },
      { name: "msg", required: false, default: "None" },
    ],
    description: "Fails if the given condition is true.",
  },
  {
    name: "Should Not Contain",
    source: "BuiltIn",
    args: [
      { name: "container", required: true },
      { name: "item", required: true },
      { name: "msg", required: false, default: "None" },
      { name: "values", required: false, default: "True" },
      { name: "ignore_case", required: false, default: "False" },
      { name: "strip_spaces", required: false, default: "False" },
      { name: "collapse_spaces", required: false, default: "False" },
    ],
    description: "Fails if container contains item one or more times.",
    example: `<tbody><tr>n<td>Should Not Contain</td>n<td>{some list}</td>n<td>value</td>n<td></td>n</tr>n<tr>n<td>Should Not Contain</td>n<td>{output}</td>n<td>FAILED</td>n<td>ignore_case=True</td>n</tr>n</tbody>`,
  },
  {
    name: "Should Not Contain Any",
    source: "BuiltIn",
    args: [
      { name: "container", required: true },
      { name: "* items", required: false },
      { name: "** configuration", required: false },
    ],
    description: "Fails if container contains one or more of the *items.",
    example: `<tbody><tr>n<td>Should Not Contain Any</td>n<td>{string}</td>n<td>substring 1</td>n<td>substring 2</td>n<td></td>n<td></td>n</tr>n<tr>n<td>Should Not Contain Any</td>n<td>{list}</td>n<td>item 1</td>n<td>item 2</td>n<td>item 3</td>n<td></td>n</tr>n<tr>n<td>Should Not Contain Any</td>n<td>{list}</td>n<td>item 1</td>n<td>item 2</td>n<td>item 3</td>n<td>ignore_case=True</td>n</tr>n<tr>n<td>Should Not Contain Any</td>n<td>{list}</td>n<td>@{items}</td>n<td>msg=Custom message</td>n<td>values=False</td>n<td></td>n</tr>n</tbody>`,
  },
  {
    name: "Should Not End With",
    source: "BuiltIn",
    args: [
      { name: "str1", required: true },
      { name: "str2", required: true },
      { name: "msg", required: false, default: "None" },
      { name: "values", required: false, default: "True" },
      { name: "ignore_case", required: false, default: "False" },
      { name: "strip_spaces", required: false, default: "False" },
      { name: "collapse_spaces", required: false, default: "False" },
    ],
    description: "Fails if the string str1 ends with the string str2.",
  },
  {
    name: "Should Not Match",
    source: "BuiltIn",
    args: [
      { name: "string", required: true },
      { name: "pattern", required: true },
      { name: "msg", required: false, default: "None" },
      { name: "values", required: false, default: "True" },
      { name: "ignore_case", required: false, default: "False" },
    ],
    description: "Fails if the given string matches the given pattern.",
  },
  {
    name: "Should Not Match Regexp",
    source: "BuiltIn",
    args: [
      { name: "string", required: true },
      { name: "pattern", required: true },
      { name: "msg", required: false, default: "None" },
      { name: "values", required: false, default: "True" },
      { name: "flags", required: false, default: "None" },
    ],
    description: "Fails if string matches pattern as a regular expression.",
  },
  {
    name: "Should Not Start With",
    source: "BuiltIn",
    args: [
      { name: "str1", required: true },
      { name: "str2", required: true },
      { name: "msg", required: false, default: "None" },
      { name: "values", required: false, default: "True" },
      { name: "ignore_case", required: false, default: "False" },
      { name: "strip_spaces", required: false, default: "False" },
      { name: "collapse_spaces", required: false, default: "False" },
    ],
    description: "Fails if the string str1 starts with the string str2.",
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
      { name: "strip_spaces", required: false, default: "False" },
      { name: "collapse_spaces", required: false, default: "False" },
    ],
    description:
      "Fails if the string str1 does not start with the string str2.",
  },
  {
    name: "Skip",
    source: "BuiltIn",
    args: [
      { name: "msg", required: false, default: "Skipped with Skip keyword." },
    ],
    description: "Skips the rest of the current test.",
  },
  {
    name: "Skip If",
    source: "BuiltIn",
    args: [
      { name: "condition", required: true },
      { name: "msg", required: false, default: "None" },
    ],
    description: "Skips the rest of the current test if the condition is True.",
  },
  {
    name: "Sleep",
    source: "BuiltIn",
    args: [
      { name: "time_", required: true },
      { name: "reason", required: false, default: "None" },
    ],
    description: "Pauses the test executed for the given time.",
    example: `<tbody><tr>n<td>Sleep</td>n<td>42</td>n<td></td>n</tr>n<tr>n<td>Sleep</td>n<td>1.5</td>n<td></td>n</tr>n<tr>n<td>Sleep</td>n<td>2 minutes 10 seconds</td>n<td></td>n</tr>n<tr>n<td>Sleep</td>n<td>10s</td>n<td>Wait for a reply</td>n</tr>n</tbody>`,
  },
  {
    name: "Variable Should Exist",
    source: "BuiltIn",
    args: [
      { name: "name", required: true },
      { name: "msg", required: false, default: "None" },
    ],
    description:
      "Fails unless the given variable exists within the current scope.",
  },
  {
    name: "Variable Should Not Exist",
    source: "BuiltIn",
    args: [
      { name: "name", required: true },
      { name: "msg", required: false, default: "None" },
    ],
    description: "Fails if the given variable exists within the current scope.",
  },
  {
    name: "Wait Until Keyword Succeeds",
    source: "BuiltIn",
    args: [
      { name: "retry", required: true },
      { name: "retry_interval", required: true },
      { name: "name", required: true },
      { name: "* args", required: false },
    ],
    description: "Runs the specified keyword and retries if it fails.",
    example: `<tbody><tr>n<td>Wait Until Keyword Succeeds</td>n<td>2 min</td>n<td>5 sec</td>n<td>My keyword</td>n<td>argument</td>n</tr>n<tr>n<td>{result} =</td>n<td>Wait Until Keyword Succeeds</td>n<td>3x</td>n<td>200ms</td>n<td>My keyword</td>n</tr>n<tr>n<td>{result} =</td>n<td>Wait Until Keyword Succeeds</td>n<td>3x</td>n<td>strict: 200ms</td>n<td>My keyword</td>n</tr>n</tbody>`,
  },
];
