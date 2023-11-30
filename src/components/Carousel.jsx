// todo: add links to collections or whatnot that are displayed on the carousel
// todo: find solution warping on slim aspects

export default function Carousel() {
  return (
    <div id="carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carousel"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://semesterprojekt.blob.core.windows.net/images/images/homepage/IMG_20220906_183940_720x.jpg"
            className="d-block w-100 object-fit-cover"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-25 rounded-pill">
            <h4>Sennep Kollektion</h4>
            <p>
              En kollektion af ting du ikke kan se at der er spildt sennep på.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://semesterprojekt.blob.core.windows.net/images/images/homepage/to_skaller_og_mig_13.jpg"
            className="d-block w-100 object-fit-cover"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-25 rounded-pill">
            <h4>Beach Kollektion</h4>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://semesterprojekt.blob.core.windows.net/images/images/homepage/profil10_spejlvendt_1800x.jpg"
            className="d-block w-100 object-fit-cover"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-25 rounded-pill">
            <h4>Ketchup Kollektion</h4>
            <p>Kollektionen til kun de største Heinz fans.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://semesterprojekt.blob.core.windows.net/images/images/homepage/droemmefanger_profil_2.jpg"
            className="d-block w-100 object-fit-cover"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-25 rounded-pill">
            <h4>Mayo Kollektion</h4>
            <p>Udforsk de mange forskellige nuancer af mayonnaise.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
