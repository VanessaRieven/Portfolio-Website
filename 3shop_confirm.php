<?php include('header.php'); 

if(isset($_SESSION['userName'])) {

}?>


<div class="confirm_your_info">
	

	

	<div class="info_verification">
	<h3>CONFIRM YOUR INFO</h3>
			<p>NAME <?php echo ':'.' '.$_SESSION['name'].' '.$_SESSION['surname'];?></p>
			<p>E-MAIL <?php echo ':'.' '.$_SESSION['email'];?></p>
			<p>PHONE NUMBER <?php echo ':'.' '.$_SESSION['number'];?></p>
			<p>ADDRESS <?php echo ':'.' '.$_SESSION['address'];?> </p>
			<p>COUNTRY <?php echo ':'.' '.$_SESSION['country'];?></p>
			<p>CITY <?php echo ':'.' '.$_SESSION['city'];?></p>
			<p>ZIP CODE <?php echo ':'.' '.$_SESSION['zip'];?></p>
			<br><br>
			<p>PAYMENT: <img src="img/Payment/<?php echo $_SESSION['payment'];?>.png" width="80px"></p>
	</div>

	<div class="info_verification-mobile">
	<h3>CONFIRM YOUR INFO</h3>
	<hr>
		<p class="bold">NAME</p><p><?php echo$_SESSION['name'].' '.$_SESSION['surname'];?></p><br>
		<p class="bold">E-MAIL</p><p><?php echo $_SESSION['email'];?></p><br>
		<p class="bold">PHONE NUMBER</p><p><?php echo $_SESSION['number'];?></p><br>
		<p class="bold">ADDRESS</p><p><?php echo $_SESSION['address'];?> </p><br>
		<p class="bold">COUNTRY</p><p><?php echo $_SESSION['country'];?></p><br>
		<p class="bold">CITY</p><p><?php echo $_SESSION['city'];?></p><br>
		<p class="bold">ZIP CODE</p><p><?php echo $_SESSION['zip'];?></p>
		<br><br><br>
		<p class="bold">PAYMENT</p><img src="img/Payment/<?php echo $_SESSION['payment'];?>.png"
		width="90px">
		
	</div>
	

	
	<div class="info_verification2">
		<h3>ORDER</h3>
		<hr>
		
		
				<?php 

					include ('config.php');
					$items_no_carrinho = $_SESSION['carrinho'];

					for ($i=0;$i<count($items_no_carrinho); $i++){
						$sql= "select * from desenhos where id_desenho =".$items_no_carrinho[$i];
						$resultadoDetalhe = $ligacao->query($sql);
						$linhaDesenho = mysqli_fetch_assoc($resultadoDetalhe);
				?>
				<div class="order2">
					<div><p><?php echo $linhaDesenho['categoria_desenho'].' '.$linhaDesenho['nome_desenho'].' '.$linhaDesenho['tamanho_desenho'].' x1'?></p></div>
					<div><p class="preco_final2"><?php echo $linhaDesenho['preco_desenho'].'.00€'?></p></div>
				</div>
			
			<?php
		    	
					}
				?>
		
		<div class="totaldacompra">
			<div class="alinha6"> <div>SHIPPING:</div> <div>5,99€</div> </div>
			<br>
			<div class="alinha6"> <div>TOTAL:</div> <div><p class="total_confirmado"></p></div> </div>
		</div>	
	</div>



			
</div>

	<div class="links">
		<a href="2shop_contactinfo.php"><p>Back to Shipping Info</p></a>
		<button id="confirm" onclick="pagina()">CONFIRM <br>ORDER</button>
	</div>

	<div class="links_tablet">
		<button id="confirm" onclick="pagina()">CONFIRM <br>ORDER</button>
		<a href="2shop_contactinfo.php"><p>Back to Shipping Info</p></a>
	</div>
</div>

	</div>
</div>
<input type="hidden" name="payment_type" value="<?php echo $_SESSION['payment'];?>">

<?php include('footer.php'); ?>	