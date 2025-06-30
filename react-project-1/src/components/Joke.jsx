import { useState } from "react";
export default function Joke(props) {
  const [isShown, setIsShown] = useState(false);
  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }
 
  return (
    <div>
      <article>
        <div className="joke__container">
          { props.setup ? <h3 className="joke__setup">{props.setup}</h3> : null}
          {isShown ? <p className="joke__punchline">{props.punchline}</p> : null }
          <button className="button" onClick={toggleShown}>
            {isShown ? "Hide punchline" : "Show Punchline"}
          </button>
          <br />
          <hr />
        </div>
      </article>
    </div>
  );
}
