# web-js-utils
utilities as js functions for html, css and more
These utilities allow vanilla javascript based development without using cubursome framework, nor transpilers

# Import
ES6 modules export and import, not using classes for minimal code impact

```javascript
import {html,css,suid} from "./web-js-utils.js"
```
# 2.1.0
- fixed `html()` to support to be context independent as inject directly into the DOM without Fragments
- added `htmls()` for adding a list of elements
- deprecated `html_tag()`

# 2.0.2
- non compatible function with 1.0.0 : `html()`
- change required for `html()`, remove tagName parameter but not supported by svg elements
- to keep backward compatibility for svg elements : rename `html()` to `html_tag()`
- renamed entry to `index.js`

# Functions
## html()
- the `html()` function is extreamely simple yet powerful, especially when combined with a VS.Code plugin such as [es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html)
- 2.1.0 update : the difference to 1.0.0 is that `html()` is now simpler to use (no tagName redundancy).
- example usage below creating a list of bootstrap columns

<img src="./media/html_usage.png" width=800>

## defined()
improves code readability by reducing the existance check in javascript to a simple function call

## uid() suid()
unique identifiers for giving ids to components, using both time and a random number for fast components creation within the same millisecond

## send()
simplified custom events, forwards data into the detail member of the event

## temp()
similar to html but creates the component in a template, so does not require a parent, and helps for bottom up components struture building

## css()
`css()` allows writing parametric css in javascript. A VS.Code plugin [es6-string-css](https://marketplace.visualstudio.com/items?itemName=bashmish.es6-string-css) helps to highlight the css.

Just with this function, it is possible to argue on why a framework and a transpiler are required to use css in js while it's obiously that simple to embed css. Note that this is only possible thanks to `CSSStyleSheet()` concept. The function itself is wrapping a single call to `sheet.insertRule()` just to make it more readable.

<img src="./media/css_in_js.png" width="600">

## br()
save 36 characters or more, and so improve readability

## hr()
similar to br

## image()
creates an image component from the parent and url

## Events
a js replacement to jQuery events which could have some side effects and not have the expected behavior somethimes, e.g. with libraries such bootstrap toggle.

## save_json()
Object requires few steps before ending on a file

## rand_col()
random color generation

# Open issues
- how to make `html()` usage in an esvg element in stead of `html_tag()` ?
- it is not possible to add `range.selectNode(parent)` to `html()` as it would then fail when `parent` is a template with `the given Node has no parent`
