// const headingElement = React.createElement(
//   "h1",
//   {},
//   "Hello world from the React...!!!"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(headingElement);

const headingTag = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world this is react by my self"
);
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Im an H1 tag"),
    React.createElement("h2", { id: "childheading" }, "Im an H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "subheading" }, "Im an subH1 tag"),
    React.createElement("h2", { id: "subchildheading" }, "Im an subhildH2 tag"),
  ]),
]);

console.log(headingTag);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
