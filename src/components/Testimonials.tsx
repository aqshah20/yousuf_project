

const Testimonials = () => {
  return (
    <section className="bg-white testimonial">
    <div className="container">
      {/* section title */}
      <h2 className="b-clor">Meet Our Happy Customers</h2>
      <hr className="dark-line" />
      {/* end section title */}
      <div className="row grid">
        <div className="col-md-6 col-lg-4 grid-item">
          <div className="content text-left">
            <div className="img-container"><img src="images/google-logo.png" className="img-responsive" alt="google logo" /></div>
            <div className="clients-rating">
              <div className="clients-rating-top" style={{ width: '85%' }}>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
              </div>
              <div className="clients-rating-bottom">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
              </div>
            </div>
            {/* End of .clients-rating */}
            <h5>Excellent Service</h5>
            <p className="regular-text">Your brand is how your customers see your business. It’s shaped by the way you represent yourself – professional, socially, and visually. It’s what makes you unique.</p>
            <div className="user-info"><span>Mark Harning,</span> Pixelweb</div>
          </div>
          {/* End of .content */}
        </div>
        {/* End of .col-md-4 */}
        <div className="col-md-6 col-lg-4 grid-item">
          <div className="content text-left">
            <div className="img-container"><img src="images/facebook-logo.png" className="img-responsive" alt="facebook logo" /></div>
            <div className="clients-rating">
              <div className="clients-rating-top" style={{ width: '100%' }}>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
              </div>
              <div className="clients-rating-bottom">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
              </div>
            </div>
            {/* End of .clients-rating */}
            <h5>Excellent Support</h5>
            <p className="regular-text">Amazing theme and top-class support, as I’m a beginner. They helped me above genuine care for you to enjoy and move The theme and author!</p>
            <div className="user-info"><span>Sarah,</span> Tech Support</div>
          </div>
          {/* End of .content */}
        </div>
        {/* End of .col-md-4 */}
        <div className="col-md-6 col-lg-4 grid-item">
          <div className="content text-left">
            <div className="img-container"><img src="images/yelp-logo.png" className="img-responsive" alt="yelp logo" /></div>
            <div className="clients-rating">
              <div className="clients-rating-top" style={{ width: '85%' }}>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
              </div>
              <div className="clients-rating-bottom">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
              </div>
            </div>
            {/* End of .clients-rating */}
            <h5>Great Communication</h5>
            <p className="regular-text">Seriously, WOW! I’ve purchased a ton of stuff on here. This theme is the cleanest and easiest to use. I am happy with that. Well done folks.</p>
            <div className="user-info"><span>Johnathan Doe,</span> On-net Media</div>
          </div>
          {/* End of .content */}
        </div>
        {/* End of .col-md-4 */}
      </div>
      {/* End of .row */}
      <div><a href="customer-reviews.html" className="btn btn-fill full-width">Discover more</a></div>
    </div>
    {/* End of .container */}
  </section>
  )
}

export default Testimonials