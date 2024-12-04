
const url = 'http://10.129.226.96:8081/select'

const corpoTabela = document.getElementById("corpodaTabela");

async function chamarAPI() {
    try {
        const res = await fetch(url);

        if (res.status === 200) {
            const usuarios = await res.json();
            console.log(usuarios);

            // Para cada usuário, gerar HTML como string
            usuarios.forEach(usuario => {
                const htmlString = `
                    <tr>
                        <td>${usuario.nome} </td>
                        <td class="flex">${usuario.email}
                            <div> 
                                <button onclick="deletarUser(${usuario.id})"> deletar </button> 
                                <button> editar </button>
                            </div> 
                        </td>
                       
                    </tr>
                `;

                const tempDiv = document.createElement("tr");
                tempDiv.innerHTML = htmlString;

                // Criar um contêiner temporário para armazenar o HTML
                const tabela = document.getElementById('corpodaTabela')
                tabela.appendChild(tempDiv);

                
            });
        } else {
            console.error("Erro ao buscar dados:", res.status);
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
    }
}

// Chamar a função
chamarAPI();


async function deletarUser (id){
    const urlDel = `http://10.129.226.96:8081/delete/${id}`

    fetch(urlDel, {
        method: "DELETE"
    })
    .then(response =>{
        window.location.href = window.location.href

    })
}

// fazer o de editar