<?php
include 'bd.php';

// Recuperar os dados do corpo da requisição POST
$data = json_decode(file_get_contents('php://input'), true);

// Obter o nome do array recebido
$id = $data['id'];

// DELETA DO BANCO DE DADOS 
$sql = "DELETE FROM tabela WHERE id = $id";
$stmt = $bd->prepare($sql);

$stmt->execute();

?>