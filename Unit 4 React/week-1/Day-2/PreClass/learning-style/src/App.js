import "./App.css";
import "./styles/test.css";

let style1 = {
  fontSize: "60px",
  color: "blue",
  margin: "3px",
};
let style2 = {
  // fontSize: "60px",
  // color: "blue",
  background: "yellow",
  // margin: "3px",
};
let styleTest = "class1";
let styleTest2 = "class2";

function App() {
  return (
    <div className="App">
      <h1>Hello React | Style </h1>
      <div>
        <button style={style1}>1</button>
      </div>
      <div>
        <button style={{ color: "cyan", fontSize: 80 }}>2</button>
      </div>
      <div>
        {/* <button className={`${styles.one}`}>3</button> */}
        <button className="one">3</button>
      </div>
      <div>
        {/* <button className={`${test.two}`}>35789</button> */}
        <button className="two one">7498</button>
      </div>
      <div>
        <button style={{ ...style1, ...style2 }}>4</button>
      </div>
      <div>
        <button className={`${styleTest} ${styleTest2} `}>5</button>
      </div>
      {/* <header className="App-header"></header> */}
    </div>
  );
}

export default App;
