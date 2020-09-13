/** @jsxRuntime classic */

const content = (
  <div>
    <h1 onClick={() => console.log("clicked h1")}>Hello, React!</h1>
    <ul>
      {[1, 2, 3].map((item) => (
        <li>item</li>
      ))}
    </ul>
    <div>
      <p>Some text</p>
    </div>
  </div>
);

function createElement(elementType, props, ...children) {
  return {
    elementType,
    props,
    children,
  };
}

function render(vdom, container) {
  const element = buildDOM(vdom);

  container.appendChild(element);
}
