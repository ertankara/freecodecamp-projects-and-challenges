(() => {
  const main = function() {
    $('.gear').click(function(e) {
      e.preventDefault();
      $('.settings-modal').fadeIn(600);
    });

    $('#save-button').click(function(e) {
      e.preventDefault();
      console.log('is clicked');
      $('.settings-modal').fadeOut(600);
    });

  };


  $(document).ready(main);
})();
