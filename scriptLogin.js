
const url = 'http://localhost:8081/login'

document.getElementById('loginUsuarioform').addEventListener('submit', function (event) {
    event.preventDefault;

    //coleta os dados do formulário
    const nomeUser = document.getElementById('nomeUser').value;
    const senha = document.getElementById('senha').value;

    //requisição post para a API

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        
        body: JSON.stringify({"email":nomeUser, "senha":senha}), // converte dados para json
    })

    .then(response => {
        if(response.ok){
            return response.text(); //converte a resposta em texto
        } else {
            throw new Error('Credenciais Inválidas') 
        }
    })

    .then(data => {
        document.getElementById('mensagem').textContent = data;
        document.getElementById('mensagem').style.color = 'green';

    })

    .catch(error => {
        document.getElementById('mensagem').textContent = error.message
        document.getElementById('mensagem').style.color - 'red'
    })
})
