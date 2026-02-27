//Assignment 1: Implement a function to captalize every single word in a sentence take an array data
function capitalizeSentence(sentence) {
    return sentence
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

// Example usage
let text = "hello world from javascript";
console.log(capitalizeSentence(text));

// Assignment 2: Example student data email id is valid it should has username and email if in valid nothing
//implement a functionn to captalize every single word in a sentence take an array data 
// example student data email id is valid it should hae username and email if invalid nothing



var students = [
    { id: 1, sname: "abc", semail: "abc@gmail.com" },
    { id: 2, sname: "bcd", semail: "bcdgmail.com" },
    { id: 3, sname: "bac", semail: "bac@gmail.com" }
];



function capitalizeSentence(sentence) {
    return sentence
        .split(" ")
        .map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(" ");
}




function isValidEmail(email) {
    return email.includes("@") &&
           email.split("@")[0] !== "" &&
           email.split("@")[1] !== "";
}



// Process Students

students.forEach(function(student) {

    if (isValidEmail(student.semail)) {

        var capitalName = capitalizeSentence(student.sname);

        console.log("ID:", student.id);
        console.log("Name:", capitalName);
        console.log("Email:", student.semail);
        console.log("    ");
    }

});