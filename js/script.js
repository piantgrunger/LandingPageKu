$('.page-scroll').on('click',function(e){
    var href =$(this).attr('href');
    var element=$(href);

    $('html , body').animate({
        scrollTop: element.offset().top - 50 
        },1500,'swing');
    e.preventDefault();
    
})