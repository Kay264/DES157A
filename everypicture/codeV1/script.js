(function(){

    'use strict';

    console.log('reading js');

    const box = document.querySelector('#box');
    const pic = document.querySelector('#polaroid');
    const page = document.querySelector('body');
    const close = document.querySelector('#close');

    box.addEventListener('click', function(e){

        e.preventDefault();
        console.log("func1");
        
    
        pic.style.opacity = "1";

    });

    close.addEventListener("click", function(e){

        e.preventDefault();
        console.log("func2");

        pic.style.opacity = "0";


    });


}());