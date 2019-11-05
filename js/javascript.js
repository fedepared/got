const titulo= document.querySelector("#titulo");
const dragon=document.querySelector("#dragon");
let contenedor=document.querySelector("#contenedor");
const about= document.querySelector("#about");
const books= document.querySelector("#books");
const characters= document.querySelector("#characters");
const houses= document.querySelector("#houses");
const navBar=document.querySelector("#navbarToggleExternalContent");
const botones1=document.querySelector("#botones1");
const botones2=document.querySelector("#botones2");
const row1=document.querySelector("#books1");
const row2=document.querySelector("#books2");
// const imagen=document.createElement("img");

$('#carousel').on('slid.bs.carousel', function () {
    if(dragon.classList.contains("active")){
        titulo.style.color = "black";
    }
    //titulo.style.color="white";
})
$('#carousel').on('slide.bs.carousel', function () {
    titulo.style.color="white";
    
})


books.addEventListener("click",(e)=>{
    e.preventDefault();
    navBar.setAttribute("class","collapse");

    // const accordion=document.createElement("div");
    // accordion.setAttribute("class","accordion");
    // accordion.setAttribute("id","books");
    // contenedor.appendChild(accordion);
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
            
            // let card = document.createElement("div");
            // card.setAttribute("class","card");
            // let cardHeader=document.createElement("div");
            // cardHeader.setAttribute("class","card-header");
            // cardHeader.setAttribute("id","c"+e+"");
            // let h2=document.createElement("h2");
            // h2.setAttribute("class","mb-0");
            // let boton=document.createElement("button");
            // boton.setAttribute("class","btn"+" "+"btn-link"+" "+"collapsed");
            // boton.setAttribute("type","button");
            // boton.setAttribute("data-toggle","collapse");
            // boton.setAttribute("data-target","#b"+e+"")
            // boton.setAttribute("aria-expanded","false");
            // boton.setAttribute("aria-controls","b"+e+"");
            // boton.innerHTML=i.name;
            // accordion.appendChild(card);
            // card.appendChild(cardHeader);
            // cardHeader.appendChild(h2);
            // h2.appendChild(boton);
            // let collapseShow=document.createElement("div");
            // collapseShow.setAttribute("id","b"+e+"")
            // collapseShow.setAttribute("class","collapse");
            // collapseShow.setAttribute("aria-labelledby","c"+e+"");
            // collapseShow.setAttribute("data-parent","#books");
            // let cardBody=document.createElement("div");
            // cardBody.setAttribute("class","card-body");
            // cardBody.innerHTML="ISBN: "+i.isbn+"<br>Autor/es: "+i.authors+"<br>Paginas: "+i.numberOfPages+"<br>Publicado por: "+i.publisher+"<br>pais: "+i.country+"<br>Fecha de publicacion:"+i.released+"<br>"
            // card.appendChild(collapseShow);
            // collapseShow.appendChild(cardBody);
            });
        });
})
