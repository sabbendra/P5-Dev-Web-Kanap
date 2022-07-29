//Récupération de la l'ID dans l'url avec URLSearchParams
//méthode 2 pour extraire l'ID 
const urlSearchParams = new URLSearchParams(window.location.search);
console.log(window.location);

//Afficher l'id avec la variable kanapId
let kanapId = urlSearchParams.get("id");
console.log(kanapId);

//Pour aller chercher des données, Envoi de la requête HTTP pour récupérer les donnés de l'API avec la méthode fetch
fetch("http://localhost:3000/api/products/" + kanapId)
//On demande d'afficher la réponse de fetch avec json (permet de transformer la réponse en js)
    .then((response) => response.json())
//On veut afficher la réponse de fetch avec json lisible, il faut donc faire 2 then
    /*.then((responseKanap) => console.table(responseKanap))*/


    .then((responseKanap) => {
        //Affichage de l'image
        const kanapImg = document.createElement("img");
        kanapImg.setAttribute("src",responseKanap.imageUrl);
        kanapImg.setAttribute("alt",responseKanap.altTxt);
        const kanapImgContainer = document.querySelector(".item__img");
        kanapImgContainer.appendChild(kanapImg);

        //Affichage du nom
        const kanapName = responseKanap.name;
        const productName = document.getElementById("title");
        productName.textContent = kanapName;

        //Affichage du prix
        const kanapprice = responseKanap.price;
        const productprice = document.getElementById("price");
        productprice.textContent = kanapprice;
        
        //Affichage de la description
        const kanapdescription = responseKanap.description;
        const productdescription = document.getElementById("description");
        productdescription.textContent = kanapdescription;
        console.log(responseKanap);

        
    });


   /* Image ok
    Titre ok
    Prix ok
    Description ok
    Couleur ok */