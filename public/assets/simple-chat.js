$(document).ready(function(){

  $('form').on('submit', function(){

      var author = $('form #author');
      var msg = $('form #msg');
      var message = {author: author.val(), text: msg.val()};

      $.ajax({
        type: 'POST',
        url: '/',
        data: message,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });
});
