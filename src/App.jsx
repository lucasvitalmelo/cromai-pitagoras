import "./App.css";
import InputTp from "./components/InputTp";
import NameApp from "./components/NameApp";
import Navbar from "./components/Navbar";

function App() {
  
  return (
    <div className="background text-light">
      <Navbar />
      <main>
        <div className="container">
          <div className="row">
            <NameApp/>
            <InputTp/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
