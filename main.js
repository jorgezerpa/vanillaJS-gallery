'use strict';
let images= document.querySelector(".images");
let files= document.getElementById("file");

let img_store=[];


files.addEventListener("change", (file)=>{

    for(let i=0; i<files.files.length; i++){
    let reader= new FileReader();
        reader.readAsDataURL(files.files[i]);
        reader.onload= function(){
            loadImage(this.result);
            img_store.push(this.result);
        }
    }
    console.log(img_store);

})


            //xample images
loadImage("images/bailey-zindel-NRQV-hBF10M-unsplash.jpg");
loadImage("images/boxed-water-is-better-jbcY_yvsDzk-unsplash.jpg");
loadImage("images/boxed-water-is-better-rXJXsecq8YU-unsplash.jpg");
loadImage("images/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg");
loadImage("images/pine-watt-2Hzmz15wGik-unsplash.jpg");


function loadImage(img_url){
    images.innerHTML+=`
    <div class="img">
        <img src=${img_url}>
    </div>
    `
}