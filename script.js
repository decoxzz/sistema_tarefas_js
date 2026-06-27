/*
  Versão personalizada do sistema.
*/

const formulario = document.querySelector("#formulario");
const input = document.querySelector("#tarefa");
const lista = document.querySelector("#lista");
const mensagem = document.querySelector("#mensagem");

const tarefas = [];

function renderizarTarefas() {
  lista.innerHTML = "";

  tarefas.forEach(function (tarefa) {
    const item = document.createElement("li");
    item.textContent = tarefa;
    lista.appendChild(item);
  });
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const texto = input.value.trim();

  if (texto === "") {
    mensagem.textContent = "Digite uma tarefa.";
    mensagem.style.color = "red";
    return;
  }

  // NOVA FUNCIONALIDADE
  if (tarefas.includes(texto)) {
    mensagem.textContent = "Essa tarefa já foi adicionada!";
    mensagem.style.color = "orange";
    return;
  }

  tarefas.push(texto);
  renderizarTarefas();

  // NOVA FUNCIONALIDADE
  mensagem.textContent = "Tarefa adicionada com sucesso!";
  mensagem.style.color = "green";

  input.value = "";
});