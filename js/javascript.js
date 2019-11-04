const titulo= document.querySelector("#titulo");
const dragon=document.querySelector("#dragon");
let contenedor=document.querySelector(".jumbotron");
const about= document.querySelector("#about") 
const books= document.querySelector("#books")
const characters= document.querySelector("#characters")
const houses= document.querySelector("#houses")
const imagen=document.createElement("img");

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
    fetch("/img/libros.jpg")
    .then((response)=>{
        return response.blob();
    })
    .then((response)=>{
        imagen.src=URL.createObjectURL(response);
        imagen.id="libros";
        contenedor.appendChild(imagen);
    })
    fetch("https://anapioficeandfire.com/api/books")
       .then((response)=>{
           return response.json();
        })
        .then((libros)=>{
            libros.forEach((i) => {
            contenedor.innerHTML+="<div class='alert alert-info'>"+i.name+"</div>";   
            });
        });
})
