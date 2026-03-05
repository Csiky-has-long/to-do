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
     const params = new URLSearchParams({ id: String(id), value: newValue });

    fetch("done.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: params.toString()
    })
    .then(response => {
        if (!response.ok) throw new Error("HTTP " + response.status);
        return response.text();
    })
    .then(text => {
        console.log("done.php response:", text);
        // optionally parse JSON if your PHP returns JSON
        // const data = JSON.parse(text);
        // if (data.success !== true) throw new Error("Server error");
    })
    .catch(err => {
        console.error("Fetch error:", err);
        // revert UI on failure
        element.innerHTML = (newValue === "☑") ? "☐" : "☑";
        alert("Could not save change: " + err.message);
    });
}