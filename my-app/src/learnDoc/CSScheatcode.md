| Selector   | Meaning              | Example              | What it selects                                                         |
| ---------- | -------------------- | -------------------- | ----------------------------------------------------------------------- |
| `A B`      | Descendant           | `div p`              | Any `<p>` inside `<div>` at any depth                                   |
| `A > B`    | Direct child         | `ul > li`            | `<li>` elements that are **direct children** of `<ul>`                  |
| `A + B`    | Adjacent sibling     | `h1 + p`             | The **first `<p>`** immediately after an `<h1>`                         |
| `A ~ B`    | General sibling      | `h1 ~ p`             | All `<p>` elements that come after the `<h1>` but share the same parent |
| `A, B`     | Grouping             | `h1, h2`             | Selects both `<h1>` and `<h2>`                                          |
| `A.B`      | Element with class   | `div.box`            | `<div>` elements with class "box"                                       |
| `.A .B`    | Descendant classes   | `.container .item`   | `.item` inside `.container`                                             |
| `.A > .B`  | Direct child classes | `.menu > .item`      | `.item` that is a direct child of `.menu`                               |
| `A#id`     | Element with ID      | `div#main`           | `<div id="main">`                                                       |
| `A[B]`     | Attribute selector   | `input[type]`        | Any `<input>` with a `type` attribute                                   |
| `A[B="x"]` | Attribute equals     | `input[type="text"]` | `<input type="text">`                                                   |

Or so you can understand the relation as: 
| Symbol      | Memory trick           | Meaning            |
| ----------- | ---------------------- | ------------------ |
| ` ` (space) | “free roam”            | descendant         |
| `>`         | “arrow down one level” | direct child       |
| `+`         | “right next to it”     | adjacent sibling   |
| `~`         | “wave continues”       | general sibling    |
| `,`         | “OR”                   | multiple selectors |
| `.`         | “class dot”            | class selector     |
| `#`         | “unique tag”           | ID selector        |
| `[]`        | “filter box”           | attribute selector |
