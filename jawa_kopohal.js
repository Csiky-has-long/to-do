function done(id){
    
    if(document.getElementById("done" + id).innerHTML == "☐"){
        document.getElementById("done" + id).innerHTML = "☑"
    }else{
        document.getElementById("done" + id).innerHTML = "☐"
    }
}

//ezt akarom atirni htmlbe az onlcick(done(0)) helyett

/*
<script>
function done(id){

    let element = document.getElementById("done" + id);
    let newValue;

    if(element.innerHTML == "☐"){
        element.innerHTML = "☑";
        newValue = "☑";
    } else {
        element.innerHTML = "☐";
        newValue = "☐";
    }

    // Send BOTH id and new value to PHP
    fetch("update_done.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "id=" + id + "&value=" + encodeURIComponent(newValue)
    });
}
</script>


🟢 Step 2 — update_done.php


<?php
$conn = new mysqli("localhost", "username", "password", "database");

if (isset($_POST['id']) && isset($_POST['value'])) {

    $id = intval($_POST['id']);
    $value = $_POST['value'];

    // Only allow valid values (security)
    if ($value === "☐" || $value === "☑") {

        $stmt = $conn->prepare("UPDATE tasks SET done = ? WHERE id = ?");
        $stmt->bind_param("si", $value, $id);
        $stmt->execute();
    }
}
?>



*/