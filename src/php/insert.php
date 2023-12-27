<?php
include 'bd.php';

// Recuperar os dados do corpo da requisição POST
$data = json_decode(file_get_contents('php://input'), true);

// Obter o nome do array recebido
$name = $data['item'];

// Inserir o nome no banco de dados
$sql = "INSERT INTO tabela (nome) VALUES (:name)";
$stmt = $bd->prepare($sql);

$stmt->bindParam(':name', $name, PDO::PARAM_STR);

// Executar a consulta preparada
$stmt->execute();

?>