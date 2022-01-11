/* main.js */

/* fullpage */
$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        autoScrolling:true,
        scrollHorizontally: true,
        keyboardScrolling : true, 
        navigation: true,
        navigationTooltips : ['Home','Jisign','Redbit','Admin','Takehotel', 'StoneBridge', 'Luna-x','contact'],
        navigationPosition: 'right',
        showActiveTooltips : true,
        scrollingSpeed : 500,

    });
});

/* menu slide */ 
$(function(){
    /* header */ 
    $('.menu').on('click', function(){
        $('#main-menu')
        .slideToggle()
        .toggleClass('show')
    });
    $('.menu').on('click', function(){
        $('.bg-box')
        .toggleClass('none');
    });
    /* section : wedding */
    $('.menu').on('click', function(){
        $('.project-box')
        .toggleClass('none'); 
    });
    /* section : design */
    $('.menu').on('click', function(){
        $('#design .title-txt')
        .toggleClass('none'); 
        $('#design .clear')
        .toggleClass('none');

    });
    // $('.menu').on('click', function(){
    //     $('#design .web-clear')
    //     .toggleClass('none');
    //     $('#design .clear')
    //     .toggleClass('hidden');
        
    // });
    $('.menu').on('click', function(){
        $('#contact .bg-box')
        .toggleClass('close');
        $('#contact .bg-box')
        .toggleClass('min'); 
        $('#contact .top-indi')
        .toggleClass('none');

    });
   
    
});
