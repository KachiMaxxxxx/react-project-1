export default function Japan() {
  return (
    <article>
      <div className="japan__wrapper">
        <div className="img__wrapper">
          <img
            src="https://scrimba.com/links/travel-journal-japan-image-url"
            alt="Mount Fuji"
            className="japan__img"
          />
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
            <span>JAPAN</span>
            <span>
              <a
                href="https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9"
                className="japan__link"
              >
                View on Google Maps
              </a>
            </span>
          </div>
          <h2>Mount Fuji</h2>
          <div className="japan__date">12 Jan, 2021 - 24 Jan, 2021</div>
          <p className="japan__paragraph">
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </div>
    </article>
  );
}
