<?php 
session_start();

	$id = $_GET['id_desenho']; 
	if(!isset($_SESSION['carrinho'])){
		$_SESSION['carrinho'] =[];
	}

	array_push($_SESSION['carrinho'], $id);



	header('Location: 1shop_cart.php');

?>