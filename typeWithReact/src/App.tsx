import "./App.css";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const name = {
    firstName: "Nidhi",
    lastName: "Sharma",
  };

  const nameList = [
    {
      first: "Dipu",
      last: "Sharma",
    },
    {
      first: "Aman",
      last: "Kumar",
    },
    {
      first: "Sunita",
      last: "Devi",
    },
  ];
  return (
    <div className="App">
      {/* <Greet
        name="Nidhi"
        count={10}
        isLoggedIn={true}
      />
      <Person name={name} />
      <PersonList names={nameList} /> */}
      <Status status="success" />
      <Heading>Placeholder Text</Heading>
    </div>
  );
}

export default App;
