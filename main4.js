// QUESTION # 1
let multiArray = [[], [], []];

// QUESTION # 2
let matrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
console.log(matrix[0]);
console.log(matrix[1]);
console.log(matrix[2]);

// QUESTION # 3
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// QUESTION # 4
let table = prompt("Enter a number to show its multiplication table")
let length = prompt("Enter length multiplication table")
for (let i=1; i <= length; i++) {
    console.log(table + "x" + i + "=" + i*table)
}

// QUESTION # 5
let fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for (let i=0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
for (let i=0; i < fruits.length; i++) {
    console.log("Element at index " + i + " is " + fruits[i])
}

// QUESTION # 6
document.write("Counting: ")
for (let i = 1; i <= 15; i++) {
    document.write(i + ", ");
}
document.write("<br/>")
document.write("Reverse counting: ")
for (let i = 10; i >= 1; i--) {
    document.write(i + ", ");
}
document.write("<br/>")
document.write("Even: ")
for (let i = 0; i <= 10; i++) {
    document.write(i*2 + ", ");
}
document.write("<br/>")
document.write("Odd: ")
for (let i = 1; i <= 19; i += 2) {
    document.write(i + ", ");
}
document.write("<br/>")
document.write("Series: ")
for (let i = 1; i <= 10; i++) {
    document.write(i*2 + "k" + ", ");
}

// QUESTION # 7
let bakeryItem = ["cake", "apple pie", "cookie", "chips", "patties"]
let item = prompt("Welcome to ABC bakery. What do you want to order?")
let matchFound = false;
let index = -1;
for (let i = 0; i < 5; i++) {
if (item === bakeryItem[i]) {
matchFound = true;
index = i;
break;
} 
}
if (matchFound === true) {
    alert(bakeryItem[index] + " is available at index " + index + " in our bakery.");
    }
else {
alert("We are sorry." + item + " is not available in the bakery.");
}

// QUESTION # 8
let A = [24, 53, 78, 91, 12];
let largest = A[0]; 
for (let i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i]; 
    }
}
console.log("The largest number in the array is " + largest);

// QUESTION # 9
let B = [24, 53, 78, 91, 12];
let smallest = B[0]; 
for (let i = 1; i < B.length; i++) {
    if (B[i] < smallest) {
        smallest = B[i]; 
    }
}
console.log("The smallest number in the array is " + smallest);

// QUESTION # 10
let digit = 5
for (let i = 1; i <= 20; i++) {
    document.write(i*5 + ", ");
}