 

 //Overlays Projetos --------------------------------------------------------------------
/* Open */
function openNav1() {
  document.getElementById("myNavOne").style.display = "block";
}

/* Close */
function closeNav1() {
  document.getElementById("myNavOne").style.display = "none";
}

/* Open */
function openNav2() {
  document.getElementById("myNavTwo").style.display = "block";
}

/* Close */
function closeNav2() {
  document.getElementById("myNavTwo").style.display = "none";
}

/* Open */
function openNav3() {
  document.getElementById("myNavThree").style.display = "block";
}

/* Close */
function closeNav3() {
  document.getElementById("myNavThree").style.display = "none";
}

/* Open */
function openNav4() {
  document.getElementById("myNavFour").style.display = "block";
}

/* Close */
function closeNav4() {
  document.getElementById("myNavFour").style.display = "none";
}



//COLORBOXES______________________________________________________________________
$(document).ready(function(){
  $('.column a').colorbox({
  overlayClose: true,
  escKey: true,
  closeButton: true,
  fadeOut: true,
  arrowKey: true,
  maxHeight: '98%',
  maxWidth: '98%',
  rel: 'grupo1' //rel é o que vai buscar todas as imagens da mesma classe e usar as arrows
  });
});





//Load More Button Grid________________________________________________________
 $("#loadMore").click(function(){
  if(!$("#bunga").hasClass("less")){
    $("#bunga").addClass("less");
    $("#loadMore").html("SHOW MORE");
    $(".desenhos").css('display','block');
  } else { 
    $("#bunga").removeClass("less");
    $("#loadMore").html("SHOW LESS");
  }
});



//Youtube Light Load__________________________________________________________
    document.addEventListener("DOMContentLoaded",
        function() {
            var div, n,
                v = document.getElementsByClassName("youtube-player");
            for (n = 0; n < v.length; n++) {
                div = document.createElement("div");
                div.setAttribute("data-id", v[n].dataset.id);
                div.innerHTML = labnolThumb(v[n].dataset.id);
                div.onclick = labnolIframe;
                v[n].appendChild(div);
            }
        });

    function labnolThumb(id) {
        var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
            play = '<div class="play"></div>';
        return thumb.replace("ID", id) + play;
    }

    function labnolIframe() {
        var iframe = document.createElement("iframe");
        var embed = "https://www.youtube.com/embed/ID?autoplay=1";
        iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "1");
        this.parentNode.replaceChild(iframe, this);
    }




//SLIDERS--------------------------------------------------------------------------

//SLIDER PROJECTS DESKTOP----------------------------------------------------------
$(document).ready(function(){
  
$('.center').slick({
  centerMode: false,
  slidesToShow: 3,
  adaptiveHeight: true,
  variableWidth: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '10px',
      slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '10px',
      slidesToShow: 1
      }
    }
  ]
});
});


//MOBILE MENU___________________________________________________________________

$('#mycheckbox').change(function() {
   $('.menu-open').slideToggle(400);
});

$('.menu-open li a').click(function(){
  $('.menu-open').hide(0);
  $('#mycheckbox').prop('checked', false);
});


//PAGE INTRO----------------------------------------------------------

  $(".introdapagina").delay(5000).fadeOut(3000);
   $(".introdapagina").click(function(){
     $(".introdapagina").css('display','none');
   });







