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

    if(element.innerHTML == "✰"){
        element.innerHTML = "★";
        element.style.color = "gold";
        
    } else {
        element.innerHTML = "✰";
        element.style.color = "black";
    }
    
}

function del(id){

    let element = document.getElementById("row" + id);
    element.remove();
    
}