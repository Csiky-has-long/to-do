<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To Do</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/fabcdd91d2.js" crossorigin="anonymous"></script>
    
</head>
<body>

<header>
<h1>To Do</h1>
<h2>A program for managing tasks</h2>

</header>

    <div class="egesz">

    <form class="iras" method="post" action="submit.php">
        <input type="text" name="name" placeholder="*Add a task...">
        <input type="text" name="comment" placeholder="Add a comment...">
        
        <select name="icon" id="icon"  class="fa">
            <option value="0">----</option>
            <option value="&#x2709;">&#x2709;</option>
            <option value="&#xf0f3;">&#xf0f3;</option>
            <option value="&#x2691;">&#x2691;</option>
            <option value="&#x2708;">&#x2708;</option>
            <option value="&#x24;">&#x24;</option>
        </select>
        <input type="submit">
    </form>



        <table class="lista">

            
            <tr>
                <th>Icon</th>
                <th>ID</th>
                <th>Task</th>
                <th>Comment</th>
                <th>Timestamp</th>
                <th>Done</th>
            </tr>

    <?php
        $conn = mysqli_connect("localhost", "root", "mysql", "to_do");
        if ($conn-> connect_error) {
            die("Connection failed: " . $conn-> connect_error);
        }

        $sql = "SELECT * FROM tasks";
        $result = $conn-> query($sql);
        if ($result-> num_rows > 0) {
            while ($row = $result-> fetch_assoc()) {
                echo "<tr><td>". $row["icon"] ."</td><td>". $row["id"] ."</td><td>". $row["name"] ."</td><td>". $row["comment"] ."</td><td>". $row["time"]. '</td><td id="done" onclick="done(' .$row["id"]. ')">' .$row["done"]. "</td></tr>";
            }
            echo "</table>";

        } else {
            echo "0 results";
        }

        $conn-> close();
    ?>
        

    
        </table>

    </div>

<footer>
<p>minden jog fenntartva csak angolul</p> <br>


</footer>

<script src="jawa_kopohal.js"></script>

</body>
</html>