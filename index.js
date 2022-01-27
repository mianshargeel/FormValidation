console.log('This is Project 4 about Form Validation here we Practicing Regular Expresions');
const clientName = document.getElementById("clientName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validName = false;
let validEmail = false;
let validPhone = false;
// by default hiding Alert Bar Jquery Syntax NOTE to use Jquery we have to use Bootstrape 4.6 or less only
$('#failure').hide();
$('#success').hide();

// console.log(clientName, email, address, phone, message);

// adding an event on Client Name
clientName.addEventListener("blur", () => {
    console.log('Your clientName is Blured:');
    let reg = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/; //(USED CharSet + (grouped+CharSet+Quantifaier))Nmae can be starts only from a-zor A-Z(Charate Symbol ^) and name can be digits from 0-9 and a-z 0r A-Z and max char from 3 to 10 and $ sign to end till 10 char(max name)
    let str = clientName.value;
    console.log(reg, str);

    if (reg.test(str)) {
        console.log('You Entered a Valid Name');
        clientName.classList.remove("is-invalid"); //we are adding and removing class(is-invalid) here and class(invalid-feedback) in our html file 
        validName = true;

    } else {
        console.log('You Entered a In-Valid Name');
        clientName.classList.add("is-invalid");
        validName = false;

    }

});

// adding an event on Client Name
email.addEventListener("blur", () => {
    console.log('Your email is Blured:');

    //Reg Exp for email /^()@()\.()$/; i-e exam5-gW@8_On.com
    let reg = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,5}$/; //(+ means one or more expresions can be)
    let str = email.value;
    console.log(reg, str);

    if (reg.test(str)) {
        console.log('You Entered a Valid email');
        email.classList.remove("is-invalid");
        validEmail = true;
    } else {
        console.log('You Entered a In-Valid email');
        email.classList.add("is-invalid");
        validEmail = false;

    }

});

// adding an event on Client Name
phone.addEventListener("blur", () => {
    console.log('Your phone is Blured:');

    let reg = /^([\+0-9]+){12}$/; //(+ means one or more expresions can be)
    let str = phone.value;
    console.log(reg, str);

    if (reg.test(str)) {
        console.log('You Entered a Valid phone');
        phone.classList.remove("is-invalid");
        validPhone = true;
    } else {
        console.log('You Entered a In-Valid phone');
        phone.classList.add("is-invalid");
        validPhone = false;

    }


});

//Adding event on Submit button
let submit = document.getElementById("submit");
let success = document.getElementById("success");
let failure = document.getElementById("failure");
// console.log(submit);


submit.addEventListener("click", (e) => {
    console.log("Submitted your form");
    console.log(validName, validEmail, validPhone);

    e.preventDefault();
    if (validName && validEmail && validPhone) {
        console.log('You have Entered Valid Name, Email and Phone number');
        success.classList.add("show");
        // failure.classList.remove("show");

        //using Jquery Syntax to show and hide alert
        // $('#failure').alert('close');
        $('#success').show();
        $('#failure').hide();

    } else {
        console.log('You entered In-Valid Name, Email or Phone number Please Correct that, Hence Submiting');

        failure.classList.add("show");
        // success.classList.remove("show");

        //using Jquery Syntax to show and hide alert NOTE to use Jquery we have to use Bootstrape 4.6 or less only
        // $('#success').alert('close');
        $('#failure').show();
        $('#success').hide();
    }
});