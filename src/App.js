
import NavBar from "./components/NavBar";
import Body1 from "./components/Body1";
import Vision from "./components/Vision";
import MembershipInfo from "./components/MembershipInfo";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {

  return (

    <>
    <NavBar/>
    <Body1 className="items"/>
    <Vision/>
    <MembershipInfo/>
    <div className="container">
      <Testimonial/>
    </div>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
