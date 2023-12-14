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
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://semesterprojekt.blob.core.windows.net/images/images/homepage/4501255-11_900x.jpg"
            className="d-block w-100 object-fit-cover"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-25 rounded-pill">
            <h4>INDRETNING MED BALIVIBES</h4>
            <p>
              Behøver man at rejse sydpå eller tage i spa for at få en fornyet omgivelserne? Gør det derhjemme!
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://semesterprojekt.blob.core.windows.net/images/images/homepage/2101455-11_900x.jpg"
            className="d-block w-100 object-fit-cover"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-25 rounded-pill">
            <h4>PUFS</h4>
            <p>Er du vild med pufs? Mangler du et lille spark i din indretning af stuen? Vi har et lækkert udvalg lige her på shoppen.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://semesterprojekt.blob.core.windows.net/images/images/homepage/2201030-0_900x.jpg"
            className="d-block w-100 object-fit-cover"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-25 rounded-pill">
            <h4>SIMPEL INDRETNING</h4>
            <p>Hvis du er til en lidt mere simpel indretning kan du her se et udvalg der passer dertil.

            </p>
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