import React from 'react';


function Navigation() {
  return (<>
   {/* <!-- most top information --> */}
        <header id="top">
            <div className="container">
                <div className="form-element hidden-xs pull-left">
                    <form action="#" method="get" className="form-inline">
                        <input type="text" name="search" className="form-control" placeholder="Search"/>
                        <button type="submit" className="search-btn"><i className="icon-magnifier"></i></button>
                    </form>
                </div>
                {/* <!-- End of .form-element --> */}
                <div className="contact-info clearfix">
                    <ul className="pull-right list-inline">
                        <li>
                            <a href="tel:012.345.1234"><i className="icon-telephone"></i>012.345.1234</a>
                        </li>
                        <li>
                            <a href="mailto:info@company.com"><i className="icon-envelope"></i>info@company.com</a>
                        </li>
                    </ul>
                </div>
                {/* <!-- End of .contact-info --> */}
            </div>
        </header>
        {/* <!-- end most top information -->
        <!--navigation--> */}
   <div className="container no-padding">
        <nav id="navbar-main" className="navbar main-menu navbar-expand-md">
                {/* <!--Brand and toggle get grouped for better mobile display--> */}
           <div className="navbar-header">
                    <button type="button" className="navbar-toggler collapsed" data-bs-toggle="collapse" data-bs-target="#navbar-collapse-1" aria-expanded="false"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                    <a className="navbar-brand" href="index.html"><img src="images/logo.png" alt="Brand" className="img-responsive" /></a>
                </div>
            {/* <!--Collect the nav links, and other content for toggling--> */}
            <div className="collapse navbar-collapse" id="navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown not-relative active">
                        <a href="services.html" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Services </a>
                        <div className="dropdown-menu dropdown-megamenu">
                            <ul className="megamenu">
                                <li>
                                    <ul className="dropdown-submenu clearfix">
                                        <li className="submenu-heading">Design</li>
                                        <li><a href="logo-and-branding.html"><i className="icon-palette"></i> Logo &amp; Branding</a></li>
                                        <li><a href="website-design.html"><i className="icon-laptop-phone"></i> Website Design</a></li>
                                        <li><a href="mobile-app-design.html"><i className="icon-phone"></i> Mobile App Design</a></li>
                                        <li><a href="graphic-design.html"><i className="icon-vector"></i> Graphic/Print Design</a></li>
                                        <li><a href="video-production.html"><i className="icon-camera"></i> Video Production</a></li>
                                    </ul>
                                    {/* <!-- End of .dropdown-submenu --> */}
                                </li>
                                <li>
                                    <ul className="dropdown-submenu clearfix">
                                        <li className="submenu-heading">Development</li>
                                        <li><a href="content-management-system.html"><i className="icon-papers"></i> Content Management System</a></li>
                                        <li><a href="mobile-app-development.html"><i className="icon-smartphone-embed"></i> Mobile App Development</a></li>
                                        <li><a href="ecommerce.html"><i className="icon-cart"></i> eCommerce</a></li>
                                    </ul>
                                    {/* <!-- End of .dropdown-submenu --> */}
                                </li>
                                <li>
                                    <ul className="dropdown-submenu clearfix">
                                        <li className="submenu-heading">Online Marketing</li>
                                        <li><a href="search-engine-optimization.html"><i className="icon-magnifier"></i> Search Engine Optimization</a></li>
                                        <li><a href="pay-per-click.html"><i className="icon-select2"></i> Pay-Per-Click</a></li>
                                        <li><a href="email-marketing.html"><i className="icon-envelope-open"></i> Email Marketing</a></li>
                                        <li><a href="display-marketing.html"><i className="icon-news"></i> Display Marketing</a></li>
                                        <li><a href="social-media-marketing.html"><i className="icon-share"></i> Social Media Marketing</a></li>
                                    </ul>
                                    {/* <!-- End of .dropdown-submenu --> */}
                                </li>
                                <li>
                                    <ul className="dropdown-submenu clearfix">
                                        <li className="submenu-heading">Business</li>
                                        <li><a href="digital-strategy.html"><i className="icon-chart-settings"></i> Digital Strategy</a></li>
                                        <li><a href="business-consulting.html"><i className="icon-bubble-user"></i> Business Consulting</a></li>
                                        <li><a href="content-writing.html"><i className="icon-register"></i> Content Writing</a></li>
                                        <li><a href="reporting.html"><i className="icon-chart-growth"></i> Reporting</a></li>
                                    </ul>
                                    {/* <!-- End of .dropdown-submenu --> */}
                                </li>
                                <li>
                                    <ul className="dropdown-submenu clearfix">
                                        <li className="submenu-heading">Technology</li>
                                        <li><a href="domain.html"><i className="icon-magnifier"></i> Domain</a></li>
                                        <li className="active"><a href="hosting.html"><i className="icon-server"></i> Hosting</a></li>
                                        <li><a href="big-data-analysis.html"><i className="icon-pie-chart"></i> Big Data Analysis</a></li>
                                    </ul>
                                    {/* <!-- End of .dropdown-submenu --> */}
                                </li>
                            </ul>
                        </div>
                        {/* <!-- End of .dropdown-menu --> */}
                    </li>
                    <li><a href="pricing.html">Pricing</a></li>
                    <li><a href="portfolio.html">Portfolio</a></li>
                    <li><a href="case-studies.html">Case Studies</a></li>
                    <li className="dropdown">
                        <a href="about.html" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About</a>
                        <div className="dropdown-menu">
                            <ul className="megamenu">
                                <li><a href="about.html">Overview</a></li>                                 <li><a href="team.html">Team</a></li>
                                <li><a href="awards-and-recognitions.html">Awards &amp; Recognition</a></li>
                                <li><a href="career.html">Career</a></li>
                                <li><a href="customer-reviews.html">Customer Reviews</a></li>
                                <li><a href="faqs.html">FAQs</a></li>
                            </ul>
                            {/* <!-- End of .dropdown-menu --> */}
                        </div>
                    </li>
                    <li className="dropdown">
                        <a href="blog.html" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
                        <div className="dropdown-menu">
                            <ul className="megamenu">
                                <li><a href="blog.html">Blog Version 1</a></li>
                                <li><a href="blog-version-2.html">Blog Version 2</a></li>
                            </ul>
                        </div>
                        {/* <!-- End of .dropdown-menu --> */}
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Other</a>
                        <div className="dropdown-menu">
                            <ul className="megamenu">
                                <li><a href="404-error.html">404 Error Page</a></li>
                                <li><a href="search-results.html">Search Results</a></li>
                                <li><a href="under-construction.html">Under Construction</a></li>
                                <li><a href="terms-conditions.html">Terms &amp; Conditions</a></li>
                                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                            </ul>
                        </div>
                        {/* <!-- End of .dropdown-menu --> */}
                    </li>
                    <li className="menu-btn" data-bs-toggle="modal" data-bs-target="#getAQuoteModal"><a className="btn btn-fill" href="#">GET A QUOTE<span className="icon-chevron-right"></span></a></li>
                    
                </ul>
            </div>
        </nav>
        {/* <!--end navigation--> */}
    </div>
    {/* <!--end navigation--> */}
  </>
  )
}

export default Navigation;