<?php 
   session_start();

	$_SESSION['userName'] = 'Root';

    if (isset($_POST['name'])) { 

		 $_SESSION['name'] = $_POST['name'];
		 $_SESSION['surname'] = $_POST['surname'];
		 $_SESSION['number'] = $_POST['number'];
		 $_SESSION['email'] = $_POST['email'];
		 $_SESSION['address'] = $_POST['address'];
		 $_SESSION['country'] = $_POST['country'];
		 $_SESSION['city'] = $_POST['city'];
		 $_SESSION['zip'] = $_POST['zip'];
		 $_SESSION['payment'] = $_POST['radiobtn'];
		 //die( $_SESSION['payment']);

		 	 print_r($_SESSION);

		// die();
		 header('Location: 3shop_confirm.php');
 } 
?>