document.addEventListener("DOMContentLoaded", function () {
    function loaderRemove(){
        let perfil = document.getElementById("espera");
        perfil.removeAttribute("hidden");
        let carga = document.getElementById("loader-conteiner");
        carga.setAttribute("hidden", "");
    }

    
    setTimeout(loaderRemove,1500);
});