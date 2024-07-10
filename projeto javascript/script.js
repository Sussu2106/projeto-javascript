// const url = 'https://668dc951099db4c579f3e974.mockapi.io/api/receitinhas_de_carinho/receitinhas';

//     let receitaEmEdicaoId = null; 
    
//     document.addEventListener('DOMContentLoaded', () => {
//         carregarReceitas();
//     });

//     // Carregar todas as receitas
//     async function carregarReceitas() {
//         try {
//             const res = await fetch(url);
//             if (!res.ok) {
//                 throw new Error('Erro ao carregar receitas');
//             }
//             const receitas = await res.json();
//             mostrarReceitas(receitas);
//         } catch (erro) {
//             console.error('Erro ao carregar receitas:', erro);
//         }
//     }

//     // Preencher dados da receita selecionada para edição
//     function carregarDadosReceitasParaEditar(id, titulo, historia, ingredientes, modo) {
//         // const inputId = document.querySelector('#id-receita');
//         const inputTitulo = document.querySelector('#nome-receita');
//         const inputHistoria = document.querySelector('#historia-receita');
//         const inputIngredientes = document.querySelector('#ingredientes');
//         const inputModo = document.querySelector('#preparo-receita');

//         // inputId.value = id;
//         inputTitulo.value = titulo;
//         inputHistoria.value = historia;
//         inputIngredientes.value = ingredientes;
//         inputModo.value = modo;

//         // receitaEmEdicaoId = id; 


//     // const formReceita = document.querySelector('#form-receita');
//     // formReceita.addEventListener('submit', async (evento) => {
//     //     evento.preventDefault();
//     //     if (receitaEmEdicaoId) {
//     //         await editarReceita(receitaEmEdicaoId);
//     //     } else {
//     //         await criarReceita();
//     //     }
//     // });

//     // Criar uma nova receita
//     async function criarReceita() {
//         const inputTitulo = document.querySelector('#nome-receita').value;
//         const inputHistoria = document.querySelector('#historia-receita').value;
//         const inputIngredientes = document.querySelector('#ingredientes').value;
//         const inputModo = document.querySelector('#preparo-receita').value;

//         const novaReceita = {
//             "titulo": inputTitulo,
//             "historia": inputHistoria,
//             "ingredientes": inputIngredientes,
//             "modo": inputModo
//         };

//         try {
//             const res = await fetch(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(novaReceita),
//             });

//             if (!res.ok) {
//                 throw new Error('Erro ao adicionar receita');
//             }

//             alert('Receita adicionada com sucesso');
//             limparCamposFormulario();
//             carregarReceitas();
//         } catch (erro) {
//             console.error('Erro ao criar receita:', erro);
//         }
//     }

//     // Editar uma receita existente
//     async function editarReceita(id) {
//         const inputTitulo = document.querySelector('#nome-receita').value;
//         const inputHistoria = document.querySelector('#historia-receita').value;
//         const inputIngredientes = document.querySelector('#ingredientes').value;
//         const inputModo = document.querySelector('#preparo-receita').value;

//         const receitaEditada = {
//             titulo: inputTitulo,
//             historia: inputHistoria,
//             ingredientes: inputIngredientes,
//             modo: inputModo
//         };

//         try {
//             const res = await fetch(`${ url } / ${ id }`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(receitaEditada),
//             });

//             if (!res.ok) {
//                 throw new Error('Erro ao editar receita');
//             }

//             alert('Receita editada com sucesso');
//             limparCamposFormulario();
//             carregarReceitas();
//             // receitaEmEdicaoId = null; // Limpar o ID da receita em edição
//         } catch (erro) {
//             console.error('Erro ao editar receita:', erro);
//         }
//     }

//     // Excluir uma receita
//     async function excluirReceita(id) {
//         try {
//             const res = await fetch(`${ url } / ${ id }`, {
//                 method: 'DELETE',
//             });

//             if (!res.ok) {
//                 throw new Error('Erro ao excluir receita');
//             }

//             alert('Receita excluída com sucesso');
//             carregarReceitas();
//         } catch (erro) {
//             console.error('Erro ao excluir receita:', erro);
//         }
//     }

//     // Limpar campos do formulário de adicionar ou editar
//     function limparCamposFormulario() {
//         document.querySelector('#id-receita').value = '';
//         document.querySelector('#nome-receita').value = '';
//         document.querySelector('#historia-receita').value = '';
//         document.querySelector('#ingredientes').value = '';
//         document.querySelector('#preparo-receita').value = '';
//     }

//     // Mostrar todas as receitas na tabela
//     function mostrarReceitas(receitas) {
//         const listaReceitas = document.querySelector('#receita-por-id');
//         listaReceitas.innerHTML = '';
//         receitas.forEach(receita => {
//             listaReceitas.innerHTML += `
//         <tr>
//             <td>${receita.id}</td>
//             <td>${receita.titulo}</td>
//             <td>${receita.historia}</td>
//             <td>${receita.ingredientes}</td>
//             <td>${receita.modo}</td>
//             <td>
//                 <button onclick="carregarDadosReceitasParaEditar('${receita.id}', '${receita.titulo}', '${receita.historia}', '${receita.ingredientes}', '${receita.modo}')">Editar</button>
//                 <button onclick="excluirReceita('${receita.id}')">Excluir</button>
//             </td>
//         </tr>
//         `;
//         });
//     }
// }

// const formAdd = document.querySelector('#form-adicionar')
// formAdd.addEventListener('submit', evento => {
//     evento.preventDefault()
//     criarReceita()
// })

// const formEditar = document.querySelector('#form-editar')
// formEditar.addEventListener('submit', evento => {
//     evento.preventDefault()
//     editarReceita()
// })

// carregarReceitas()









url = 'https://668dc951099db4c579f3e974.mockapi.io/api/receitinhas_de_carinho/receitinhas'

async function carregarReceitas() {
    const res = await fetch(url)
    const receitas = await res.json()
    mostrarReceitas(receitas)
}

async function criarReceitas(){
    const inputTitulo = document.querySelector('#nome-receita')
    const inputHistoria = document.querySelector('#historia-receita')
    const inputIngredientes = document.querySelector('#ingredientes')
    const inputModo = document.querySelector('#preparo-receita')
    let titulo = inputTitulo.value
    let historia = inputHistoria.value
    let ingredientes = inputIngredientes.value
    let modo = inputModo.value
    try {
        const receita = {
            "titulo": inputTitulo,
            "historia": inputHistoria,
            "ingredientes": inputIngredientes,
            "modo":inputModo
        }
        const detalhesRequisicao = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(receita)
        }
        const res = await fetch(url, detalhesRequisicao)
        alert('Tarefa adicionada com sucesso')
        carregarHistorias()
        inputTitulo.value = ''
        inputHistoria.value = ''
        inputIngredientes.value = ''
        inputModo.value = ''

    } catch (erro) {
        console.error(erro)
    }
}

async function carregarDadosParaEditar(id) {
    const idReceita = document.querySelector('#id-receita')
    idReceita.value = id;
       carregarDadosParaEditar.addEventListener("click", evento => 
        criarReceitas()
       )
}


function mostrarHistorias(historias) {
    const listaTasks = document.querySelector('#lista-historias')
    listaTasks.innerHTML = ''
    historias.forEach(historia => {
        listaTasks.innerHTML += `
        <tr>
            <td>${historia.id}</td>
            <td>${historia.descricao}</td>
            <td>${historia.likes}</td>
            <td>
                <button onclick="carregarDadosHistoriaParaEditar(${historia.id}, '${historia.descricao}')">Editar</button>
                <button onclick="excluirHistoria(${historia.id})">Excluir</button>
            </td>
        </tr>
        `
    });
}

const formAdd = document.querySelector('#form-adicionar')
formAdd.addEventListener('submit', evento => {
    evento.preventDefault()
    criarHistoria()
})

const formEditar = document.querySelector('#form-editar')
formEditar.addEventListener('submit', evento => {
    evento.preventDefault()
    editarHistoria()
})

carregarHistorias()
