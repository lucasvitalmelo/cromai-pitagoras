import calc from "../scripts/calc";

function InputTp () {
  return(
    <div className="col d-flex align-items-center justify-content-center">
    <form className="mb-2" onSubmit="{calcular}">
      <img className="img-fluid" src="assets/Group 4.svg" alt="" />
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
          value={cat2}
          onChange={(event)=> setCat2(event.target.value)}
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
          value={hypot}
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
  )
}

export default InputTp;