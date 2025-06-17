export default function Entry(props) {
  return (
    <article>
      <div className="entry__wrapper">
        <div className="img__wrapper">
          <img src={props.img.src} alt={props.img.alt} className="entry__img" />
        </div>

        <div className="entry__text">
          <div className="link__wrapper">
            <span className="entry__marker">
              <img
                src="/src/assets/marker.png"
                alt="Location"
                className="marker__img"
              />
            </span>
            <span>{props.country}</span>
            <span>
              <a href={props.googleMapsLink} className="entry__link" >
                View on Google Maps
              </a>
            </span>
          </div>
          <h2>{props.title}</h2>
          <div className="entry__date">{props.date}</div>
          <p className="entry__paragraph">{props.text}</p>
        </div>
      </div>
    </article>
  );
}
