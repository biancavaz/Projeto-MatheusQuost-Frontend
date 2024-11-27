

document.getElementById('botaoVerUsers').addEventListener('click', () => {
    fetch(url)
    .then(response => {
        if(!response.ok) {
            throw new Error('erro ao carregar usuários')
        } else {
            return response.json();
        }
    })
    .then(data => {
        const corpodaTabela = document.getElementById('corpodaTabela');
        corpodaTabela.innerHTML = ''; 

        if( data.length === 0) {
            corpodaTabela.innerHTML = `
                <tr> 
                    <td colspan="4"> Nenhum usuátio encontrado.</td> 
                </tr>
            `;

            return;
        }

        data.forEach(user  => {
            const row = `
                <tr>
                    <td> ${user.id} </td>
                    <td> ${user.nome} </td>
                    <td> ${user.email}</td>
                </tr>

            `;

            corpodaTabela.innerHTML += row
        })
    })

    .catch(error => {
        console.log('Erro', error);
        alert('Erro ao carregar usuários, verifique a api')
    })
})