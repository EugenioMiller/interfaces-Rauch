let reaccionado = false;

let btn = document.getElementById('btnLike');
btn.addEventListener('click', () => {
    if(reaccionado) {
        btn.setAttribute("src", "img/likeNegro.png");
        reaccionado = false;
    }
    else{
        btn.setAttribute("src", "img/likeAzul.png")
        reaccionado = true;
    }
});