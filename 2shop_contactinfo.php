<?php include('header.php'); ?>

 

<div class="total">
	<div class="alinha5">
		<div class="cart">
			<h3>SHIPPING INFO</h3>
			<label class="erro">MANDATORY FIELDS</label>
			<form action="session.php"  method="post" id="formulario">
				<input class="error" type="text" name="name" placeholder="First Name">
				<input class="error" type="text" name="surname"  placeholder="Last Name">
				<input class="error" type="text" name="email"  placeholder="E-mail">
				<input class="error" type="text" name="number"  placeholder="Phone Number">
				<br><br>
				<input class="error" type="text" name="address"  placeholder="Address">
				<br><br>
				<input class="error" type="text" name="country"  placeholder="Country">
				<input class="error" type="text" name="city"  placeholder="City">
				<input class="error" type="text" name="zip"  placeholder="Zip Code">
				<input type="hidden" name="visible" value="0" />
				<div class="checkfornews"><input type="checkbox" name="visible" value="1" /><p>Keep up with my newsletter!</p></div>
		</div>

		<div class="payment">
			<h3>PAYMENT OPTIONS</h3>

			<div class="paypal error borda">
				<input value="paypal" type="radio" class="rdo rdo1" name="radiobtn" id="first">
				<img src="img/Payment/paypal.png" width="110px" height="35px">
			</div>

			<br><p>or</p><br>

			<div class="mbway error borda">
				
			<div class="alinha6">
				<input value="mbway" class="rdo rdo2" type="radio" name="radiobtn" id="second">
				<img src="img/Payment/mbway.png" width="80px" height="35px">
			</div>
			

			<div class="second">
					<input class="mbwayphone" type="text" name="mbwayphone" placeholder="INSERT YOUR PHONE NUMBER"><br><br>
					<p>You will receive a notification on your MB WAY app to proceed with the payment</p>
			</div>
		</div>

		<br><br>
		<p>*Shipping will be by registered mail with tracking number. After the order is shipped, you'll receive an e-mail with the tracking number and link to track your order.</p>
		
	</div>


	</div>
		<div class="links2shop">
			<a href="1shop_cart.php"><p>Back to Cart</p></a>
			<button type="submit" name="Submit" value="NEXT" id="nextb" onsubmit="return validaform()">NEXT</button>
		</div>

		<div class="links2shop_tablet">
			<button type="submit" name="Submit" value="NEXT" id="nextb" onsubmit="return validaform()">NEXT</button>
			<a href="1shop_cart.php"><p>Back to Cart</p></a>
		</div>
	</form>

	</div>
</div>
<?php include('footer.php'); ?>	
