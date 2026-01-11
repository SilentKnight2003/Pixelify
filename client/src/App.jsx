import { BrowserRouter} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GsapTransition from "./components/GsapTransition";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Toaster/>
        <GsapTransition/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
