import "./App.css";
import Calculate from "./components/Calculate";
import NameApp from "./components/NameApp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  
  return (
    <div className="background text-light d-flex flex-column justify-content-between">
      <Navbar />
      <div className="container">
        <div className="row">
          <NameApp/>
          <Calculate/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
