<?php
$conn = new mysqli('localhost', 'root', 'mysql', 'to_do');

if (isset($_POST['id']) && isset($_POST['value'])) {

    $id = intval($_POST['id']);
    $value = $_POST['value'];

    if ($value === "☐" || $value === "☑") {

        $stmt = $conn->prepare("UPDATE tasks SET done = ? WHERE id = ?");
        $stmt->bind_param("si", $value, $id);
        $stmt->execute();
    }
}
?>