export default function Joke(props) {
  return (
    
    <div>
      <article>
        <div className="joke__container">
          <h3 className="joke__setup">{props.setup}</h3>
          <p className="joke__punchline">{props.punchline}
          </p>
            <br />
            <hr />
        </div>
      </article>
  
    </div>
  );
}


