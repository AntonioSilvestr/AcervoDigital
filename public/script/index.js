function irParaLogin(){
    window.location.href = "/entrar"
}

function irParaCadastro(){
    window.location.href = "/cadastro"
}

const botaoIrLogin = document.getElementById('button')
botaoIrLogin.addEventListener('click', irParaLogin)

const botaoIrCadastro = document.getElementById('cadastro')
botaoIrCadastro.addEventListener('click', irParaCadastro)

