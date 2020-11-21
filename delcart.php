<?php
session_start();

$item_a_remover = $_GET['remove'];
$cenas_do_carrinho = $_SESSION['carrinho'];

$aux = array();

for($i=0; $i<count($cenas_do_carrinho); $i++){

	if($item_a_remover != $cenas_do_carrinho[$i]){
		array_push($aux, $cenas_do_carrinho[$i]);
	}
};


$_SESSION['carrinho'] = $aux;


header('Location: 1shop_cart.php');

?>