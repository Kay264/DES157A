(function(){

    'use strict';
     console.log('reading js');



    //section variables
    const sec1 = document.querySelector("#section1");
    const sec2 = document.querySelector("#section2");
    const sec3 = document.querySelector("#section3");
    const sec4 = document.querySelector("#section4");

    //first button, screen one
    const btn1 = document.querySelector("#ready");

    btn1.addEventListener('click', function(){

        sec2.style.zIndex = "2";

    });

    let pronoun1, pronoun2, pronoun3;

    let myText1;
    let myText2;
    let finText;


    //second button, data collection, screen two
    const formOne = document.querySelector('#form1');

    formOne.addEventListener('submit', function(e){
        e.preventDefault();

        //input variables
        const selectedPronouns = document.querySelector('input[name="pronoun"]:checked');
        const name = document.querySelector('#name').value;
        const adj1 = document.querySelector('#adj1').value;
        const noun1 = document.querySelector('#noun1').value;
        const activity1 = document.querySelector('#activity1').value;
        const activity2 = document.querySelector('#activity2').value;

       
        //pronoun selection

        
        if(selectedPronouns){
            

            switch(selectedPronouns.value){
                case "she/her":
                    pronoun1 = "her";
                    pronoun2 = "she";
                    pronoun3 = "her";
                    break;
                case "he/him":
                    pronoun1 = "his";
                    pronoun2 = "he";
                    pronoun3 = "him";
                    break;
                case "they/them":
                    pronoun1 = "their";
                    pronoun2 = "they";
                    pronoun3 = "them";
                    break;
                default:
                    pronoun1 = "";
                    pronoun2 = "";
            }

            console.log("Pronoun1:", pronoun1);
            console.log("Pronoun2:", pronoun2);
        }

       

        if(selectedPronouns && name && adj1 && noun1 && activity1 && activity2){

            myText1 = `${name} was a/an ${adj1} ${noun1}. In ${pronoun1} life ${pronoun2} spent most of ${pronoun1} time ${activity1}. While ${pronoun2} was very skilled, ${pronoun2} struggled with ${activity2}.`

            console.log(myText1);

            sec2.style.zIndex = "1";
            sec3.style.zIndex = "2";
        }else{
            alert("Please make sure to fill out all parts of the form.");
        }


    });

    //third button, data collection, screen three
    const formTwo = document.querySelector('#form2');

    formTwo.addEventListener('submit', function(e){
        e.preventDefault();

        //input variables
        const location = document.querySelector('#location').value;
        const relation = document.querySelector('#relation').value;
        const action = document.querySelector('#action').value;
        const noun2 = document.querySelector('#noun2').value;
        const feeling = document.querySelector('#feeling').value;
        const adj2 = document.querySelector('#adj2').value;
        const noun3 = document.querySelector('#noun3').value;



        if(location && relation && action && noun2 && feeling && adj2 && noun3){
            
            myText2 = `When ${pronoun2} passed ${pronoun2} was in ${location} with ${pronoun1} ${relation}. Sadly, in ${location} ${pronoun2} were ${action} to death by a ${noun2}. In ${pronoun1} final moments ${pronoun2} felt ${feeling}. ${pronoun1} friends and family remember ${pronoun3} as a/an ${adj2} ${noun3}.`

            console.log(myText2);

            sec2.style.zIndex = "0";
            sec3.style.zIndex = "1";
            sec4.style.zIndex = "2";

            finText = myText1 + myText2;

            document.querySelector("#obituary").innerHTML = finText;
            
        }else{
            alert("Please make sure to fill out all parts of the form.");
        }


    });

    const btn2 = document.querySelector("#restart");

    btn2.addEventListener("click", function(){

        // Reset form and input fields
        formOne.reset();
        formTwo.reset();

        // Clear any variables
        pronoun1 = pronoun2 = pronoun3 = '';
        myText1 = myText2 = finText = '';

        sec1.style.zIndex = "1";
        sec2.style.zIndex = "0";
        sec3.style.zIndex = "0";
        sec4.style.zIndex = "0";

    })




}());