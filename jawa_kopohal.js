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

    // amugy ennyit írt kb az ai ami ez alatt van:
    fetch("done.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "id=" + id + "&value=" + encodeURIComponent(newValue)
    });
}