const titulo= document.querySelector("#titulo");
const dragon=document.querySelector("#dragon");
let contenedor=document.querySelector(".contenedorLibros");
const about= document.querySelector("#about");
const books= document.querySelector("#books");
const characters= document.querySelector("#characters");
const houses= document.querySelector("#houses");
const navBar=document.querySelector("#navbarToggleExternalContent");
const botones1=document.querySelector("#botones1");
const botones2=document.querySelector("#botones2");
const nombreLibro=document.querySelector("#nombreLibro");
const contenedorPersonajes=document.querySelector("#contenedorPersonajes");
const cardDeck=document.querySelector(".card-deck");
const row3=document.querySelector("#row3");
const buscaPer=document.querySelector("#personaje");

$('#carousel').on('slid.bs.carousel', function () {
    if(dragon.classList.contains("active")){
        titulo.style.color = "black";
    }
    //titulo.style.color="white";
})
$('#carousel').on('slide.bs.carousel', function () {
    titulo.style.color="white";
    
})

botones1.style.margin="0";
botones2.style.margin="0";
nombreLibro.style.margin="0";

books.addEventListener("click",(e)=>{
    e.preventDefault();
    botones1.style.marginBottom="50px";
    botones1.style.marginBottom="50px";
    nombreLibro.style.all="initial";
    navBar.setAttribute("class","collapse");

    fetch("/img/libros.jpg")
    .then((response)=>{
        return response.blob();
    })
    .then((response)=>{
        let imagen = URL.createObjectURL(response);
        contenedor.style.backgroundImage="url(" + "'" +imagen+ "'" + ")";
        contenedor.setAttribute("class","jumbotron");
        contenedor.scrollIntoView();
        
    })
    fetch("https://anapioficeandfire.com/api/books")
       .then((response)=>{
           return response.json();
        })
        .then((libros)=>{
            libros.forEach((i,e) => {
            let button = document.createElement("button");
            button.setAttribute("class","btn btn-light");
            button.setAttribute("type","button");
            button.setAttribute("data-toggle","collapse");
            button.setAttribute("data-target","#a"+e);
            button.setAttribute("aria-expanded","false");
            button.setAttribute("aria-controls","#a"+e);
            button.innerHTML=""+i.name;
            let botonCol=document.createElement("div");
            botonCol.setAttribute("class","col");
            let col=document.createElement("div");
            col.setAttribute("class","col");
            let colMultiCollapse=document.createElement("div");
            colMultiCollapse.setAttribute("class","collapse multi-collapse");
            colMultiCollapse.setAttribute("id","a"+e);
            let cardBody=document.createElement("div");
            cardBody.setAttribute("class","card card-body");
            cardBody.innerHTML=cardBody.innerHTML="ISBN: "+i.isbn+"<br>Autor/es: "+i.authors+"<br>Paginas: "+i.numberOfPages+"<br>Publicado por: "+i.publisher+"<br>pais: "+i.country+"<br>Fecha de publicacion:"+i.released+"<br>";
            if(e<5){
                botones1.appendChild(botonCol);
                botonCol.appendChild(button);
                botones1.appendChild(col);
                botonCol.appendChild(colMultiCollapse);
                colMultiCollapse.appendChild(cardBody);
            }else{
                botones2.appendChild(botonCol);
                botonCol.appendChild(button);
                botones2.appendChild(col);
                botonCol.appendChild(colMultiCollapse);
                colMultiCollapse.appendChild(cardBody);
            }
        });
    });
})



document.querySelector("#btnBuscar").addEventListener("click",()=>{
    
    for(let j =1;j<1000;j++){
    
        fetch("https://anapioficeandfire.com/api/characters/"+j)
            .then((response)=>{
                return response.json();
            })
            .then((personajes)=>{
                // if(personajes.name.toUpperCase() === buscaPer.value.toLowerCase()){
                    // console.log("valor encontrado",personajes.name)
                    // console.log("valor buscado",buscaPer.value.toLoweCase());
                    // console.log("ENCONTRADO")
                     
                if(buscaPer.value.toLowerCase() == personajes.name.toLowerCase())
                {
                    let col = document.createElement("div");
                    col.setAttribute("class","col");
                    row3.appendChild(col);
                    let card=document.createElement("div");
                    card.setAttribute("class","card text-white bg-secondary");
                    col.appendChild(card);
                    let cardImg=document.createElement("img");
                    cardImg.setAttribute("class","card-img-top");
                    cardImg.setAttribute("src","");
                    let cardBody=document.createElement("div");
                    cardBody.setAttribute("class","card-body");
                    card.appendChild(cardImg);
                    card.appendChild(cardBody);
                    let cardTitle=document.createElement("h5");
                    cardTitle.setAttribute("class","card-title");
                    let p = document.createElement("p");
                    p.setAttribute("class","card-text");
                    p.innerHTML="Cultura: "+personajes.culture+"<br>Fecha de nacimiento: "+personajes.born+"<br> Muerte: "+personajes.died+"<br> titulos: "+personajes.titles+"<br>alias: "+personajes.aliases+"<br>padre:"+personajes.father+"<br>madre: "+personajes.mother+"<br>esposa: "+personajes.spouse+"<br>lealtad a: " + personajes.allegiances + "<br>libros en los que aparece: <br>"+personajes.povBooks
                    cardBody.appendChild(cardTitle);
                    cardTitle.innerHTML=""+personajes.name+"";
                    cardBody.appendChild(p);
                }
                else{
                    document.querySelector("#alerta").style.display="block";
                }

                     
            })
    }
})

characters.addEventListener("click",(e)=>{
    e.preventDefault();
    navBar.setAttribute("class","collapse");
    fetch("/img/characters.jpg")
    .then((response)=>{
        return response.blob();
    })
    .then((response)=>{
        let imagen2 = URL.createObjectURL(response);
        contenedorPersonajes.style.backgroundImage="url(" + "'" +imagen2+ "'" + ")";
        contenedorPersonajes.setAttribute("class","jumbotron");
        contenedorPersonajes.scrollIntoView();
        document.querySelector("#input").style.display="flex";
    });
    
    
   

});
