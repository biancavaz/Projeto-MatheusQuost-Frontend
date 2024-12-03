
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
                        <td>${usuario.name}</td>
                        <td>${usuario.email}</td>
                    </tr>
                `;

                // Criar um contêiner temporário para armazenar o HTML
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = htmlString;

                // Adicionar o conteúdo ao corpo da tabela usando appendChild
                corpoTabela.appendChild(tempDiv.firstElementChild);
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
