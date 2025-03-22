(function(){

    'use strict';

    console.log('reading js');

    /* const box = document.querySelector('#box');
    const pic = document.querySelector('#polaroid');
    const page = document.querySelector('body');
    const close = document.querySelector('close'); */

    const start = document.querySelector("#start");
    const Page = document.querySelector("#mainPage");
    const intro = document.querySelector("#intro");

    const sticks = document.querySelector('#sticks');
    const img5 = document.querySelector('#poloroid5');

    const mush = document.querySelector('#mush');
    const img4 =document.querySelector('#poloroid4');

    const goat = document.querySelector('#goat');
    const img2 =document.querySelector('#poloroid2');

    const leaf = document.querySelector('#leaf');
    const img3 =document.querySelector('#poloroid3');

    const bird = document.querySelector('#bird');
    const img1 =document.querySelector('#poloroid1');

    const close = document.querySelectorAll('.close')

    let imgShowing = false;



    start.addEventListener("click", function(e){

        e.preventDefault();
        console.log("func1");

        Page.className = "showing";
        intro.className = "hidden";

    });

    sticks.addEventListener("click", function(e){

        e.preventDefault();
        console.log("func2");

        if(!imgShowing){
            console.log("entered if statement");

            img5.classList.remove("hidden");  // Remove 'hidden' class to show the image
            img5.classList.add("showing");

            imgShowing = true;
        }else{
            alert('close current image please');
        };

    });

    goat.addEventListener("click", function(e){

        e.preventDefault();
        console.log("func3");


        if(!imgShowing){
            console.log("entered if statement");

            img2.classList.remove("hidden");  // Remove 'hidden' class to show the image
            img2.classList.add("showing");

            imgShowing = true;
        }else{
            alert('close current image please');
        };

    });

    mush.addEventListener("click", function(e){

        e.preventDefault();
        console.log("func4");


        if(!imgShowing){
            console.log("entered if statement");

            img4.classList.remove("hidden");  // Remove 'hidden' class to show the image
            img4.classList.add("showing");

            imgShowing = true;
        }else{
            alert('close current image please');
        };

    });

    leaf.addEventListener("click", function(e){

        e.preventDefault();
        console.log("func5");


        if(!imgShowing){
            console.log("entered if statement");

            img3.classList.remove("hidden");  // Remove 'hidden' class to show the image
            img3.classList.add("showing");

            imgShowing = true;
        }else{
            alert('close current image please');
        };

    });

    bird.addEventListener("click", function(e){

        e.preventDefault();
        console.log("func6");


        if(!imgShowing){
            console.log("entered if statement");

            img1.classList.remove("hidden");  // Remove 'hidden' class to show the image
            img1.classList.add("showing");

            imgShowing = true;
        }else{
            alert('close current image please');
        };

    });


    for(let i=0; i < close.length; i++){

        console.log(`i is ${i}`);

        close[i].addEventListener("click", function(e){

            console.log('funcClose');

                e.preventDefault();
                console.log("func2");

                img1.classList.remove("showing");  
                img1.classList.add("hidden"); 

                img2.classList.remove("showing");  
                img2.classList.add("hidden"); 

                img3.classList.remove("showing");  
                img3.classList.add("hidden");
                
                img4.classList.remove("showing");  
                img4.classList.add("hidden");
                
                img5.classList.remove("showing");  
                img5.classList.add("hidden");

                imgShowing = false;

            }); 

    };

    


}());