// 27-7-26 - Task 5

// Task 1 - Student Registration

let studentName = "Subashree";
let department = "Bcom(CA)";
let cgpa = 8.6;

let status = cgpa >= 8 ? "Eligible" : "Not Eligible";

console.log("Student Name :", studentName); // Student Name : Subashree
console.log("Department :", department); // Department : Bcom(CA)
console.log("CGPA :", cgpa); // CGPA : 8.6
console.log("Status :", status); // Status : Eligible

// Task 2 - Online Shopping Bill

let productPrice = 2500;
let quantity = 3;

let total = productPrice * quantity;
let discount = total > 5000 ? total * 0.10 : 0;
let finalPrice = total - discount;

console.log("Total :", total); // Total : 7500
console.log("Discount :", discount); // Discount : 750
console.log("Final Price :", finalPrice); // Final Price : 6750

// Task 3 - Employee Salary

let basicSalary = 35000;
let bonus = 5000;
let tax = 3000;

let netSalary = basicSalary + bonus - tax;

console.log("Basic Salary :", basicSalary); // Basic Salary : 35000
console.log("Bonus :", bonus); // Bonus : 5000
console.log("Tax :", tax); // Tax : 3000
console.log("Net Salary :", netSalary); // Net Salary : 37000

// Task 4 - Movie Ticket 

let movie = "Ayan";
let ticketPrice = 180;
let tickets = 5;

let total = ticketPrice * tickets;

console.log("Movie :", movie); // Movie : Ayan
console.log("Tickets :", tickets); // Tickets : 5
console.log("Total :", total); // Total : 900

// Task 5 - Login system

let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
    console.log("Login Success"); // Login Success
} else {
    console.log("Invalid Username or Password");
}

// Task 6 - Electricity Bill

let units = 250;
let bill = 0;

if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = (100 * 5) + ((units - 100) * 7);
} else {
    bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
}

console.log("Units :", units); // Units : 250
console.log("Total Bill : ₹" + bill); // Total Bill : ₹1700

// Task 7 - Restaurant Order

let menu = ["Dosa", "Idly", "Poori", "Meals"];

console.log("First Item :", menu[0]); // First Item : Dosa
console.log("Last Item :", menu[menu.length - 1]); // Last Item : Meals
console.log("Total Items :", menu.length); // Total Items : 4

menu.push("Fried Rice");

menu.splice(1, 1);

console.log("Updated Menu :", menu); // Updated Menu : [ 'Dosa', 'Poori', 'Meals', 'Fried Rice' ]

// Task 8 - Employee Object

let employee = {
    name: "Subashree",
    role: "Frontend Developer",
    salary: 40000
};

console.log("Employee Name :", employee.name); // Employee Name : Subashree
console.log("Role :", employee.role); // Role : Frontend Developer
console.log("Salary :", employee.salary); // Salary : 40000

// Task 9 - Product Inventory

let products = [
    "Mouse",
    "Keyboard",
    "Monitor",
    "CPU",
    "Speaker"
];

for (let i = 0; i < products.length; i++) {
    console.log((i + 1) + " " + products[i]);
}

// Output:
// 1 Mouse
// 2 Keyboard
// 3 Monitor
// 4 CPU
// 5 Speaker

// Task 10 - Function

function calculateArea(length, width) {
    let area = length * width;
    console.log("Area =", area); // Area = 200
}

calculateArea(20, 10);

// Task 11 - Bank Deposit

let balance = 5000;

function deposit(amount) {
    balance = balance + amount;
    console.log("After Deposit :", balance); // Current Balance : 5000
}

function withdraw(amount) {
    balance = balance - amount;
    console.log("After Withdraw :", balance); // After Deposit : 7000
}

console.log("Current Balance :", balance); // After Withdraw : 6000

deposit(2000);
withdraw(1000);

console.log("Final Balance :", balance); // Final Balance : 6000

// Task 12 - Callback Function

function addition(a, b) {
    return a + b;
}

function calculate(callback, num1, num2) {
    let result = callback(num1, num2);
    console.log(result); // 30
    console.log("Calculation Completed"); // Calculation Completed
}

calculate(addition, 10, 20);

// Task 13 - Generator Function

function* couponCodes() {
    yield "WELCOME10";
    yield "SAVE20";
    yield "SUPER30";
    yield "BIG50";
    yield "MEGA100";
}

let coupons = couponCodes();

console.log(coupons.next().value); // WELCOME10
console.log(coupons.next().value); // SAVE20
console.log(coupons.next().value); // SUPER30
console.log(coupons.next().value); // BIG50
console.log(coupons.next().value); // MEGA100

// Task 14 - Curring

function discount(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log(discount(10)(20)(30)); // 60

// Task 15 - Spread Operator

let frontend = ["HTML", "CSS", "JS"];
let backend = ["Node", "Express", "MongoDB"];

let fullStack = [...frontend, ...backend];

console.log(fullStack); // ["HTML", "CSS", "JS", "Node", "Express", "MongoDB"]

// Task 16 - Rest Operator

function sum(...numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    console.log(total); // 150
}

sum(10, 20, 30, 40, 50);

// Task 17 - Array Destructuring

let colors = ["Red", "Blue", "Green", "Yellow"];

let [color1, color2, color3, color4] = colors;

console.log(color1); // Red
console.log(color2); // Blue
console.log(color3); // Green
console.log(color4); // Yellow

// Task 18 - Object Destructuring

let user = {
    name: "Navi",
    city: "Salem",
    role: "Developer"
};

let { name, city, role } = user;

console.log(name); // Navi
console.log(city); // Salem
console.log(role); // Developer

// Task 19 - Shopping Cart

let cart = ["Mobile", "Laptop", "Watch"];

console.log("Original Cart :", cart); // Original Cart : [ 'Mobile', 'Laptop', 'Watch' ]

// push()
cart.push("Headphones");
console.log("After push() :", cart); // After push() : [ 'Mobile', 'Laptop', 'Watch', 'Headphones' ]

// pop()
cart.pop();
console.log("After pop() :", cart); // After pop() : [ 'Mobile', 'Laptop', 'Watch' ]

// shift()
cart.shift();
console.log("After shift() :", cart); // After shift() : [ 'Laptop', 'Watch' ]

// unshift()
cart.unshift("Tablet");
console.log("After unshift() :", cart); // After unshift() : [ 'Tablet', 'Laptop', 'Watch' ]

// Task 20 - Product search

let products = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Speaker"
];

if (products.includes("Monitor")) {
    console.log("Product Available"); // Product Available
} else {
    console.log("Out of Stock");
}