


function over(){
    document.getElementById("name").style.color = "red";
}

function out(){
    document.getElementById("name").style.color = "black";
}

function listen(){
    document.getElementById("name").addEventListener("mouseover", over)
    document.getElementById("name").addEventListener("mouseout", out)
}

document.addEventListener('DOMContentLoaded', listen) // waits for entire document to load...

