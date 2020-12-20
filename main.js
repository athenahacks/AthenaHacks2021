$(document).ready(function() {
    $('.faq li .question').click(function () {
      $(this).find('.expand-icon').toggleClass("fa-plus-circle fa-minus-circle");
      $(this).parent().toggleClass('active');
    });
  });

$('.click-sponsor').click(function(){
  $(this).addClass('hvr-grow');
});
  