

fetch("header.html")
.then(response => response.text())
.then(data => {
    document.getElementById("header").innerHTML = data;
});


fetch("footer.html")
.then(response => response.text())
.then(data => {
    document.getElementById("footer").innerHTML = data;
});


/* =====================================
   Pride College School
   Comments JavaScript
===================================== */


const commentForm =
document.getElementById("commentForm");


const commentSuccess =
document.getElementById("commentSuccess");




commentForm.addEventListener(
"submit",
function(event){



    const email =
    document.querySelector(
    'input[name="entry.1223393666"]'
    ).value;



    const message =
    document.querySelector(
    'textarea[name="entry.743792039"]'
    ).value;



    /*
    Email Validation */
    


    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    if(!emailPattern.test(email)){


        event.preventDefault();


        alert(
        "Please enter a valid email address"
        );


        return;


    }




    /*
    Message Length Check
    */


    if(message.length < 10){


        event.preventDefault();


        alert(
        "Message should contain at least 10 characters"
        );


        return;


    }





    /*
   Show Success Message
    After Google Form Submission
    */


    setTimeout(function(){


        commentSuccess.style.display =
        "block";


        commentForm.reset();



        window.scrollTo({

            bottom:1,

            behavior:"smooth"

        });



    },2000);



});