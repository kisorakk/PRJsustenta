const btn = document.getElementById("darkmode");
const lnk = document.querySelector("link[href='style.css']");
const stlcss = new URL("./style.css", window.location);
btn.addEventListener("click", function () {
  if (lnk.href == stlcss.href){
    lnk.href = "styledark.css"; 
  } else {
    lnk.href = "style.css";
  }
});
//botao menu
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
menuToggle.addEventListener('click', function() {
	menu.classList.toggle('open');
});
var cont = 0;
var input = document.getElementById("inputTarefa");
var btnAdd = document.getElementById("btn-add");
var main = document.getElementById("areaLista");

function addTarefa() {
  //pegar o valor digitado
  let valorInput = input.value;
  //se for vakido
  if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
    ++cont;
    let novoItem = `<div id="${cont}" class="item">
        <div onclick="marcarTarefa(${cont})" class="item-icone">
            <i id="icone_${cont}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${cont})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${cont})" class="delete"><i class="mdi mdi-delete"></i> Deletar</button>
        </div>
    </div>`;
    //add item
   var estilizacao_nv_item = document.getElementById("idconteudo_segundario");
    main.innerHTML += novoItem;
    //zerar campos
    input.value = "";
    input.focus();
  }
}
function deletar(id) {
  var tarefa = document.getElementById(id);
  tarefa.remove();
}
function marcarTarefa(id) {
  var item = document.getElementById(id);
  var classe = item.getAttribute("class");
  console.log(classe);
  if (classe == "item") {
    item.classList.add("clicado");
    var icone = document.getElementById("icone_" + id);
    icone.classList.remove("mdi-circle-outline");
    icone.classList.add("mdi-check-circle");
    item.parentNode.appendChild(item);
  } else {
    item.classList.remove("clicado");
    var icone = document.getElementById("icone_" + id);
    icone.classList.remove("mdi-check-circle");
    icone.classList.add("mdi-circle-outline");
  }
}
input.addEventListener("keyup", function (event) {
  //SE TECLOU ENTER (13)
  if (event.keyCode === 13) {
    event.preventDefault();
    btnAdd.click();
  }
});
