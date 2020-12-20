$(document).ready(function() {
    $('.faq li .question').click(function () {
      $(this).find('.plus-minus-toggle').toggleClass('collapsed');
      $(this).parent().toggleClass('active');
    });
  });

$('.click-sponsor').click(function(){
  $(this).addClass('hvr-grow');
});
  