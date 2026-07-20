// // Task 1

// const companyName = "Stackly";

// let employeeName = prompt("Enter Employee Name:");

// let employeeID = "STK-26-4036";

// console.log("Company : " + companyName); // Stackly
// console.log("Employee Name : " + employeeName); // Subashree S
// console.log("Employee ID : " + employeeID); // STK-26-4036


// // Task 2

// const collegeName = "krish College of Arts and science";

// let studentName = prompt("Enter Student Name:");

// let course = prompt("Enter Course:");

// console.log("College : " + collegeName); // krish College of Arts and science
// console.log("Student : " + studentName); // Subashree S
// console.log("Course : " + course); // Bcom(CA)


// // Task 3

// const restaurantName = "ITC Grand chola";

// let customerName = prompt("Enter Customer Name:");

// let foodName = prompt("Enter Food Name:");

// let quantity = prompt("Enter Quantity:");

// console.log("Restaurant : " + restaurantName); // ITC Grand chola
// console.log("Customer : " + customerName); // Subashree 
// console.log("Food : " + foodName); // White sauce pasta
// console.log("Quantity : " + quantity); // 1


// // Task 4

// const hospitalName = "GEM Hospital";

// let patientName = prompt("Enter Patient Name:");

// let tokenNumber = "G100";

// console.log("Hospital : " + hospitalName); // GEM hospital
// console.log("Patient : " + patientName); // Subashree
// console.log("Token Number : " + tokenNumber); // 100


// // Task 5

// const theatreName = "Broadway Cinemas";

// let movieName = prompt("Enter Movie Name:");

// let customerName = prompt("Enter Customer Name:");

// let seatNumber = "C15";

// console.log("Theatre : " + theatreName); // Broadway cinemas
// console.log("Movie : " + movieName); // Ayan
// console.log("Customer : " + customerName); // Subashree
// console.log("Seat Number : " + seatNumber); // C15


// // Task 6

// const shopName = "Sha Mobiles";
// const customerName = prompt("Enter your name:");
// const mobileModel = prompt("Enter the mobile model:");

// let price = prompt("Enter the mobile price:");

// console.log("Shop Name: " + shopName);      // Sha Mobiles
// console.log("Customer Name: " + customerName); // Subashree
// console.log("Mobile Model: " + mobileModel);   // Samsung Galaxy M21
// console.log("Price: ₹" + price);               // ₹45000


// // Task 7

// const gymName = "FitZone Gym";
// const memberName = prompt("Please enter your name:");

// let membershipFee = prompt("Please enter your membership fee:");

// console.log("Gym Name: " + gymName); // FitZone Gym
// console.log("Member Name: " + memberName); // Subashree
// console.log("Membership Fee: ₹" + membershipFee); // ₹3000


// // Task 8

// const bankName = "Indian Overseas Bank";
// const userName = prompt("Please enter your name:");

// console.log("Bank Name: " + bankName); // Indian Overseas Bank
// console.log("Welcome " + userName); // Subashree S


// // Task 9

// const travelsName = "Krish Travels";
// const passengerName = prompt("Please enter your name:");

// let seatNumber = prompt("Please enter your seat number:");

// console.log("Travels Name: " + travelsName); // Krish Travels
// console.log("Passenger Name: " + passengerName); // Subashree
// console.log("Seat Number: " + seatNumber); // 23


// // Task 10

// const websiteName = "Amazon";
// const productName = prompt("Please enter the product name:");
// const customerName = prompt("Please enter your name:");

// let price = prompt("Please enter the product price:");

// console.log("Website Name: " + websiteName); // Amazon
// console.log("Product Name: " + productName); // Smart Tv
// console.log("Customer Name: " + customerName); // Subashree
// console.log("Price: ₹" + price); // ₹50000


// // Task 11

// console.log("Registration Successful"); // Registration Successful


// // Task 12

// console.error("Payment Failed"); // Payment Failed


// // Task 13

// console.warn("Battery Low"); // Battery Low


// // Task 14

// console.log("Loading..."); // Loading...
// console.log("Welcome"); // Welcome

// console.clear(); //


// // Task 15

// alert("Welcome to Amazon"); // Welcome to Amazon


// // Task 16

// let logout = confirm("Do you want to logout?");

// console.log(logout); // true - if user clicks ok // false - if user clicks cancel


// // Task 17

// let city = prompt("Please enter your city:");

// console.log("Your City : " + city); // Coimbatore


// // Task 18

// var product = "Laptop";

// product = "Mobile";

// var product = "Tablet";

// console.log(product); // Tablet


// // Task 19

// let salary = 25000;

// salary = 30000;

// console.log(salary); // 30000


// // Task 20

// const company = "Walmart";

// console.log(company); // Walmart


// 20-7-26 Task2

// Task 1 - Employee Profile

let name = "Subashree";
let employeeId = "STK-26-4036";
let department = "Frontend";
let salary = 25000;
let isPermanent = true;

console.log("Name : " + name); //Name : Subashree
console.log("Employee ID : " + employeeId); // Employee ID : STK-26-4036
console.log("Department : " + department); // Department : Frontend
console.log("Salary : " + salary); // Salary : 25000
console.log("Permanent : " + isPermanent); // Permanent : true

// Task 2 - Student Details

let student = {
    name: "Subashree",
    age: 22,
    course: "B.Com Computer Applications",
    college: "Krish College",
    passed: true
};

console.log("Student Name : " + student.name); // Student Name : Subashree
console.log("Course : " + student.course); // Course : B.Com Computer Applications
console.log("Passed Status : " + student.passed); // Passed Status : true

// Task 3 - Shopping Cart

let cart = ["Milk", "Rice", "Oil", "Sugar", "Soap"];

console.log(cart[0]); // Milk     
console.log(cart[2]); // Oil    
console.log(cart[4]); // Soap   
console.log(cart.length); // 5             

// Task 4 - Company Employee Database

let employee = {
    name: "Subashree",
    designation: "Frontend Developer",
    salary: 35000,
    skills: ["HTML", "CSS", "JavaScript"]
};

console.log("Employee Name : " + employee.name); // Employee Name : Subashree
console.log("Designation : " + employee.designation); // Designation : Frontend Developer
console.log("Second Skill : " + employee.skills[1]); // Second Skill : CSS

// Task 5 - Salary Calculation

let basicSalary = 25000;
let bonus = 5000;

let totalSalary = basicSalary + bonus;

console.log(totalSalary); // 30000

// Task 6 - GST Calculator

let productPrice = 4500;
let gst = 18;

let gstAmount = (productPrice * gst) / 100;

let finalAmount = productPrice + gstAmount;

console.log("GST Amount : " + gstAmount); // GST Amount : 810
console.log("Final Amount : " + finalAmount); // Final Amount : 5310

// Task 7 - Even or Odd 

let number = 25;

let result = (number % 2 === 0) ? "Even Number" : "Odd Number";

console.log(result); // Odd Number

// Task 8 - Login System

let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
    console.log("Login Success"); // Login Success
} else {
    console.log("Invalid Credentials");
}

// Task 9 - Voting Eligibility 

let age = 22;

let result = (age >= 18) ? "Eligible for Vote" : "Not Eligible";

console.log(result); // Eligible for Vote

// Task 10 - EMI Eligibility

let salary = 40000;
let experience = 3;

if (salary > 30000 && experience >= 2) {
    console.log("Eligible"); 
} else {
    console.log("Not Eligible");
}

// Task 11 - Product Discount

let price = 5000;
let discount = 10;

let discountAmount = (price * discount) / 100;

let finalPrice = price - discountAmount;

console.log("Discount Amount : " + discountAmount); // Discount Amount : 500
console.log("Final Price : " + finalPrice); // Final Price : 4500

// Task 12 - User Registration

let name = "Subashree";
let email = "subashree@gmail.com";
let phone = "9876543210";
let city = "Coimbatore";

console.log("----- User Details -----"); // ----- User Details -----
console.log("Name : " + name); // Name : Subashree
console.log("Email : " + email); // Email : subashree@gmail.com
console.log("Phone : " + phone); // Phone : 9876543210
console.log("City : " + city); // City : Chennai

// Task 13 -  Social Media Profile 

let profile = {
    username: "Subashree",
    followers: 5000,
    following: 300,
    posts: 120,
    verified: true
};

console.log("Username : " + profile.username); // Username : Subashree
console.log("Followers : " + profile.followers); // Followers : 5000
console.log("Verified Status : " + profile.verified); // Verified Status : true

// Task 14 - Restaurant Menu 

let menu = ["Idli", "Dosa", "Poori", "Meals", "Parotta"];

console.log("Second Item : " + menu[1]); // Second Item : Dosa
console.log("Fourth Item : " + menu[3]); // Fourth Item : Meals
console.log("Last Item : " + menu[menu.length - 1]); // Last Item : Parotta

// Task 15 - Banking System

let accountBalance = 25000;
let withdraw = 8000;

let remainingBalance = accountBalance - withdraw;

console.log("Remaining Balance : " + remainingBalance); // Remaining Balance : 17000

// Task 16 - Mobile Store

let mobilePrice = 25000;
let exchange = 5000;
let coupon = 2000;

let finalAmount = mobilePrice - exchange - coupon;

console.log("Final Amount : " + finalAmount); // Final Amount : 18000

// Task 17 - Employee Promotion

let experience = 5;
let performance = true;

if (experience >= 5 && performance == true) {
    console.log("Promotion Approved"); // Promotion Approved
} else {
    console.log("Promotion Pending");
}

// Task 18 - Movie Ticket

let ticketPrice = 180;
let people = 5;

let totalAmount = ticketPrice * people;

console.log("Total Amount : " + totalAmount); // Total Amount : 900

// Task 19 -  Weather App 

let temperature = 38;

let result = (temperature > 35) ? "Hot Day" : "Normal Weather";

console.log(result); // Hot Day

// Task 20 - Mini HR Management (Real-Time)

let employee = {
    empCode: "STK-26-4036",
    name: "Subashree",
    department: "Frontend",
    designation: "Associate Software Engineer",
    salary: 28000,
    skills: ["HTML", "CSS", "JavaScript", "React"],
    permanent: true
};

console.log("Employee Code : " + employee.empCode); // Employee Code : STK-26-4036
console.log("Employee Name : " + employee.name); // Employee Name : Subashree
console.log("Department : " + employee.department); // Department : Frontend
console.log("Salary : " + employee.salary); // Salary : 28000
console.log("Last Skill : " + employee.skills[employee.skills.length - 1]); // Last Skill : React
console.log("Permanent Status : " + employee.permanent); // Permanent Status : true






