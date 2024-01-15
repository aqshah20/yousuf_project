import Blogs from "./components/Blogs"
import Footer from "./components/Footer"
import Testimonials from "./components/Testimonials"
import CLients from "./components/clients/CLients"
import HeaderWraper from "./components/headers/HeaderWraper"

const App = () => {
  return (
    <>
      <HeaderWraper />
      <CLients />
      <Testimonials />
      <Blogs />
      <Footer />
    </>
  )
}

export default App