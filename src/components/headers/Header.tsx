

const Header = () => {
  return (
    <header id="top">
        <div className="container">
            <div className="form-element hidden-xs pull-left">
            <form action="#" method="get" className="form-inline">
                <input type="text" name="search" className="form-control" placeholder="Search" />
                <button type="submit" className="search-btn">
                <i className="icon-magnifier"></i>
                </button>
            </form>
            </div>
            {/* End of .form-element */}
            <div className="contact-info clearfix">
            <ul className="pull-right list-inline">
                <li>
                <a href="tel:012.345.1234">
                    <i className="icon-telephone"></i>012.345.1234
                </a>
                </li>
                <li>
                <a href="mailto:info@company.com">
                    <i className="icon-envelope"></i>info@company.com
                </a>
                </li>
            </ul>
            </div>
            {/* End of .contact-info */}
        </div>
</header>
  )
}

export default Header