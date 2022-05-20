const ola = document.querySelector("#exemplo1")

/*//Errada
ola.addEventListener("click",alert ("Olá!"))
*/

/*//certa
ola.addEventListener("click", function(){
    alert("Olá!")
})
*/

//outra certa
function cumprimentar (){
    let nome = prompt("Qual seu nome?")
    alert("Olá," + nome)
}
ola.addEventListener("click", cumprimentar)


// 2ª parte da pratica

const btnAddTarefa = document.querySelector("#add_tarefa")
const lstAFazer = document.querySelector("#a_fazer")
const lstFeito = document.querySelector("#feito")

const adicionarTarefa = function(){
    const tarefa = document.querySelector("#tarefa").value

    if(tarefa.length < 1){
        return;
    }

    const novaTarefa = document.createElement("li")
    novaTarefa.innerText = tarefa

    lstAFazer.appendChild(novaTarefa)
}
btnAddTarefa.addEventListener("click", adicionarTarefa)

/*//  Nao vai funcionar com tds
let itens = lstAFazer.querySelectorAll("li")
for(let item of item){
    item.addEventListener("click", function(){
        alert("Item clicavel")
    })
}*/
/*
lstAFazer.addEventListener("click", function(ev){
    alert("Você clicou em " + ev.target.innerText)
})
*/
const moverParaFeito = function(ev){
    const tarefa = ev.target.innerText
    const novaTarefa = document.createElement("li")
    novaTarefa.innerText = tarefa

    lstFeito.appendChild(novaTarefa)
}
