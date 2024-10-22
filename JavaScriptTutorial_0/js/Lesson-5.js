console.log(document);
console.log(document.title);
console.log(document.body.innerText);
console.log(document.body.innerHTML);

//document.body.innerText = "<p>Merhaba</p>";
//document.body.innerHTML = "<p>Merhaba</p>";

function EkleFileUpload()
{
    // var div = document.createElement("div");
    // div.setAttribute("id", "imageUpload");

    var div = document.getElementById("imageUpload");

    //console.log(div);

    var inputTypeFile = document.createElement("input");
    inputTypeFile.setAttribute("type","file");

    div.appendChild(inputTypeFile);

    //document.body.appendChild(div);
}

function Gonder()
{
    var inputMesaj = document.getElementById("mesaj");

    var mesaj = inputMesaj.value;

    var divEkran = document.getElementById("ekran");
    
    divEkran.innerText = mesaj;

}