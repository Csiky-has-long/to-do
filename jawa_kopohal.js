function done(id){

    let element = document.getElementById("done" + id);

    if(element.innerHTML == "☐"){
        element.innerHTML = "☑";
        
    } else {
        element.innerHTML = "☐";
        
    }
    
}

function star(id){

    let element = document.getElementById("star" + id);

    if(element.innerHTML == "✰"){
        element.innerHTML = "★";
        
    } else {
        element.innerHTML = "★";
        
    }
    
}