
import Header from "./Header"
import NavBar from "./NavBar"

const HeaderWraper = () => {
  return (
    <>
      <div className="header-wrapper">
        <Header />
        <NavBar />
      </div>  
      <div className="clients">
        {/* clients item slider */}
        <div className="container">
        <div className="clients-logos owl-carousel owl-theme">
            <div className="item">
            <img src="images/client1.png" alt="partners logo" className="img-responsive" />
            </div>
            {/* End of .item */}
            <div className="item">
            <img src="images/client2.png" alt="partners logo" className="img-responsive" />
            </div>
            {/* End of .item */}
            <div className="item">
            <img src="images/client3.png" alt="partners logo" className="img-responsive" />
            </div>
            {/* End of .item */}
            <div className="item">
            <img src="images/client4.png" alt="partners logo" className="img-responsive" />
            </div>
            {/* End of .item */}
            <div className="item">
            <img src="images/client5.png" alt="partners logo" className="img-responsive" />
            </div>
            {/* End of .item */}
            <div className="item">
            <img src="images/client6.png" alt="partners logo" className="img-responsive" />
            </div>
            {/* End of .item */}
            <div className="item">
            <img src="images/client1.png" alt="partners logo" className="img-responsive" />
            </div>
            {/* End of .item */}
            <div className="item">
            <img src="images/client2.png" alt="partners logo" className="img-responsive" />
            </div>
            {/* End of .item */}
            {/* to add more items copy and paste one of
            the items underneath the last item */}
        </div>
        {/* End of .partner_logos */}
        </div>
        {/* end clients item slider */}
    </div>


    </>  
  )
}

export default HeaderWraper