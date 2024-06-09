// QUESTION # 1
let studentNames = [];

// QUESTION # 2
let StudentNames = new Array();

// QUESTION # 3
let staffNames = ["Ahmed", "Baber", "Farhan", "Daud", "Imran"];
console.log (staffNames);

// QUESTION # 4
let numbers = [1, 2, 3, 4, 5];
console.log (numbers);

// QUESTION # 5
let booleanArray = [true, false, true, false];
console.log(booleanArray);

// QUESTION # 6
let mixedArray = [1, "hello", 3, true, false, "Beenish"];
console.log(mixedArray);

// QUESTION # 7
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
console.log("Qualifications:")
console.log("1) " + qualifications[0]);
console.log("2) " + qualifications[1]);
console.log("3) " + qualifications[2]);
console.log("4) " + qualifications[3]);
console.log("5) " + qualifications[4]);
console.log("6) " + qualifications[5]);
console.log("7) " + qualifications[6]);
console.log("8) " + qualifications[7]);

// QUESTION # 8
let students = ["Michael", "John", "Tony", "BS"];
let scores = [320, 230, 480];
let totalMarks = 500
let per1 = scores[0]/totalMarks*100
let per2 = scores[1]/totalMarks*100
let per3 = scores[2]/totalMarks*100
console.log("Score of " + students[0] + " is " + scores[0] + ". Percentage: " + per1 + "%")
console.log("Score of " + students[1] + " is " + scores[1] + ". Percentage: " + per2 + "%")
console.log("Score of " + students[2] + " is " + scores[2] + ". Percentage: " + per3 + "%")

// QUESTION # 10
let scoreOfStudents = [320, 230, 480, 120];
scoreOfStudents.sort();
console.log("Ordered scores of students: " + scoreOfStudents); 

// QUESTION # 11
let cities = ["Karachi", "Lahore", "sibi", "Multan", "Islamabad", "Quetta"]
selectedCities = cities.slice(2,5)
console.log("cities list: " + cities);
console.log("Selected cities list: " + selectedCities);

// QUESTION # 13
let fifoArray = [];
fifoArray.push("keyboard");
console.log(fifoArray);
fifoArray.push("mouse");
console.log(fifoArray);
fifoArray.push("printer");
console.log(fifoArray);
fifoArray.push("monitor");
console.log(fifoArray);
console.log(fifoArray.shift()); 
console.log(fifoArray.shift()); 
console.log(fifoArray.shift()); 
console.log(fifoArray.shift());
console.log(fifoArray);

// QUESTION # 14
let lifoArray = [];
lifoArray.push("keyboard");
console.log(lifoArray);
lifoArray.push("mouse");
console.log(lifoArray);
lifoArray.push("printer");
console.log(lifoArray);
lifoArray.push("monitor");
console.log(lifoArray);
console.log(lifoArray.pop()); 
console.log(lifoArray.pop()); 
console.log(lifoArray.pop()); 
console.log(lifoArray.pop());
console.log(lifoArray);

