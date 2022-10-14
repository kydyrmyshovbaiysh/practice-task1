import "./App.css";

const blocks = [
  {
    id: "b1",
    block: "yellow",
  },
  {
    id: "b2",
    block: "green",
  },
  {
    id: "b3",
    block: "color",
  },
  {
    id: "b4",
    block: `${Math.random()}`,
  },
];

const renderBlocks = (item) => {
 return item.block === "green"
    ? "green"
    : item.block === "yellow"
    ? "yellow"
    : item.block === "color"
    ? "limegreen"
    : "red";
};

function App() {
  return (
    <div className="App">
      {blocks.map((item) => {
        return (
          <div key={item.id}>
            <div className="block" style={{ background: renderBlocks(item) }}>{item.block}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
