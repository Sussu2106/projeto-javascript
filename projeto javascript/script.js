// Script.js

const apiUrl = 'https://668dc951099db4c579f3e974.mockapi.io/api/receitas_de_afeto/receitinhas'; // Substitua pela URL da sua API

// Função para fazer uma requisição GET para a API e mostrar as receitas
async function mostrarReceitas() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Erro ao carregar as receitas');
        }
        const receitas = await response.json();
        mostrarCardsDeReceitas(receitas);
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Função para exibir as receitas no HTML
function mostrarCardsDeReceitas(receitas) {
    const listaReceitas = document.querySelector('#receita-por-id');
    listaReceitas.innerHTML = '';

    receitas.forEach(receita => {
        listaReceitas.innerHTML += `
            <div class="card mb-4">
                <div class="card-header">
                    ${receita.titulo}
                </div>
                <div class="card-body">
                    <h5>ID</h5>
                    <p>${receita.id}</p>
                    <h5>História:</h5>
                    <p>${receita.historia}</p>
                    <h5>Ingredientes:</h5>
                    <p>${receita.ingredientes}</p>
                    <h5>Modo de Preparo:</h5>
                    <p>${receita.modo}</p>
                    <button onclick="carregarDadosParaEditar(${receita.id})" class="btn btn-primary">Editar</button>
                    <button onclick="excluirReceita(${receita.id})" class="btn btn-danger" style="background-color: #b8b7a6; border: none;">Excluir</button>
                </div>
            </div>
        `;
    });
}

// Função para carregar dados da receita selecionada para edição
async function carregarDadosParaEditar(id) {
    try {
        const response = await fetch(`${apiUrl}/${id}`);
        if (!response.ok) {
            throw new Error('Erro ao carregar os dados da receita');
        }
        const receitaSelecionada = await response.json();

        document.getElementById('id-receita').value = receitaSelecionada.id;
        document.getElementById('nome-receita').value = receitaSelecionada.titulo;
        document.getElementById('historia-receita').value = receitaSelecionada.historia;
        document.getElementById('ingredientes-receita').value = receitaSelecionada.ingredientes;
        document.getElementById('preparo-receita').value = receitaSelecionada.modo;
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Função para adicionar uma nova receita
document.getElementById('form-adicionar').addEventListener('submit', async function(event) {
    event.preventDefault();

    const titulo = document.getElementById('nome-receita').value;
    const historia = document.getElementById('historia-receita').value;
    const ingredientes = document.getElementById('ingredientes').value;
    const modo = document.getElementById('preparo-receita').value;

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ titulo, historia, ingredientes, modo }),
        });
        if (!response.ok) {
            throw new Error('Erro ao adicionar a receita');
        }

        mostrarReceitas();
        document.getElementById('form-adicionar').reset();
    } catch (error) {
        console.error('Erro:', error);
    }
});

// Função para editar uma receita existente
document.getElementById('form-editar').addEventListener('submit', async function(event) {
    event.preventDefault();

    const id = document.getElementById('id-receita').value;
    const titulo = document.getElementById('nome-receita').value;
    const historia = document.getElementById('historia-receita').value;
    const ingredientes = document.getElementById('ingredientes').value;
    const modo = document.getElementById('preparo-receita').value;

    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, titulo, historia, ingredientes, modo }),
        });
        if (!response.ok) {
            throw new Error('Erro ao editar a receita');
        }

        mostrarReceitas();
        document.getElementById('form-editar').reset();
    } catch (error) {
        console.error('Erro:', error);
    }
});

// Função para excluir uma receita
async function excluirReceita(id) {
    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Erro ao excluir a receita');
        }

        mostrarReceitas();
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Inicialização da lista de receitas ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    mostrarReceitas();
});
