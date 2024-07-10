const url = "https://667c68333c30891b865c9009.mockapi.io/api/historia/historia";

async function carregarHistorias() {
    const res = await fetch(url)
    const historias = await res.json()
    mostrarHistorias(historias)
}

async function criarHistoria(){
    const inputDescricao = document.querySelector('#descricao')
    let descricao = inputDescricao.value
    try {
        const historia = {
            "descricao": descricao,
            "likes": 0
        }
        const detalhesRequisicao = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(historia)
        }
        const res = await fetch(url, detalhesRequisicao)
        alert('Tarefa adicionada com sucesso')
        carregarHistorias()
        inputDescricao.value = ''
    } catch (erro) {
        console.error(erro)
    }
}


async function excluirHistoria(id){
    const urlExcluir = `${url}/${id}`
    const detalhesRequisicao = {
        method: 'DELETE'
    }
    const resposta = await fetch(urlExcluir, detalhesRequisicao)
    carregarHistorias()
}


// async function carregarDadosHistoriaParaEditar(id, descricao) {
//     const idHistoria = document.querySelector('#id-editar')
//     const descricaoSelecionada = document.querySelector('#descricao-nova')
//     idHistoria.value = id
//     descricaoSelecionada.value = descricao
// }

async function carregarDadosHistoriaParaEditar(id){
    const urlHistoriaEspecifica = `${url}/${id}`
    const resposta = await fetch (urlHistoriaEspecifica)
    const dadosHistoria = await resposta.json()
    const inputId = document.querySelector('#id-editar')
    const inputDescricao = document.querySelector('#descricao-nova')
    inputId.value=dadosHistoria.id
    inputDescricao.value=dadosHistoria.descricao


    console.log(dadosHistoria)
}


async function editarHistoria(){
    const id = document.querySelector('#id-editar').value
    const DescricaoNova = document.querySelector('#descricao-nova').value

    const historiaNova = {
        "id": id,
        "descricao": DescricaoNova
    }
    const detalhesRequisicao = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(historiaNova)
    }
    const urlEditar = `${url}/${id}`
    const resposta = await fetch(urlEditar, detalhesRequisicao)
    alert('Sua história sem graça foi editada com sucesso!')
    carregarHistorias()
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
                <button onclick="carregarDadosHistoriaParaEditar('${historia.id}')">Editar</button>
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

// const formEditar = document.querySelector('#form-editar')
// formEditar.addEventListener('submit', evento => {
//     evento.preventDefault()
//     editarHistoria()
// })
const botaoEditar = document.querySelector('#form-editar [type="submit"]')
botaoEditar.addEventListener('click', (evento)=>{
evento.preventDefault()
editarHistoria()
})
carregarHistorias()
