export default function Works() {
  return (
    <div className="page3">
      <h2>Selected Works</h2>

      <div className="page3-part1">
        <div className="image-div">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Content/DarkBlue Image.webp" alt="MGNY project" />
          <div className="image-corner">
            <p className="p1">MGNY</p>
            <p className="p2">Strategy, Website, Illustration</p>
          </div>
        </div>

        <div className="video-div">
          <video autoPlay loop muted playsInline>
            <source src="/Content/Duo Video 2.mp4" type="video/mp4" />
          </video>
          <div className="video-corner">
            <p className="p1">MADEGOOD</p>
            <p className="p2">Strategy, Website</p>
          </div>
        </div>
      </div>

      <div className="page3-part1">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="second-image"
            src="/Content/duo image.2webp"
            alt="Finturity project"
          />
          <div className="image-corner">
            <p className="p1">Finturity</p>
            <p className="p2">Brand Identity, Graphic Design</p>
          </div>
        </div>

        <div>
          <video autoPlay loop muted playsInline>
            <source src="/Content/Duo Video 2.mp4" type="video/mp4" />
          </video>
          <div className="video-corner">
            <p className="p1">Cruefilms</p>
            <p className="p2">Brand Strategy, Website</p>
          </div>
        </div>
      </div>

      <div className="btn-div">
        <div className="page3-part3">
          <p className="see-text">
            Browse our work and get inspired by the <br />
            possibilities we can create together.
          </p>
          <button className="see-btn">See All Work</button>
        </div>
      </div>
    </div>
  );
}
