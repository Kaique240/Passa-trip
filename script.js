/* =========================================================
   PASSA TRIP
   SCRIPT PRINCIPAL
========================================================= */


/* =========================================================
   ANIMAÇÃO INICIAL
   EXECUTA SOMENTE UMA VEZ POR ABA
========================================================= */

if (!sessionStorage.getItem("passaTripJaAbriu")) {

    document.body.classList.add("animar-entrada");

    sessionStorage.setItem(
        "passaTripJaAbriu",
        "true"
    );

}


/* =========================================================
   ABRIR SUBMENU
========================================================= */

function abrirSubmenu(nome) {

    const submenu = document.getElementById(nome);

    if (!submenu) {
        return;
    }

    submenu.classList.toggle("aberto");

}


/* =========================================================
   ABRIR PÁGINA
========================================================= */

function abrirPagina(tipo) {

    if (!tipo) {
        return;
    }

    window.location.href =
        "despesa.html?tipo=" +
        encodeURIComponent(tipo);

}


/* =========================================================
   ABRIR DESPESA
========================================================= */

function abrirDespesa(tipo) {

    if (!tipo) {
        return;
    }

    window.location.href =
        "despesa.html?tipo=" +
        encodeURIComponent(tipo);

}


/* =========================================================
   VOLTAR PARA O INÍCIO
========================================================= */

function voltarInicio() {

    window.location.href = "index.html";

}


/* =========================================================
   TESTE
========================================================= */

console.log(
    "PASSA TRIP carregado corretamente."
);
