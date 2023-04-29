const frm = document.querySelector("form")
const sequencia = document.querySelector("#outResp")

let numeros = []


frm.addEventListener("submit", (e) => {
    e.preventDefault()
    let num = Math.floor((Math.random() * 100) + 1)
    for(let i = 0; i < 10; i++) {
        numeros.push(num)
        num++
    }

    const oculto1 = Math.floor(Math.random() * numeros.length)
    const oculto2 = Math.floor(Math.random() * numeros.length)
    const oculto3 = Math.floor(Math.random() * numeros.length)

    let saida = numeros
    saida.splice(oculto1, 0)
    saida[oculto1] = "_"
    saida.splice(oculto2, 0)
    saida[oculto2] = "_"
    saida.splice(oculto3, 0)
    saida[oculto3] = "_"

    sequencia.innerText = saida.join(" ")
    numeros = []

})