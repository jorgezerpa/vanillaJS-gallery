'use strict';
let images= document.querySelector(".images");
let files= document.getElementById("file");
let image; //all images showed;
                //modal elements
let modal= document.querySelector(".img-modal");
let hide_modal= document.querySelector(".hide-modal");
let ant_btn=document.querySelector(".anterior");
let pos_btn=document.querySelector(".posterior");


            //xample images
            loadImage("images/bailey-zindel-NRQV-hBF10M-unsplash.jpg");
            loadImage("images/boxed-water-is-better-jbcY_yvsDzk-unsplash.jpg");
            loadImage("images/boxed-water-is-better-rXJXsecq8YU-unsplash.jpg");
            loadImage("images/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg");
            loadImage("images/pine-watt-2Hzmz15wGik-unsplash.jpg");
            






            //process and show new images
files.addEventListener("change", ()=>{
    for(let i=0; i<files.files.length; i++){
        processImage(files.files[i])
    }
})






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

                    // modal slider
ant_btn.addEventListener("click", ()=>{
           for(let i=0; i<image.length; i++){
            if(modal.style.backgroundImage==`url("${image[i].src}")`){
                if(i-1<0)
                {modal.style.backgroundImage="url("+ image[image.length-1].src+")";
                return "stop loop"; //read about "break" sentence
            }
             else modal.style.backgroundImage="url("+ image[i-1].src+")";
            }
        }       
})

pos_btn.addEventListener("click", ()=>{
    for(let i=0; i<image.length; i++){
     if(modal.style.backgroundImage==`url("${image[i].src}")`){
         if(i==image.length-1){
             modal.style.backgroundImage="url("+ image[0].src+")";
         return "stop loop"; //read about "break" sentence
     }
      else{
        modal.style.backgroundImage="url("+ image[i+1].src+")";
        return "stop loop";
      } 
     }
 }       
})


    





                    //FUNCTIONS

            //Process a new image(s) from the input file
function processImage(image){
    let reader= new FileReader();
    reader.readAsDataURL(image);
    reader.onload= function(){
    loadImage(this.result);                                                                                                                                             
    }
}


            //show images
function loadImage(img_url){
    images.innerHTML+=`
            <div class="img">
                <img src=${img_url}>
            </div>
            `

    image= document.querySelectorAll(".img img");
        for(let i=0; i<image.length; i++){
          image[i].addEventListener("click",(event)=>{
            modal.style.backgroundImage="url("+ event.currentTarget.src+")";
            modal.style.visibility="visible";
           })
        }
    }
            