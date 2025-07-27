//  ---------Chapter 1.Alerts: Showing Messages to the User ---------

alert("Hello, World!")

alert("23")

alert("Every expert was once a beginner. Keep going.")

alert("Muhammad" + " " + "Sadiq")

// ---------Chapter 2.Variables for Strings: Declaring and Using Text Data ---------

userName = "Muhammad Sadiq"
console.log(userName)

// msg = "You are not stuck. You are just afraid to move."
// alert(msg)

fname = "Muhammad"
lname = "Sadiq"
console.log(fname + " " + lname)

favtquote = "Every expert was once a beginner. Keep going."
console.log(favtquote)

city = "karachi"
console.log("Welcome to " + city + "!")


//  ---------Chapter 03 Variables for Numbers: Storing and Using Numerical Data ---------


age = "19"
console.log("I am " + age + " year old.")

val1 = 10
val2 = 20
sum = val1 + val2
console.log(sum)

sum =  val2-val1
console.log(sum)

sum = val1* val2
console.log(sum)

message = "You are 20 years old."
console.log(message)


//  ---------Chapter 4.Math Expressions: Performing Arithmetic Operations ---------

x = 10
y = 5
sum = x + y
console.log(sum)

diff = x - y
console.log(diff)

product = x*y
console.log(product)

reminder = x%y
console.log(reminder)

// --------Chapter 5. Prompt: Getting Input from the User ---------

names = prompt("What is your name?");
alert("Hello, " + names);   



age = prompt("What is your age?");
alert("You are " + age + " years old.");



// num = Number(prompt("Enter a number:"));
// console.log(num *"2")


val = prompt("What is your favorite colour?");
console.log("Wow! I like blue too!"+ ".");

city =prompt("What is your city name?");
console.log("you are from " + city +".");


// ---------Chapter 6. If Statement and Comparison Operators: Controlling Flow---------

userage = prompt("enter your age");
if (userage <= "30"){
    alert("You are still young man.");
}


num = prompt("Write a number");
if (num == "Even"){
    alert("Even number");
}


let num = prompt("Write a number");
if (num == even) alert("Even number");


age = prompt("Enter your age:");
if (age < 30) {
  alert("You're still young man. ");
}

number = prompt("Enter a number:");
if (number %2 == 0) {
    alert("Even number");
}

num1 = prompt("Enter first number:");
num2 = prompt("Enter second number:");
if (num1 < num2) 
    alert("Num2 is greater that num1.");

else (num1 > num2)
    alert("Num1 is greater than num2.");


password = prompt("Enter your pasword: ");
correctpassword = "12345";
if (passord == correctpassword) {
    alert("Correct password");
} 


let a = "5";
let b = 5;

console.log("a == b:", a == b);    
console.log("a === b:", a === b);   
console.log("a != b:", a != b);     
console.log("a !== b:", a !== b);







