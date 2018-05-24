(() => {
  const main = function() {
    $('.gear').click(function() {
      $('.settings-modal').fadeIn(600);
    });

    $('#save-button').click(function() {
      console.log('is clicked');
      $('.settings-modal').fadeOut(600);
    });

  };


  $(document).ready(main);
})();
