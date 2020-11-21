

//PAYMENT RADIO BUTTONS_____________________________________________________

$('.rdo').click(function () {
  if ($(this).prop('checked') && $(this).hasClass('rdo1')) {
    $('.first').show();
    $('.second').hide();
  } else if ($(this).prop('checked') && $(this).hasClass('rdo2')) {
    $('.first').hide();
    $('.second').show();
  }
});



//DOCUMENT READY OPEN
$(document).ready(function () {




//CATEGORY FILTER

$("#filter_originals").click(function () {

  $('.Original').show();
  $('.Print').hide();
});

$("#filter_prints").click(function () {

  $('.Print').show();
  $('.Original').hide();
});


$("#filter_all").click(function () {

  $('.Print').show();
  $('.Original').show();
});


//DOCUMENT READY CLOSE
});


//INFO_____________________________________________________________________________

function openInfo() {
  document.getElementById("myInfo").style.display = "block";
}

/* Close */
function closeInfo() {
  document.getElementById("myInfo").style.display = "none";
}




// Cart Button__________________________________________________________________________

/* Open */
function openCart() {
  $('.overlay-cart').animate({ 'width': 'toggle' });
  $('.bg-overlay').fadeIn();
}
/* Close */
function closeCart() {
  $('.overlay-cart').animate({ 'width': 'toggle' });
  $('.bg-overlay').fadeOut();
}




//PAYMENT RADIO BUTTONS_______________________________________________________________

$('.rdo').click(function () {
  if ($(this).prop('checked') && $(this).hasClass('rdo1')) {
    $('.first').show();
    $('.second').hide();
  } else if ($(this).prop('checked') && $(this).hasClass('rdo2')) {
    $('.first').hide();
    $('.second').show();
  }
});






//Error____________________________________________________________________

$('#formulario').submit(function validaform() {
  //alert('1');
  nome = document.getElementsByName('name')[0].value;
  surname = document.getElementsByName('surname')[0].value;
  email = document.getElementsByName('email')[0].value;
  numero = document.getElementsByName('number')[0].value;
  morada = document.getElementsByName('address')[0].value;
  pais = document.getElementsByName('country')[0].value;
  cidade = document.getElementsByName('city')[0].value;
  codigo = document.getElementsByName('zip')[0].value;
  numeroMb = document.getElementsByName('mbwayphone')[0].value;
  cxRadio = document.getElementsByName('radiobtn');
  pagamento1 = document.getElementsByName('radiobtn')[0].value;
  pagamento2 = document.getElementsByName('radiobtn')[1].value;
  pag = $('input[name=radiobtn]').prop('checked');
  mbwayCheckado = document.getElementsByName('radiobtn')[1].checked;

  checkados = false;

  for (i = 0; i < cxRadio.length; i++) {
    if (document.getElementsByName('radiobtn')[i].checked) {
      checkados = true;
    }
  }

  if (nome == '' || surname == '' || email == '' || numero == '' || morada == '' || pais == '' || cidade == '' || codigo == '' || (numeroMb == '' && mbwayCheckado == true) || checkados == false) {
    $('.error').css('border', 'solid 2px #DC2E2E');
    $('.erro').css('display', 'block');
    return false;
  }

  //alert('O nome ja foi impresso');

});

$('#formulario').click(function () {
  $('.erro').css('display', 'none');
  $('.error').css('border', 'solid 2px #777777');
  $('.borda').css('border', 'none');
});






//CONFIRM ORDER REDIRECT TO PROPER PAYMENT PAGE


function pagina() {

  p = $('input[name=payment_type]').val();

  //alert(p);
  if (p == "paypal") {
    //alert('2');
    window.location.href = "paypal_loading.php";
  } else {
    //alert('3');
    window.location.href = "mbway_loading.php";
  }
};





//Botoes Quantity Cart
var check = false;


$(".qt-plus").click(function () {
  $(this).parent().children(".qt").html(parseInt($(this).parent().children(".qt").html()) + 1);
});


$(".qt-minus").click(function () {

  child = $(this).parent().children(".qt");

  if (parseInt(child.html()) > 1) {
    child.html(parseInt(child.html()) - 1);
  }
});




//Slideshow Jssor


$('#slideshow > *:first').addClass('active');

$('#slideshowContainer #next').click(function (e) {
  e.preventDefault();

  $('#slideshow > .active').fadeOut('slow');

  var index = $('#slideshow > *.active').index();

  if (index === $('#slideshow > *').size() - 1) {
    index = -1;
  }

  $('#slideshow > .active').removeClass('active');

  var nextSlide = $('#slideshow > *').get(index + 1);
  $(nextSlide).addClass('active');

  $('#slideshow > .active').fadeIn('slow');
});

$('#slideshowContainer #prev').click(function (e) {
  e.preventDefault();

  $('#slideshow .active').fadeOut('slow');

  var index = $('#slideshow img.active').index();

  if (index === 0) {
    index = $('#slideshow img').size();
  }

  $('#slideshow .active').removeClass('active');

  var prevSlide = $('#slideshow img').get(index - 1);
  $(prevSlide).addClass('active');

  $('#slideshow .active').fadeIn('slow');
});




//TOTAL CART
let preco = document.getElementsByClassName('preco_final');
let shipping = 5.99;
let total = Number(document.getElementsByClassName('atualiza_valor')[0].textContent);

for (let i = 0; i < preco.length; i++) {
  total += Number(preco[i].textContent);
}


newTotal = total + shipping;


var n = newTotal.toFixed(2) + '€';

document.getElementsByClassName('atualiza_valor')[0].innerHTML = n;




//QUANTITY NAO APARECER NOS ORIGINALS

let originalOrder = document.getElementsByClassName("Original-order");
let quantidade = document.getElementsByClassName("quantidade");


for (let i = 0; i < originalOrder.length; i++) {
 
  if (originalOrder[i].classList.contains('Original')) {
    quantidade[i].style.display = "none";
  }
}



//QUANTITY NO ICON CART

let bananas = document.getElementsByClassName('bananas')[0];
let arr = document.getElementsByClassName('order');


bananas.textContent = arr.length

if(arr.length==0){
  bananas.style.display = "none";
}


//CART CHECKOUT BUTTON

document.getElementById("checkoutButton").onclick = function () {
  location.href = "2shop_contactinfo.php";
};



