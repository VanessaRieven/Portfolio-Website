
<?php
$sql = "SELECT preco_desenho FROM desenhos";
$price = $conn->query($sql);

$id = $_GET['id_desenho'];

while($row = $result->fetch_assoc()) {
    
echo $price['preco_desenho']
}


?>