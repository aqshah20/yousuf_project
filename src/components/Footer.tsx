

const Footer = () => {
  return (
    <footer id="footer">
    {/* scroll to top */}
    <a className="top-btn page-scroll" href="#top"><span className="icon-chevron-up b-clor regular-text text-center"></span></a>
    {/* end scroll to top */}
    {/* newsletter section */}
    <div className="grey-dark-bg text-center">
      <div className="container">
        <h2>Sign up for our newsletter to stay up to date with tech news!</h2>
        <div className="customise-form">
          <form>
            <div className="row">
              {/* box one */}
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="form-group customised-formgroup">
                  <span className="icon-user"></span>
                  <input className="form-control" placeholder="Name" />
                </div>
              </div>
              {/* end box one */}
              {/* box two */}
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="form-group customised-formgroup">
                  <span className="icon-envelope"></span>
                  <input className="form-control" placeholder="Email" />
                </div>
              </div>
              {/* end box two */}
              {/* box three */}
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div>
                  <input className="btn btn-fill full-width" type="submit" value="SIGN UP FOR FREE!" />
                </div>
              </div>
              {/* end box three */}
            </div>
          </form>
          <p className="light-gray-font-color">Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
        </div>
      </div>
    </div>
    {/* end newsletter section */}
    {/* footer content */}
    <div className="light-ash-bg">
      <div className="container">
        <ul>
          <li>
            {/* footer left content */}
            <ul>
              <li>
                <a href="index.html"><img src="images/small-logo.png" alt="logo" className="img-responsive logo" /></a>
              </li>
              <li>
                <p className="extra-small-text">&copy; 2022</p>
              </li>
              <li>
                <p className="extra-small-text">Your Company LLC.</p>
              </li>
            </ul>
            {/* end footer left content */}
          </li>
          <li>
            {/* footer service list */}
            <ul>
              <li><a className="regular-text text-color-light">Services</a></li>
              <li><a href="services.html#bm-design" className="extra-small-text">Design</a></li>
              <li><a href="services.html#bm-development" className="extra-small-text">Development</a></li>
              <li><a href="services.html#bm-online-marketing" className="extra-small-text">Online Marketing</a></li>
              <li><a href="services.html#bm-business" className="extra-small-text">Business</a></li>
              <li><a href="services.html#bm-technology" className="extra-small-text">Technology</a></li>
            </ul>
            {/* end footer service list */}
          </li>
          <li>
            {/* footer Resources list */}
            <ul>
              <li><a className="regular-text text-color-light">Resources</a></li>
              <li><a href="portfolio.html" className="extra-small-text">Portfolio</a></li>
              <li><a href="case-studies.html" className="extra-small-text">Case Studies</a></li>
              <li><a href="blog.html" className="extra-small-text">Blog</a></li>
            </ul>
            {/* end footer Resources list */}
          </li>
          <li>
            {/* footer Support list */}
            <ul>
              <li><a className="regular-text text-color-light">Support</a></li>
              <li><a href="contact.html" className="extra-small-text">Contact</a></li>
              <li><a href="privacy-policy.html" className="extra-small-text">Privacy Policy</a></li>
              <li><a href="terms-conditions.html" className="extra-small-text">Terms &amp; Conditions</a></li>
            </ul>
            {/* end footer Support list */}
          </li>
          <li className="big-width">
            {/* footer social media list */}
            <ul className="list-inline">
              <li>
                <p className="regular-text text-color-light">Get in Touch</p>
                <ul className="social-links">
                  <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                  <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                  <li><a href="#"><span className="fa fa-google-plus"></span></a></li>
                  <li><a href="#"><span className="fa fa-instagram"></span></a></li>
                  <li><a href="#"><span className="fa fa-pinterest"></span></a></li>
                  <li><a href="#"><span className="fa fa-linkedin"></span></a></li>
                </ul>
              </li>
            </ul>
            {/* end footer social media list */}
          </li>
        </ul>
      </div>
    </div>
    {/* end footer content */}
  </footer>
  /* end footer */
  )
}

export default Footer