<?php

$id = intval($_POST['id']);
    $value = $_POST['value'];

$conn = new mysqli('localhost', 'root', 'mysql', 'to_do');

if ($conn->connect_error) {
    die("Connection Failed: " . $conn->connect_error);
} else {

    if (isset($_POST['id']) && isset($_POST['value'])) {



        if ($value === "☐" || $value === "☑") {

            $stmt = $conn->prepare("UPDATE tasks SET done = ? WHERE id = ?");
            $stmt->bind_param("si", $value, $id);
            $execval = $stmt->execute();
        }
    }

    if ($execval) {
        
        header("Location: index.php");
        exit(); 
    } else {
        
        echo "Registration failed. Please try again.";
    }

    $stmt->close();
    $conn->close();
}
?>