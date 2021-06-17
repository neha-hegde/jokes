import React from "react";
import Jokes from "./Jokes"
import JokesData from "./JokesData";
import "./App.css";

const JokeComponents = JokesData.map((joke) => {
      return (
            <Jokes key={joke.id} question={joke.question} punchLine={joke.punchLine}/>
      );
})
const App = () => {
  return (
    <div>
      {JokeComponents}
    </div>
  );
}

export default App;