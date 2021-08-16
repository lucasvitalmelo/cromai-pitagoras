import "./index.css"
import React, { useState } from "react";

function Calculate () {

  const [cat1, setCat1] = useState();
  const [cat2, setCat2] = useState();
  const [hypot, setHypot] = useState();

  function calcular(event) {
    event.preventDefault();

    const cat1pow = Math.pow(cat1, 2) 
    const cat2pow = Math.pow(cat2, 2) 

    const sum  = cat1pow + cat2pow

    const hypotSqrt = Math.sqrt(sum).toFixed(2)

    setHypot(hypotSqrt)
  }


  return(
    <div className="col d-flex align-items-center justify-content-center">
    <form className="mb-2" onSubmit={calcular}>
      <img className="img-fluid" src="assets/Group 4.svg" alt="" />
      <div className="input-group mt-3">
        <input
          value={cat1}
          onChange={(event) => setCat1(event.target.value)}
          type="number"
          className="inputCat bg-transparent form-control text-light text-center"
          placeholder="Digite o cateto adjacente"
          required
        />
      </div>
      <div className="input-group mt-3">
        <input
          value={cat2}
          onChange={(event)=> setCat2(event.target.value)}
          type="number"
          className="inputCat bg-transparent form-control text-light text-center"
          placeholder="Digite o cateto oposto"
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
          value={hypot}
          readOnly
          type="text"
          className="inputCat bg-transparent form-control text-light text-center"
          placeholder="Hipotenusa"
        />
      </div>
    </form>
  </div>
  );
}

export default Calculate;