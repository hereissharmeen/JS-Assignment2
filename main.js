// QUATION#1
let city = prompt("Which city are you from?");
if (city === "Karachi") {
alert("Welcome to city of lights");
}
// QUATION#2
let gender = prompt("Enter your gender");
if (gender === "male") {
alert("Good Morning Sir");
}
if (gender === "female") {
    alert("Good Morning Ma'am");
    }
// QUATION#3
let color = prompt("Enter the color of the traffic signal (red, yellow, green):");
if (color === "red") {
alert("Message: Must stop");
}
if (color === "yellow") {
    alert("Message: Ready to go");
}
if (color === "green") {
    alert("Message: Move now");
}
// QUATION#4
let fuel = prompt("Remaining fuel in car (in litres)");
if (fuel < 0.25) {
alert("Please refill the fuel in your car.");
}
// QUATION#5
let a = 4;
    if (++a === 5){
    alert("given condition for variable a is true");
    }
let b = 82;
    if (b++ === 83){
    alert("given condition for variable b is true");
    }
let c = 12;
    if (c++ === 13){
    alert("condition 1 is true");
    }
    if (c === 13){
    alert("condition 2 is true");
    }
    if (++c < 14){
    alert("condition 3 is true");
    }
    if(c === 14){
    alert("condition 4 is true");
    }
let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost){
    alert("The cost equals");
    }
    if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }    
    if("car" < "cat"){
    alert("car is smaller than cat");
    }
// QUATION#6
let marksObt = prompt("Enter your marks");
let marksObt1 = parseInt("marksObt");
let totalMarks = prompt("Enter total marks");
let totalMarks1 = parseInt("totalMarks");
let percentage = (marksObt / totalMarks) * 100;
let str = "Marks Sheet:\nTotal marks:" + " " + totalMarks + "\nMarks Obtained:" + " "+ marksObt + "\nPercentage:" + " "+ percentage
if ((marksObt / totalMarks) * 100 >= 80) {
alert(str + "\nGrade: A-One\nRemarks: Excellent");
}
if ((marksObt / totalMarks) * 100 >= 70) {
    alert(str + "\nGrade: A\nRemarks: Good");
}
if ((marksObt / totalMarks) * 100 >= 60) {
    alert(str + "\nGrade: B\nRemarks: You need to improve");
}
if ((marksObt / totalMarks) * 100 < 60) {
    alert(str + "\nGrade: Fail\nRemarks: Sorry");
}
// QUATION#7
let secretNum = 8
let guess = prompt("Guess the secret number")
if (guess == secretNum) {
    alert("Bingo! Correct answer.");
}
if (guess == secretNum - 1) {
    alert("Close enough to the correct answer.");
}
// QUATION#8
let num = prompt("Enter a number")
let ans = num % 3
if (ans === 0) {
    alert("The given number is divisible by 3.");
}
else {
    alert("The given number is not divisible by 3.");
}
// QUATION#9
let num1 = prompt("Enter any number")
let ans1 = num1 % 2
console.log(ans1)
if (ans1 === 0) {
    alert("The given number is an even number.");
}
if (ans1 === 1) {
    alert("The given number is an odd number.");
}
// QUATION#10
let temp = prompt("Enter temperature right now.")
if (temp > 40) {
    alert("It is too hot outside.");
}
if (temp > 30 && temp < 39) {
    alert("The weather today is normal.");
}
if (temp > 20 && temp < 29) {
    alert("Today's weather is cool.");
}
if (temp > 10 && temp < 19) {
    alert("OMG! Today’s weather is so Cool.");
}
// QUATION#11
let num_1 = parseFloat(prompt("Enter the first number:"));
let num_2 = parseFloat(prompt("Enter the second number:"));
let operator = prompt("Enter the operation (+, -, *, /, %):");
if (operator === '+') {
     alert(num_1 + num_2);
} 
if (operator === '-') {
    alert(num_1 - num_2);
}
if (operator === '*') {
    alert(num_1 * num_2);
}
if (operator === '/') {
    alert(num_1 / num_2);
}
if (operator === '%') {
    alert(num_1 % num_2);
}
   
