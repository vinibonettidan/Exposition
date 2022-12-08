var listaFilme = [];

function Adicionar() {
    var imagemFilme = document.getElementById("img").value;
    console.log(imagemFilme);
    listaFilme.push(imagemFilme);

    //console.log(listaFilme);

    for (i = 0; i < listaFilme.length; i++) {
        var img = document.createElement("img");
        img.src = listaFilme[i];
        document.body.appendChild(img);
    }
}
