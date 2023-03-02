import NavBar from "./components/NavBar";
import Body1 from "./components/Body1";
import Vision from "./components/Vision";
import MembershipInfo from "./components/MembershipInfo";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Back from "./components/Back";

import Card from "react-bootstrap/Card";

function App() {
  return (
    <>
      <NavBar />
      <Back />
      {/* <Body1 className="items"/> */}
      <Card>
        <Card.Body>
          <Vision />
          <MembershipInfo />
          <div className="container">
            <Testimonial />
          </div>
          <Contact />
        </Card.Body>
      </Card>
          <Footer />
    </>
  );
}

export default App;
