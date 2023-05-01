$(document).ready(function() {
    $('#formulario-tarefa').submit(function(event) {
      event.preventDefault();
      const nomeTarefa = $('#nome-tarefa').val();
      $('<li></li>').text(nomeTarefa).appendTo('#lista-tarefas');
      $('#nome-tarefa').val('');
    });
  
    $('ul').on('click', 'li', function() {
      $(this).toggleClass('concluida');
    });
});