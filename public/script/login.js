function transformarEmJson(){
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value

    return dados = {
        email: email,
        senha: senha
    }
}

const botaoEnviar = document.getElementById("botao")

botaoEnviar.addEventListener("click", function(e){
    e.preventDefault()
    enviarObjeto(transformarEmJson())
})


function enviarObjeto(dados) {
    fetch('/entrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
      
    })
      .then(response => {
        console.log(JSON.stringify(dados))
        if (response.ok) {
          window.location.href = "/home"
        } else {
          console.error('Falha ao enviar o objeto.');
        }
      })
      .catch(error => {
    
        console.error('Erro ao enviar o objeto:', error);
      });
  }
