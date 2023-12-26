$(document).ready(function() {
  $('#add-item').on('click', function() {
      var itemText = $('#new-item').val();
      
      var newEl = $('<li>' + itemText + '</li>');
      newEl.hide();
      
      $('ul').prepend(newEl);
      
      newEl.slideDown();
      
  });
  
  $('ul').on('click', 'li', function() {
    $(this).css('text-decoration', 'line-through');
  });

});