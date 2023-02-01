import "./App.css";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import LoggedIn from "./components/state/LoggedIn";
import User from "./components/state/User";

function App() {
  const name = {
    first: "Nidhi",
    last: "Kumari",
  };

  const personList = [
    {
      first: "Nidhi",
      last: "Sharma",
    },
    {
      first: "Dipu",
      last: "Sharma",
    },
    {
      first: "Aman",
      last: "Sharma",
    },
  ];
  return (
    <div>
      {/* 
      
      <Person name={name} />
      <PersonList names={personList} /> */}
      {/* <Status status="success" />

      <Oscar>
        <Heading>Oscar goes to Leonard Dicaprio!</Heading>
      </Oscar>
      <Greet
        name="Nidhi"
        isLoggedIn={true}
      />
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked!", event, id);
        }}
      />
      <Input
        value="codevolution"
        handleChange={(event) => {
          console.log(event);
        }}
      /> */}
      {/* <Container styles={{ border: "1px solid green", padding: "1rem" }} /> */}
      {/* <LoggedIn /> */}
      <User />
    </div>
  );
}

export default App;
