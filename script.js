

function calcular(){
    event.preventDefault()
    const hypot = document.getElementById("hypot")
    const cat1 = document.getElementById("cat1")
    const cat2 = document.getElementById("cat2")


    const cat1pow = Math.pow(cat1.value, 2)
    const cat2pow = Math.pow(cat2.value, 2)

    const somaCatetos = cat1pow + cat2pow

    const hipotenusa = Math.sqrt(somaCatetos)

    hypot.value = hipotenusa.toFixed(2)
}

