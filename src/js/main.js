$('.dropdown-btn').click(function(e) {
  e.preventDefault()
  var menu = $(this).next()
  if(menu.is(":hidden")){
    $(this).addClass('active')
    menu.slideDown(250)
  }
  else{
    $(this).removeClass('active')
    menu.slideUp(250)
  }
});