# react-click-to-select

A React component that selects the text / elements contained within
when they're clicked.

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
  <p>this text will be selected when clicked</p>
</ClickToSelect>
```

This avoids React warnings:

```jsconsole
validateDOMNesting(...): <div> cannot appear as a descendant of <p>.
```
