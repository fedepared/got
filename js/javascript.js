const titulo= document.querySelector("#titulo");
const dragon=document.querySelector("#dragon");
   $('#carousel').on('slid.bs.carousel', function () {
       if(dragon.classList.contains("active")){
           titulo.style.color = "black";
       }
        //titulo.style.color="white";
   })
   $('#carousel').on('slide.bs.carousel', function () {
    titulo.style.color="white";

   })


// $('#carousel').on('slid.bs.carousel', function (evt) {
//     const titulo = document.querySelector("#titulo");

//     if (evt.relatedTarget.id === 'dragon') {
//         titulo.style.color = "black";
//     }
// });
