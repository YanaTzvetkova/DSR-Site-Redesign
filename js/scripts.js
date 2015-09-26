$(function(){
	
  $('.previews a').on('click',function(e){
    e.preventDefault();
    // console.log('working?');
    // $(".selected").removeClass("selected");
    // $(this).addClass("selected");
    var src = $(this).data('src');
    // console.log(icon);
    var alt = $(this).data('alt');
    // console.log(alt);
    var title = $(this).data('title');
    // console.log(title);
    var desc = $(this).data('desc');
    // console.log(desc);
    $('.full img').attr("src", src);
    $('.full img').attr("alt", alt);
    $('.full h3').empty().text(title);
    $('.full p').empty().text(desc);
  });

});