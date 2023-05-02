const frm = document.querySelector("form")
const sequencia = document.querySelector("#outResp")
const botaoLimpar = document.querySelector("#btLimpar")
const botaoConfirmar = document.querySelector("#btConfirmar")

let numeros = []
frm.inEscolha.readOnly = true

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    botaoLimpar.disabled = false;
    botaoConfirmar.disabled = false;
    numeros = []
    frm.inEscolha.value = ""
    frm.emojiOk.className = "oculta"
    frm.emojiNo.className = "oculta"
    let num = Math.floor((Math.random() * 100) + 1)
    for(let i = 0; i < 10; i++) {
        numeros.push(num)
        num++
    }

    const oculto1 = Math.floor(Math.random() * numeros.length)
    const oculto2 = Math.floor(Math.random() * numeros.length)
    const oculto3 = Math.floor(Math.random() * numeros.length)
    let ocultos = []
    ocultos[0] = numeros[oculto1]
    ocultos[1] = numeros[oculto2]
    ocultos[2] = numeros[oculto3]

    let alternativas = []
    for(let i = 0; i < 3; i++){
            let k = Math.floor(Math.random() * numeros.length)
            alternativas.push(numeros[k])
            alternativas.push(ocultos[i])
    }
    let saida = []
    for(let i = 0; i < numeros.length; i++) {
        saida.push(numeros[i])
    }

    saida.splice(oculto1, 0)
    saida[oculto1] = "_"
    saida.splice(oculto2, 0)
    saida[oculto2] = "_"
    saida.splice(oculto3, 0)
    saida[oculto3] = "_"

    sequencia.innerText = saida.join(", ")
    
    let escolha = ""

    frm.btUm.addEventListener("click", () => {
        let um = frm.btUm.value
        escolha += um
        frm.inEscolha.value = escolha
        frm.emojiOk.className = "oculta"
        frm.emojiNo.className = "oculta"

    })

    frm.btDois.addEventListener("click", () => {
        let dois = frm.btDois.value
        escolha += dois
        frm.inEscolha.value = escolha
        frm.emojiOk.className = "oculta"
        frm.emojiNo.className = "oculta"

    })

    frm.btTres.addEventListener("click", () => {
        let tres = frm.btTres.value
        escolha += tres
        frm.inEscolha.value = escolha
        frm.emojiOk.className = "oculta"
        frm.emojiNo.className = "oculta"

    })

    frm.btQuatro.addEventListener("click", () => {
        let quatro = frm.btQuatro.value
        escolha += quatro
        frm.inEscolha.value = escolha
        frm.emojiOk.className = "oculta"
        frm.emojiNo.className = "oculta"

    })

    frm.btCinco.addEventListener("click", () => {
        let cinco = frm.btCinco.value
        escolha += cinco
        frm.inEscolha.value = escolha
        frm.emojiOk.className = "oculta"
        frm.emojiNo.className = "oculta"

    })

    frm.btSeis.addEventListener("click", () => {
        let seis = frm.btSeis.value
        escolha += seis
        frm.inEscolha.value = escolha
        frm.emojiOk.className = "oculta"
        frm.emojiNo.className = "oculta"

    })

    frm.btSete.addEventListener("click", () => {
        let sete = frm.btSete.value
        escolha += sete
        frm.inEscolha.value = escolha
        frm.emojiOk.className = "oculta"
        frm.emojiNo.className = "oculta"

    })

    frm.btOito.addEventListener("click", () => {
        let oito = frm.btOito.value
        escolha += oito
        frm.inEscolha.value = escolha
        frm.emojiOk.className = "oculta"
        frm.emojiNo.className = "oculta"

    })

    frm.btNove.addEventListener("click", () => {
        let nove = frm.btNove.value
        escolha += nove
        frm.inEscolha.value = escolha 
        frm.emojiOk.className = "oculta"
        frm.emojiNo.className = "oculta"

    })

    frm.btZero.addEventListener("click", () => {
        let zero = frm.btZero.value
        escolha += zero
        frm.inEscolha.value = escolha
        frm.emojiOk.className = "oculta"
        frm.emojiNo.className = "oculta"

    })

    frm.btConfirmar.addEventListener("click", () => {
        let resposta = Number(escolha)
        if(numeros.includes(resposta) && !saida.includes(resposta)) {
            let indice = numeros.indexOf(resposta)
            saida[indice] = resposta
            saida.slice((indice + 1), 0)
            sequencia.innerText = saida.join(", ")
            frm.inEscolha.value = ""
            escolha = ""
            frm.emojiOk.className = "exibe"
            frm.emojiNo.className = "oculta"
            frm.inEscolha.value = ""

        }

        else {
            frm.emojiNo.className = "exibe"
            frm.emojiOk.className = "oculta"
            escolha = ""
            frm.inEscolha.value = ""
        }
        
        if(!saida.includes("_") || !saida.includes("_,") {
            botaoLimpar.disabled = true;
            botaoConfirmar.disabled = true;
        }
    })
    
    frm.btLimpar.addEventListener("click", () => {
        frm.inEscolha.value = ""
        escolha = ""
        frm.emojiOk.className = "oculta"
        frm.emojiNo.className = "oculta"
    })
    
    

   
       
    
})

