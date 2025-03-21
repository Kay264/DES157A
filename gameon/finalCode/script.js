(function(){
    'use strict';
    console.log('reading js');


    //___________________VARIABLES________________________

    //OVERALL
    const infobtn = document.querySelector("#infoImg");
    const soundbtn = document.querySelector("#soundImg");
    const info = document.querySelector("#info");
    const xbtn = document.querySelector("#exitbtn");

    const sections = document.querySelector("#sections");

    let currentScn = 1; //change for each screen we're on
    
    //PAGE1:INTRO

    //PAGE2:MAIN PAGE

    //PAGE3:WIN PAGE

    //PAGE4:LOSS PAGE

    //PAGE5:END PAGE


    //_____________________CLASS__________________________

    //____________________FUNCTIONS_______________________


    //OVERALL
    
    infobtn.addEventListener("click", function(e){

        e.preventDefault();

        console.log("btn1 clicked")
        info.style.opacity = "1";
        sections.style.opacity = "0.25";

    });

    xbtn.addEventListener("click", function(e){

        e.preventDefault();

        console.log("btn2 clicked")
        info.style.opacity = "0";
        sections.style.opacity = "";

    });
    
    //PAGE1:INTRO

    //PAGE2:MAIN PAGE

    //PAGE3:WIN PAGE

    //PAGE4:LOSS PAGE

    //PAGE5:END PAGE


})();