<?php
try {
    $pdo = new PDO("sqlite:jogos_db.db");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $pdo->exec("CREATE TABLE IF NOT EXISTS jogos (
id INTEGER PRIMARY KEY AUTOINCREMENT,
nome TEXT NOT NULL,
plataforma TEXT NOT NULL,
genero TEXT NOT NULL
)");
} catch (PDOException $e) {
    die("Erro na conexão com o banco de dados: " . $e->getMessage());
}
?>
