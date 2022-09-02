
let valorSlider = document.querySelector('#slider')
let tamanhoSenha = document.querySelector('#tamanhoSenha')
let senhaGerada = document.querySelector('#campoSenha')

let listaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*!-."

let novaSenha = ""

tamanhoSenha.innerHTML = valorSlider.value

slider.oninput = function () {
    tamanhoSenha.innerHTML = this.value
}

function gerarSenha(){
    senhaGerada.innerHTML = ""
    let valor= parseInt(tamanhoSenha.innerText)
    for (let index = 0; index < valor; index++) {
        senhaGerada.innerHTML += listaCaracteres[Math.floor(Math.random() * listaCaracteres.length)]
    }
    novaSenha = senhaGerada.innerText
}



function copiarSenha() {
    navigator.clipboard.writeText(novaSenha)
    alert("Senha Copiada com Sucesso!")
}