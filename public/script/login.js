function transformarEmJson(){
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value

    dados = {
        email: email,
        senha: senha
    }
}

const botaoEnviar = document.getElementById("botao")

botaoEnviar.addEventListener("click", function(e){
    e.preventDefault()
    transformarEmJson()
})