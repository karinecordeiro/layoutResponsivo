// Variáveis
var btnAbreModal = document.querySelector('#abrirModal');
var modal = document.querySelector('.modalContato');
var modalBody = document.querySelector('.modalContato-body');
var modalOverlay = document.querySelector('.modalContato-overlay');


// Quando abrir a modal...
btnAbreModal.addEventListener('click', function() {
    modal.classList.add('modalContato--aberto');
});

function fechandoModal() {
    document.activeElement.blur();
    modal.classList.remove('modalContato--aberto');  
    btnAbreModal.focus();
    
}

// Listeners
document.querySelector('.modalContato-fechar').addEventListener('click', fechandoModal);

modalOverlay.addEventListener('click', fechandoModal); //fechar clicando fora

// fechar usando esc
document.addEventListener('keyup', function(evento) {
    if (evento.key === 'Escape') {
        fechandoModal()
    }
})