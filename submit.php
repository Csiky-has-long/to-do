<?php
$name = $_POST['name'];
$comment = $_POST['comment'];
$icon = $_POST['icon'];

$conn = new mysqli('localhost', 'root', 'mysql', 'to_do');
if ($conn->connect_error) {
    die("Connection Failed: " . $conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO users(name, comment, icon) VALUES(?, ?, ?)");
    $stmt->bind_param("sss", $name, $comment, $icon);
    $execval = $stmt->execute();
    
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