$(window).scroll(function() {
  parallax();
})

function parallax() {
  var dist = $(window).scrollTop()
  $('.parallax--bg').css('background-position', 'center ' + (dist*0.75)+'px');
  $('.parallax--box').css('top', -5 + (dist*.005)+'em')

}
