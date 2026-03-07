<?php
$id = $_GET['id'];

$conn = new mysqli('localhost', 'root', 'mysql', 'to_do');
if ($conn->connect_error) {
    die("Connection Failed: " . $conn->connect_error);
} else {
    $stmt = $conn->prepare("DELETE FROM tasks WHERE id = ?");
    $stmt->bind_param("i", $id);
    $execval = $stmt->execute();
    
    if ($execval) {
        echo "Deleted successfully";
    } else {
        echo "Delete failed";
    }
    
    $stmt->close();
    $conn->close();
}
?>