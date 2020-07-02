// A $( document ).ready() block.
$( document ).ready(function() {

  let Url = 'http://localhost:3000/databases'

  $.get(Url,  function (data,status) {
    console.log(`${data}`);
  });

});

