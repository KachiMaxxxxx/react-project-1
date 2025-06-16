import Joke from "./components/Joke";
import "./App.css";
import Jokesdata from "./components/Jokedata.js"
export default function App() {
  const JokeElements = Jokesdata.map(joke => <Joke
  setup={joke.setup} punchline={joke.punchline}/>)
  return (
  
    <>
    {JokeElements}
     
    </>
  );
}
