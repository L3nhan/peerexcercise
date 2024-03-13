function upDate(figure) {
    backup = document.getElementById("view").innerHTML;
    document.getElementById("view").style.background = "url(" + figure.src + ")";
}

function unDo() {
    document.getElementById("view").innerHTML = backup;
    document.getElementById("view").style.background = "#b3b3b3";
}