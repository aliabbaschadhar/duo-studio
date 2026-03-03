export default function Footer() {
  return (
    <footer id="footer">
      <div className="upper">
        <div className="text">
          Let&apos;s create an experience as<br /> remarkable as your Business
        </div>
        <div className="circle">Get in Touch</div>
      </div>

      <div className="lower">
        <div className="email-div">
          <p>Don&apos;t miss out. Stay in the loop.</p>
          <div className="input">
            <input type="text" placeholder="Your Email" />
            <button className="subscribe">Subscribe</button>
          </div>
        </div>

        <div className="links-div">
          <h6>hello@duo-studio.co</h6>
          <div className="parent-links">
            <div className="a-div">
              <p>Main Hubs</p>
              <div className="a-lists">
                <a href="#">DC</a>
                <a href="#">Maryland</a>
                <a href="#">Virginia</a>
              </div>
            </div>
            <div className="a-div">
              <p>Socials</p>
              <div className="a-lists">
                <a href="#">Instagram</a>
                <a href="#">Linkedin</a>
                <a href="#">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
