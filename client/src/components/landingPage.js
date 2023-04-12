import Start from "../container/Start/Start";
import Chef from "../container/Chef/Chef";
import Footer from "../container/Footer/Footer";
import Header from "../container/Header/Header"
import DecoVideo from "../container/DecoVideo/DecoVideo"
import Navbar from "../components/Navbar/Navbar";

const LandingPage = () => (
    <div>
      <Navbar />
      <Header />
      <Start />
      <DecoVideo />
      <Chef />
      <Footer />
    </div>
  );
  
  export default LandingPage;  