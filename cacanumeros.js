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

    const oculto = Math.floor(Math.random() * numeros.length)

    let saida = numeros
    saida.splice(oculto, 0)
    saida[oculto] = "_"

    sequencia.innerText = saida.join(" ")
    numeros = []

})