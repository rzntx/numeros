const frm = document.querySelector("form")
const sequencia = document.querySelector("#outResp")


let numeros = []
frm.inEscolha.readOnly = true
let saida = []
let ocultos = []
escolha = ""
frm.inEscolha.value = ""
frm.btConfirmar.disabled = true
frm.iniciar.focus()




frm.addEventListener("submit", (e) => {
    e.preventDefault()
    frm.btConfirmar.disabled = false
    numeros = []
    saida = []
    ocultos = []
    escolha = ""
    frm.inEscolha.value = escolha
    frm.emojiOk.className = "oculta"
    frm.emojiNo.className = "oculta"
    let num = Math.floor((Math.random() * 100) + 1)
    if(num > 91) {
        num = num - (num % 91)
    }
    for(let i = 0; i < 10; i++) {
        numeros.push(num)
        num++
    }

   
    const oculto1 = Math.floor(Math.random() * numeros.length)
    ocultos.push(oculto1)
    const oculto2 = Math.floor(Math.random() * numeros.length)
    ocultos.push(oculto2)
    const oculto3 = Math.floor(Math.random() * numeros.length)
    ocultos.push(oculto3)

    
   

    for(let i = 0; i < numeros.length; i++) {
        saida.push(numeros[i])
    }
    

   
    saida[oculto1] = "_"
    saida[oculto2] = "_"
    saida[oculto3] = "_"

    sequencia.innerText = saida.join(", ")
})

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
            sequencia.innerText = saida.join(", ")
            frm.inEscolha.value = ""
            escolha = ""
            frm.emojiOk.className = "exibe"
            frm.emojiNo.className = "oculta"
            
            if(saida.toString() == numeros.toString()) {
                frm.btConfirmar.disabled = true
                frm.iniciar.focus()
                escolha = ""
                frm.inEscolha.value = ""
               
            }

        }

        else {
            frm.emojiNo.className = "exibe"
            frm.emojiOk.className = "oculta"
            escolha = ""
            frm.inEscolha.value = ""
        }
        
        
    })
    
    frm.btLimpar.addEventListener("click", () => {
        frm.inEscolha.value = ""
        escolha = ""
        frm.emojiOk.className = "oculta"
        frm.emojiNo.className = "oculta"
    })
