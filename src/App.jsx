import React from "react";
import { Input } from "./inputs/Input";
import { Tempo } from "./displays/Tempo";
import { Beat } from "./displays/Beat";

function App() {
  const [tempo, setTempo] = React.useState(120);

  function setBeatsPerMinute(event) {
    const { value } = event.target;
    setTempo((prevTempo) => (prevTempo = value));
  }

  return (
    <div className="App">
      <header className="App-header">
        <Input setBeatsPerMinute={setBeatsPerMinute} tempo={tempo} />
        <Tempo tempo={tempo} />
        <Beat tempo={tempo} />
      </header>
    </div>
  );
}

export default App;