const Blogs = () => {
  return (
    <section className="bg-white o-hidden blogs">
    <div className="container">
      {/* section title */}
      <h2 className="b-clor">Latest Blogs</h2>
      <hr className="dark-line" />
      {/* end section title */}
      <div className="row">
        {/* blog left content */}
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <div className="blog-left">
            <img src="images/blog.jpg" alt="blog" className="img-responsive blog-img" />
            <div className="box-green-border">
              <span>2 December, 2017 - Business category</span>
              <a href="blog-details.html">Website Template for Digital Marketing Agency</a>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt. </p>
            </div>
          </div>
        </div>
        {/* end blog left text */}
        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
          <div className="row box-green-border-container">
            {/* blog features box */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="box-green-border">
                <span className="small-text">22 October, 2017 - Design Category</span>
                <a href="blog-details.html">For Start-up Companies</a>
                <p>Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
              </div>
            </div>
            {/* end blog features box */}
            {/* blog features box */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="box-green-border">
                <span className="small-text">20 June, 2017 - Branding Category</span>
                <a href="blog-details.html">5 Ways of Branding</a>
                <p>Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
              </div>
            </div>
            {/* end blog features box */}
          </div>
          <div className="row">
            {/* blog features box */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="box-green-border">
                <span>2 May, 2017 - Business Category</span>
                <a href="blog-details.html">Essential Tips for New Entrepreneurs</a>
                <p>Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
              </div>
            </div>
            {/* end blog features box */}
            {/* blog features box */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="box-green-border">
                <span>3 April, 2017 - UX Category</span>
                <a href="blog-details.html">How to appear in Google’s #1 page</a>
                <p>Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
              </div>
            </div>
            {/* end blog features box */}
          </div>
        </div>
      </div>
      {/* read more blog button */}
      <div><a href="blog.html" className="btn btn-fill full-width">read more blog</a></div>
      {/* end read more blog button */}
    </div>
  </section>
  )
}

export default Blogs