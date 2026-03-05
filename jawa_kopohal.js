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
        return response.json(); // expect JSON now
    })
    .then(data => {
        console.log("done.php response:", data);
        if (!data.success) throw new Error("DB update failed");
    })
    .catch(err => {
        console.error("Fetch error:", err);
        element.innerHTML = (newValue === "☑") ? "☐" : "☑";
        alert("Could not save change: " + err.message);
    });
}