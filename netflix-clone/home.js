let email = document.getElementById("email");
let getStartedBtn = document.getElementById("getStartedBtn");
// let requiredMail = document.getElementById("requiredMail");

getStartedBtn.addEventListener("click",()=>{
    email.value.trim() === "" ?alert("please enter you Email or mobile number")
    
: console.log("Valid email");
    // (email === " ")?console.log("enter"):console.log("valid");
});

let email2 = document.getElementById("email-2");
let getStartedBtn2 = document.getElementById("getStartedBtn-2");
// let requiredMail = document.getElementById("requiredMail");

getStartedBtn2.addEventListener("click",()=>{
    email2.value.trim() === "" ?alert("please enter you Email or mobile number")
    
: console.log("Valid email");
    // (email === " ")?console.log("enter"):console.log("valid");
});


// Get all question buttons
var question1 = document.getElementById("home-QA-1");
var question2 = document.getElementById("home-QA-2");
var question3 = document.getElementById("home-QA-3");
var question4 = document.getElementById("home-QA-4");
var question5 = document.getElementById("home-QA-5");

// Get all answer divs
var answer_div1 = document.getElementById("answer-1");
var answer_div2 = document.getElementById("answer-2");
var answer_div3 = document.getElementById("answer-3");
var answer_div4 = document.getElementById("answer-4");
var answer_div5 = document.getElementById("answer-5");

var isAnswerDisplayed = false; // Variable to track if the answer has been displayed

// Define the function to handle click events
let callAns = (question, answer_div) => {
    if (!isAnswerDisplayed) { // Check if the answer is not displayed
        let ans = document.createElement("p");
        answer_div.style.display = 'block'; // Display the answer
        answer_div.appendChild(ans);
        isAnswerDisplayed = true; // Update the flag to indicate that the answer is displayed
    } else {
        answer_div.style.display = 'none'; // Hide the answer
        isAnswerDisplayed = false; // Update the flag to indicate that the answer is not displayed
    }
};

// Attach event listeners to each question button
question1.addEventListener("click", () => callAns(question1, answer_div1));
question2.addEventListener("click", () => callAns(question2, answer_div2));
question3.addEventListener("click", () => callAns(question3, answer_div3));
question4.addEventListener("click", () => callAns(question4, answer_div4));
question5.addEventListener("click", () => callAns(question5, answer_div5));
