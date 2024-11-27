//document.getElementById('botaoLogar').addEventListener('click', function () {
//    window.location.href = 'paginaUsuarios.html';
//});

//terminar de ver conexões banco


const url = 'http://localhost:8081/login'

document.getElementById('botaoLogar').addEventListener('click', function () {
    event.preventDefault;

    //coleta os dados do formulário
    const nomeUser = document.getElementById('nomeUser').value;
    const senha = document.getElementById('senha').value;

    //requisição post para a API

    fetch(url, 
    {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        
        body: JSON.stringify({"email":nomeUser, "senha":senha}), // converte dados para json
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(err => {
                console.log('Erro:', err);
                throw new Error(err.message || 'Erro desconhecido');
            });
        }
        return response.json(); 
    })

    .then(data => {
        console.log("data", data)
        if (data.ok){
            window.location.href = 'paginaUsuarios.html';
        }
        else{
            document.getElementById('mensagem').textContent = data.message;

        }

        // if(data.ok){
        //     return response.text(); //converte a resposta em texto
        // } else {
        //     throw new Error('Credenciais Inválidas') 
        // }
        // document.getElementById('mensagem').textContent = data;
        // document.getElementById('mensagem').style.color = 'green';

    })

    .catch(error => {
        document.getElementById('mensagem').textContent = error.message
        document.getElementById('mensagem').style.color - 'red'
    })
})

