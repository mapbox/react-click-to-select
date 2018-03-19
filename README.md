# react-click-to-select

A React component that selects the text / elements contained within
when they're clicked.

[![npm](https://img.shields.io/npm/v/@mapbox/react-click-to-select.svg)]()
[![npm license](https://img.shields.io/npm/l/@mapbox/react-click-to-select.svg)](https://github.com/mapbox/react-click-to-select/blob/master/LICENSE.txt)

## install

    npm install --save @mapbox/react-click-to-select

## use

```jsx
<ClickToSelect>
  this text will be selected when clicked
</ClickToSelect>
```

By default ClickToSelect contains the children within a span element, but you
can use a div instead:

```jsx
<ClickToSelect containerElement="div">
  <p>
    this text will be selected when clicked
  </p>
</ClickToSelect>
```

You can pass a function that will be called when text is selected. This is useful for doing things like showing a tooltip with a prompt to copy.

```jsx
<ClickToSelect onSelect={myFunc}>
  <p>
    this text will be selected when clicked
  </p>
</ClickToSelect>
```

This avoids React warnings:

```jsconsole
validateDOMNesting(...): <div> cannot appear as a descendant of <p>.
```
