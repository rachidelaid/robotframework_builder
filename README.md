# Robot Framework Script Builder

a web app that allow none tech savvy users to generate an automation script for Robot Framework.

## keywords scraper

```js
const array = [];
document
  .querySelectorAll("#keywords-container .keywords > div")
  .forEach((elm) => {
    array.push({
      name: elm.id,
      args: [...elm.querySelectorAll(".arguments-list .arg-name")].map(
        (arg) => {
          const obj = {
            name: arg.innerText,
            required: arg.classList.contains("arg-required"),
          };

          if (arg?.nextElementSibling?.classList?.contains("arg-type")) {
            obj.type = arg.nextElementSibling?.innerText.split(" ");
          }

          if (
            arg?.nextElementSibling?.classList.contains("arg-default-container")
          ) {
            obj.default =
              arg.nextElementSibling?.querySelector(
                ".arg-default-value"
              )?.innerText;
          }

          if (
            arg?.nextElementSibling?.nextElementSibling?.classList?.contains(
              "arg-type"
            ) &&
            !obj.type
          ) {
            obj.type =
              arg.nextElementSibling?.nextElementSibling?.innerText?.split(" ");
          }

          return obj;
        }
      ),
      description: elm.querySelector(".doc p")?.innerText,
      example: elm.querySelector(".doc table")?.outerHTML,
      source: document.title,
    });
  });

console.log(JSON.stringify(array));
```

to clean the data

- remove all new lines `\n`
- remove all forward slashes `\`
- replace all `${` with `{`
- replace all "<table with `<table
- replace all </table>" with </table>`

## Next

- [ ] add more keywords from other libraries (for now we have SeleniumLibrary, BuiltIn, String and Screenshot)
- [ ] add nested keywords
- [ ] add custom keywords
- [ ] add documentation
- [ ] render inputs based on the type of the argument
- [ ] add keyword examples
