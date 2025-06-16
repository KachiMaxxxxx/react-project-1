export default function Entry(props) {
  return (
    <article>
      <div className="japan__wrapper">
        <div className="img__wrapper">
          
          <img src={props.img.src} alt={props.img.alt} className="japan__img" />
        </div>

        <div className="japan__text">
          <div className="link__wrapper">
            <span className="japan__marker">
              <img
                src="/src/assets/marker.png"
                alt="Location"
                className="marker__img"
              />
            </span>
            <span>{props.country}</span>
            <span>
              <a
                href={props.link}
                className="japan__link"
              >
                View on Google Maps
              </a>
            </span>
          </div>
          <h2>{props.title}</h2>
          <div className="japan__date">{props.date}</div>
          <p className="japan__paragraph">
          {props.text}
          </p>
        </div>
      </div>
    </article>
  );
}
