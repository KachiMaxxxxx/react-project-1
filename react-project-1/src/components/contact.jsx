export default function Contact(props) {
  return (
    
    <div>
      <article className="contact__article">
        <img
          src={props.img}
          alt="Photo of Mr. Whiskerson"

          className="contact__img"
        />
        <div className="contact__info">
        <h3>{props.name}</h3>
        <div className="contact__phone">
          <img src="/src/assets/phone-icon.png" alt="phone icon" />
          <p>{props.phone}</p>
        </div>
        <div className="contact__email">
          <img src="/src/assets/mail-icon.png" alt=",mail icon" />
          <p>{props.email}</p>
        </div>
        </div>
      </article>
    </div>
  );
}
