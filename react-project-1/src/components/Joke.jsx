import { useState } from "react";
export default function Joke(props) {
  const [isShown, setIsShown] = useState(false);
  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }
  console.log(isShown);
  return (
    <div>
      <article>
        <div className="joke__container">
          <h3 className="joke__setup">{props.setup}</h3>
          {isShown && <p className="joke__punchline">{props.punchline}</p>}
          <button className="button" onClick={toggleShown}>
            Hide/Show
          </button>
          <br />
          <hr />
        </div>
      </article>
    </div>
  );
}
