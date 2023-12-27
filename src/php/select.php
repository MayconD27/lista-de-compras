<?php
include 'bd.php';

$sql = $bd->query("SELECT * FROM tabela WHERE nome != ''");
$resultado = $sql->fetchAll();

header('Content-Type:application/json');
echo json_encode($resultado);

?>