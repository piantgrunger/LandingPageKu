$('.page-scroll').on('click',function(e){
    var href =$(this).attr('href');
    var element=$(href);

    $('html , body').animate({
        scrollTop: element.offset().top - 50 
        },1500,'swing');
    e.preventDefault();
    
});
$(window).scroll(function(){
   var wScroll = $(this).scrollTop();

   $('.jumbotron img').css({
       'transform' : 'translate(0px,'+wScroll/4+'%) '
   })
   $('.jumbotron h1').css({
    'transform' : 'translate(0px,'+wScroll/2+'%) '
})
$('.jumbotron p').css({
    'transform' : 'translate(0px,'+wScroll/1.2+'%) '
})

if (wScroll > $('.portfolio').offset().top - 250) {
    $('.portfolio .thumbnail').each(
        function(i){
            setTimeout( function(){
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            },300 * i);
        }
    )
} 


if (wScroll > $('.about').offset().top - 250) {
    console.log('ok');

    $('.about .pKiri').addClass('pMuncul');
    $('.about .pKanan').addClass('pMuncul');

} ;


});