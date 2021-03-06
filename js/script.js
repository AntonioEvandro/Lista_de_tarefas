const btnAddTarefa = document.querySelector("#add_tarefa")
const lstAFazer = document.querySelector("#a_fazer")
const lstFeito = document.querySelector("#feito")

const adicionarTarefa = function(ev){
    ev.preventDefault()
    
    const tarefa = document.querySelector("#tarefa").value

    if(tarefa.length < 1){
        return;
    }

    const novaTarefa = document.createElement("li")
    novaTarefa.innerText = tarefa

    lstAFazer.appendChild(novaTarefa)
}

const moverParaFeito = function(ev){
    const tarefa = ev.target.innerText

    const novaTarefa = document.createElement("li")
    novaTarefa.innerText = tarefa

    lstFeito.appendChild(novaTarefa)
    lstAFazer.removeChild(ev.target)
}

const limparFeito = function(ev){
    const item = ev.target

    lstFeito.removeChild(item)
}

btnAddTarefa.addEventListener("click", adicionarTarefa)

lstAFazer.addEventListener("click", moverParaFeito)

lstFeito.addEventListener("click", limparFeito)