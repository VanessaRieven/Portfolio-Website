


 $('body').on('click', '.animated-arrow', function() {
    if($(this).hasClass('goback')) {
        $('#modal-container').addClass('out');
        $('body').removeClass('modal-active');
        $('.modals').css('background-color', '#5C5C5C');
    } else if ($(this).hasClass('goskills'))  {
        $('#skills').click();
    } else if ($(this).hasClass('gotimeline')) {
        $('#timeline').click();
    }
});



 function modalshow(projeto) {
    $('#modal-container').removeAttr('class').addClass('one');
    $('body').addClass('modal-active');

    setTimeout(function(){ 
        $('.modals').css('background-color', '#efefef');
     }, 500);

     if (projeto == 'alias') {

     } else if (projeto == 'videos') {

     }
  
 }



 