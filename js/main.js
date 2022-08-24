$(window).scroll(function(){
    $('nav').toggleClass('scrolled',  
   $(this).scrollTop()  >  450); 
   }); 

   $(window).scroll(function(){
    $('.nav-link').toggleClass('naaav',  
   $(this).scrollTop()  >  450); 
   }); 


   $(window).scroll(function(){
    $('.icon').toggleClass('logo',  
   $(this).scrollTop()  >  450); 
   }); 