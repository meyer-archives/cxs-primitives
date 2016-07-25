# cxs-primitives

[`jsxstyle`][jsx]-like primitive components that pass inline props as style props to [`cxs`][cxs].

## Good things to know

* The `children` prop is automatically assumed to be Not CSS.
* The `component` prop lets you specify the base component.
* The `props` prop (how meta!) lets you set non-style properties on the base component.

## TODO

- [ ] Handle pseudoclasses a bit more nicely. Right now, things look pretty gross:

  ```js
  <Block
    opacity={0.5}
    {...{':hover': {
      opacity: 1.0,
    }}}>
    Hover Me
  </Block>
  ```

  Proposal:

  ```js
  <Block
    opacity={0.5}
    hover={{
      opacity: 1.0
    }}>
    Hover Me
  </Block>
  ```

[jsx]: https://github.com/petehunt/jsxstyle
[cxs]: https://github.com/jxnblk/cxs
