function changecolor(color){
    let c = document.getElementById('dvDisplay');
    if(c != null){
        c.style.backgroundColor = color;
    } else {
        console.log("não encontrado");
    }
}