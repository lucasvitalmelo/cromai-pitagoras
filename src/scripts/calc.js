function calc() {
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
}

export default calc;