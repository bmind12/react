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
    children: children.flat(),
  };
}

function render(vdom, container) {
  const element = buildDOM(vdom);

  container.appendChild(element);
}

function buildDOM(vnode) {
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }

  const node = document.createElement(vnode.elementType);

  for (prop in vnode.props) {
    node.setAttribute(prop, vnode.props[prop]);
  }

  for (child of vnode.children) {
    node.appendChild(buildDOM(child));
  }

  return node;
}

render(content, document.querySelector("#app"));
