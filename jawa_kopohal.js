function done(id){
    
    if(document.getElementById("done" + id).innerHTML == "☐"){
        document.getElementById("done" + id).innerHTML = "☑"
    }else{
        document.getElementById("done" + id).innerHTML = "☐"
    }
}