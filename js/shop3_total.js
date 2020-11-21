//TOTAL CART NA CONFIRMAÇÂO
let preco2 = document.getElementsByClassName('preco_final2');
let shipping2 = 5.99;
let total2 = Number(document.getElementsByClassName('total_confirmado')[0].textContent);

for (let i = 0; i < preco2.length; i++) {
  total2 +=parseInt(preco2[i].textContent);
}


console.log(total2);

newTotal2 = total2 + shipping2;


var f = newTotal2.toFixed(2) + '€';


document.getElementsByClassName('total_confirmado')[0].innerHTML = f;

