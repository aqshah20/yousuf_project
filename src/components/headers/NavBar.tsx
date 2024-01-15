
const NavBar = () => {
  return (
    <div className="container no-padding">
      <nav id="navbar-main" className="navbar main-menu navbar-expand-md">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggler collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="index.html">
            <img src="images/logo.png" alt="Brand" className="img-responsive" />
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            {/* Add your list items and dropdowns here */}
            {/* Example: */}
            <li className="dropdown not-relative">
              <a href="services.html" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                Services
              </a>
              <div className="dropdown-menu dropdown-megamenu">
                {/* Add dropdown content here */}
              </div>
            </li>
            <li><a href="pricing.html">Pricing</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li><a href="case-studies.html">Case Studies</a></li>
            {/* Add more list items as needed */}
            {/* Example dropdown: */}
            <li className="dropdown">
              <a href="about.html" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                About
              </a>
              <div className="dropdown-menu">
                {/* Add dropdown content here */}
              </div>
            </li>
            {/* Add more list items as needed */}
            {/* ... */}
            <li className="menu-btn" data-bs-toggle="modal" data-bs-target="#getAQuoteModal">
              <a className="btn btn-fill" href="#">
                GET A QUOTE
                <span className="icon-chevron-right"></span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar