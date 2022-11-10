import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import People from "./components/People";
function App() {
  let info = [
    { name: "Ganesh", place: "Jalgaon" },
    { name: "Rahul", place: "Karnataka" },
    { name: "Akash", place: "Solapur" },
    { name: "Ayaz", place: "Delhi" },
    { name: "Sachin", place: "kerala" },
    { name: "Wahid", place: "kerala" },
    { name: "Hemant", place: "Uttar Pradesh" },
    { name: "Aaron", place: "Goa" },
    { name: "Sonali", place: "Sangamnair aka South Africa" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello />
        <h1>Native Place</h1>
        {info.map((user) => (
          <div>
            <People {...user} />
          </div>
        ))}
        {/* <Hello></Hello> */}
      </header>
    </div>
  );
}

export default App;
