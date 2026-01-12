import { BrowserRouter} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GsapTransition from "./components/GsapTransition";
import { Toaster } from "react-hot-toast";
import {Provider} from "react-redux";
import {store} from "../store/Store"
function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Toaster/>
        <GsapTransition/>
        <Footer/>
      </BrowserRouter>
    </Provider>
      
    </>
  );
}

export default App;
