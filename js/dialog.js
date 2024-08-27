// Variáveis
var btnAbreDialog = document.querySelector('#abreDialog');
var dialog = document.querySelector('.dialogNewsletter');
var dialogBody = document.querySelector('.dialogNewsletter-body');
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');
var conteudoForaDialog = document.querySelector('#conteudoForaDialog')

btnAbreDialog.style.display = "block"

// Quando abrir a dialog...
btnAbreDialog.addEventListener('click', function() {
  dialog.classList.add('dialogNewsletter--aberto');
  document.querySelector('.dialogNewsletter-campo').focus();
  conteudoForaDialog.inert = true
});

function fechandoDialog() {
  document.activeElement.blur();
  dialog.classList.remove('dialogNewsletter--aberto');     
  conteudoForaDialog.inert = false
  btnAbreDialog.focus()
}

// Listeners
document.querySelector('.dialogNewsletter-fechar').addEventListener('click', fechandoDialog);

document.addEventListener('keydown', (e) => {
  if (e.key == 'Escape') {
    fechandoDialog()
  }
})

dialogOverlay.addEventListener('click', () => {
  fechandoDialog()
})



















0