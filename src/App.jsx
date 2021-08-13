import { useState } from "react";
import "./App.css";

function App() {
  const [cat1, setCat1] = useState();
  const [cat2, setCat2] = useState();
  const [hypot, setHypot] = useState();

  function calcular(event) {
    event.preventDefault();

    // const hypot = document.getElementById("hypot");
    // const cat1 = document.getElementById("cat1");
    // const cat2 = document.getElementById("cat2");

    // const cat1pow = Math.pow(cat1.value, 2);
    // const cat2pow = Math.pow(cat2.value, 2);

    // const somaCatetos = cat1pow + cat2pow;

    // const hipotenusa = Math.sqrt(somaCatetos);

    // hypot.value = hipotenusa.toFixed(2);
  }

  return (
    <div className="background text-light">
      <header>
        <nav className="navbar navbar-dark bg-transparent">
          <div className="container">
            <a className="navbar-brand fs-5 font-oxanium" href="#">
              <img
                src="icon/LVlogo.svg"
                alt="Logo LV"
                width="79"
                height="102"
                className="d-inline-block me-5"
              />
              Lucas Vital
            </a>
            <div>
              <a
                className="link-light me-3 fs-5"
                href="https://www.linkedin.com/in/lucas-vital-98580518a/"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                className="link-light fs-5"
                href="https://github.com/lucasvitalmelo"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className="container">
          <div className="row">
            <div
              className="
              meio
              col-md-6
              d-flex
              align-items-center
              justify-content-center
            "
            >
              <section className="text-end me-5">
                <h1 className="font-redhat">Teorema de Pitágoras</h1>
                <h3>_____________________________________</h3>
                <p className="font-reenie fs-3">
                  Aqui está um pouco do meu desenvolvimento Web.
                </p>
              </section>
            </div>
            <div className="col d-flex align-items-center justify-content-center">
              <form className="mb-2" onSubmit={calcular}>
                <img className="img-fluid" src="icon/Group 4.svg" alt="" />
                <div className="input-group mt-3">
                  <input
                    id="cat1"
                    value={cat1}
                    onChange={(event) => setCat1(event.target.value)}
                    name="cat2"
                    type="number"
                    className="bg-transparent form-control text-light text-center"
                    placeholder="Digite o cateto adjacente  "
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    required
                  />
                </div>
                <div className="input-group mt-3">
                  <input
                    id="cat2"
                    name="cat2"
                    type="number"
                    className="bg-transparent form-control text-light text-center"
                    placeholder="Digite o cateto oposto"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    required
                  />
                </div>
                <div className="input-group mt-3">
                  <button
                    className="bg-transparent btn btn-outline-light text-light"
                    type="submit"
                    id="button-addon1"
                  >
                    Calcular
                  </button>
                  <input
                    id="hypot"
                    readonly
                    type="text"
                    className="bg-transparent form-control text-light text-center"
                    placeholder="Hipotenusa"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
