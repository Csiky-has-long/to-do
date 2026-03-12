function done(id){

    let element = document.getElementById("done" + id);

    if(element.innerHTML == "☐"){
        element.innerHTML = "☑";
        element.style.color = "lime";
        
    } else {
        element.innerHTML = "☐";
        element.style.color = "black";
        
    }
    
}

function star(id){

    let element = document.getElementById("star" + id);

    if(element.innerHTML == "★"){
        element.innerHTML = "✰";
        element.style.color = "black";
        
    } else {
        element.innerHTML = "★";
        element.style.color = "gold";
    }
    
}

function del(id){
    fetch('delete.php?id=' + id)
    .then(response => response.text())
    .then(data => {
        if (data === "Deleted successfully") {
            let element = document.getElementById("row" + id);
            element.remove();
        } else {
            alert("Delete failed: " + data);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Error deleting task");
    });
}