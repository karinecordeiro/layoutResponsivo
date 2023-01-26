// Variáveis
var btnAbreModal = document.querySelector('#abrirModal');
var modal = document.querySelector('.modalContato');
var modalBody = document.querySelector('.modalContato-body');
var modalOverlay = document.querySelector('.modalContato-overlay');


// Quando abrir a dialog...
btnAbreModal.addEventListener('click', function() {
    modal.classList.add('modalContato--aberto');
});

function fechandoModal() {
    document.activeElement.blur();
    modal.classList.remove('modalContato--aberto');    
}

// Listeners
document.querySelector('.modalContato-fechar').addEventListener('click', fechandoModal);