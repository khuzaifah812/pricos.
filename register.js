/* ======================================
   Pride College School
   Student Registration JavaScript
====================================== */


const form = document.getElementById("registrationForm");

const successMessage = document.getElementById("successMessage");



/*
   Phone Number Validation
*/

function validatePhone(phone){

    const phonePattern = /^(07|03)\d{8}$/;

    return phonePattern.test(phone);

}



/*
   Form Submission
*/


form.addEventListener("submit", function(event){


    const phoneInputs = document.querySelectorAll(
        'input[type="tel"]'
    );


    let phoneValid = true;



    phoneInputs.forEach(phone => {


        if(!validatePhone(phone.value)){


            phone.style.border =
            "2px solid red";


            phoneValid = false;


        }


    });



    if(!phoneValid){


        event.preventDefault();


        alert(
        "Please enter valid Ugandan phone numbers (07XXXXXXXX)"
        );


        return;


    }



    /*
       Show success message
       after Google Form receives data
    */


    setTimeout(()=>{


        successMessage.style.display="block";


        form.reset();



        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    },2000);



});




/*
   Automatic Age Check
*/


const dateOfBirth =
document.querySelector(
'input[name="entry.754242285"]'
);


const ageInput =
document.querySelector(
'input[name="entry.1471529435"]'
);



dateOfBirth.addEventListener(
"change",
function(){


    let birthDate =
    new Date(this.value);



    let today =
    new Date();



    let age =
    today.getFullYear()
    -
    birthDate.getFullYear();



    let month =
    today.getMonth()
    -
    birthDate.getMonth();



    if(
        month < 0 ||
        (
            month === 0 &&
            today.getDate()
            <
            birthDate.getDate()
        )
    ){

        age--;

    }



    ageInput.value = age;



});




/*
   Prevent future date of birth
*/


let todayDate =
new Date()
.toISOString()
.split("T")[0];


dateOfBirth.max = todayDate;