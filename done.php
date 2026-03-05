<?php

$conn = new mysqli('localhost', 'root', 'mysql', 'to_do');

if ($conn->connect_error) {
    http_response_code(500);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['success' => false, 'error' => 'Connection Failed: ' . $conn->connect_error]);
    exit();
}

$execval = false;
$stmt = null;

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['id']) && isset($_POST['value'])) {

    $id = intval($_POST['id']);
    $value = $_POST['value'];

    if ($value === "☐" || $value === "☑") {

        $stmt = $conn->prepare("UPDATE tasks SET done = ? WHERE id = ?");
        if ($stmt) {
            $stmt->bind_param("si", $value, $id);
            $execval = $stmt->execute();
        }
    }
}

header('Content-Type: application/json; charset=utf-8');
echo json_encode([
    'success' => (bool)$execval,
    'affected_rows' => $stmt ? $stmt->affected_rows : 0
]);

if ($stmt) {
    $stmt->close();
}
$conn->close();
?>