'use strict';
let images= document.querySelector(".images");
let files= document.getElementById("file");
let image; //all images showed;
let modal= document.querySelector(".img-modal");
let hide_modal= document.querySelector(".hide-modal");
console.log(hide_modal);

            //show new images
files.addEventListener("change", ()=>{
    for(let i=0; i<files.files.length; i++){
        newImage(files.files[i])
    }
})



            //xample images
loadImage("images/bailey-zindel-NRQV-hBF10M-unsplash.jpg");
loadImage("images/boxed-water-is-better-jbcY_yvsDzk-unsplash.jpg");
loadImage("images/boxed-water-is-better-rXJXsecq8YU-unsplash.jpg");
loadImage("images/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg");
loadImage("images/pine-watt-2Hzmz15wGik-unsplash.jpg");



                //modal
image= document.querySelectorAll(".img img");

for(let i=0; i<5; i++){
    image[i].addEventListener("click",(event)=>{
        modal.style.backgroundImage="url("+ event.currentTarget.src+")";
        modal.style.visibility="visible";
    })
}

hide_modal.addEventListener("click", ()=>{
    modal.style.visibility="hidden";
})


            //show images
function loadImage(img_url){
    images.innerHTML+=`
    <div class="img">
        <img src=${img_url}>
    </div>
    `
}

            //show a new image(s) from the input file
function newImage(image){
    let reader= new FileReader();
    reader.readAsDataURL(image);
    reader.onload= function(){
    loadImage(this.result);
    }
}