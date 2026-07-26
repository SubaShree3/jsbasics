// // 24-7-26 Task 4

// // Task 1 - Student Registration Form

// let studentName = "Subashree";
// let age = 22;
// let department = "Computer Applications";
// let cgpa = 8.9;


// console.log("Student Name: " + studentName); // Student Name: Subashree
// console.log("Age: " + age); // Age: 22
// console.log("Department: " + department); // Department: Computer Applications
// console.log("CGPA: " + cgpa); // CGPA: 8.9

// // Task 2 - Employee Requirement Details

// let employee = {
//     employeeId: "STK-26-4036",
//     employeeName: "Subashree",
//     department: "IT",
//     salary: 35000
// };

// console.log("Employee Name: " + employee.employeeName); // Employee Name: Subashree
// console.log("Salary: " + employee.salary); // Salary: 35000

// // Task 3 - Shopping Cart Requirement

// let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Headset"];

// console.log("First Product: " + products[0]); // First Product: Laptop
// console.log("Last Product: " + products[products.length - 1]); // Last Product: Headset
// console.log("Total Number of Products: " + products.length); // Total Number of Products: 5

// // Task 4 - Students Mark

// let subject1 = 85;
// let subject2 = 90;
// let subject3 = 78;
// let subject4 = 88;
// let subject5 = 95;

// let total = subject1 + subject2 + subject3 + subject4 + subject5;
// let average = total / 5;

// console.log("Total Marks: " + total); // Total Marks: 436
// console.log("Average Marks: " + average); // Total Marks: 436 Average Marks: 87.2

// // Task 5 -  Age Checker

// let age = 20;

// if (age >= 18) {
//     console.log("Eligible to Vote"); // Eligible to Vote
// } else {
//     console.log("Not Eligible"); // Not Eligible
// }

// // Task 6 - Login system

// let username = "admin";
// let password = "12345";

// if (username === "admin" && password === "12345") {
//     console.log("Login Successful"); // Login Successful
// } 
// else {
//     console.log("Invalid Username or Password");
// }

// // Task 7 - Calculator

// let num1 = 20;
// let num2 = 5;

// let addition = num1 + num2;
// let subtraction = num1 - num2;
// let multiplication = num1 * num2;
// let division = num1 / num2;
// let modulus = num1 % num2;

// console.log("Addition: " + addition); // Addition: 25
// console.log("Subtraction: " + subtraction); // Subtraction: 15
// console.log("Multiplication: " + multiplication); // Multiplication: 100
// console.log("Division: " + division); // Division: 4
// console.log("Modulus: " + modulus); // Modulus: 0

// // Task 8 - Electricity bill

// let customerName = "Subashree";
// let units = 250;
// let billAmount = 0;


// if (units <= 100) {
//     billAmount = units * 2;
// }
// else if (units <= 200) {
//     billAmount = units * 4;
// }
// else {
//     billAmount = units * 6;
// }

// console.log("Customer Name: " + customerName); // Customer Name: Subashree
// console.log("Units Consumed: " + units); // Units Consumed: 250
// console.log("Bill Amount: ₹" + billAmount); // Bill Amount: ₹1500

// // Task 9 - // Employee Salary 

// let basicSalary = 30000;
// let bonus = 5000;
// let grossSalary = basicSalary + bonus;

// console.log("Basic Salary: ₹" + basicSalary); // Basic Salary: ₹30000
// console.log("Bonus: ₹" + bonus); // Bonus: ₹5000
// console.log("Gross Salary: ₹" + grossSalary); // Gross Salary: ₹35000

// // Task 10 - Movie Ticket 

// let ticketPrice = 200;
// let numberOfTickets = 3;
// let totalAmount = ticketPrice * numberOfTickets;

// console.log("Ticket Price: ₹" + ticketPrice); // Ticket Price: ₹200
// console.log("Number of Tickets: " + numberOfTickets); // Number of Tickets: 3
// console.log("Total Amount: ₹" + totalAmount); // Total Amount: ₹600

// // Task 11 - Product Discount

// let productName = "Laptop";
// let price = 60000;
// let discount;
// let finalPrice;

// if (price > 5000) {
//     discount = price * 20 / 100;
// }
// else {
//     discount = price * 10 / 100;
// }

// finalPrice = price - discount;

// console.log("Product Name: " + productName); // Product Name: Laptop
// console.log("Original Price: ₹" + price); // Original Price: ₹60000
// console.log("Discount: ₹" + discount); // Discount: ₹12000
// console.log("Final Price: ₹" + finalPrice); // Final Price: ₹48000

// // Task 12 - Function Practice

// function studentDetails(name, department, cgpa) {
//     console.log("Student Name: " + name);
//     console.log("Department: " + department);
//     console.log("CGPA: " + cgpa);
// }

// studentDetails("Subashree", "Computer Applications", 8.5);

// // Output:
// // Student Name: Subashree
// // Department: Computer Applications
// // CGPA: 8.5

// // Task 13 - // Bank balance

// let accountHolder = "Subashree";
// let currentBalance = 50000;
// let withdrawAmount = 10000;
// let remainingBalance = currentBalance - withdrawAmount;

// console.log("Account Holder: " + accountHolder); // Account Holder: Subashree
// console.log("Current Balance: ₹" + currentBalance); // Current Balance: ₹50000
// console.log("Withdraw Amount: ₹" + withdrawAmount); // Withdraw Amount: ₹10000
// console.log("Remaining Balance: ₹" + remainingBalance); // Remaining Balance: ₹40000

// // Task 14 - Mobile Recharge 

// let mobileNumber = "9876543210";
// let rechargeAmount = 299;

// console.log("Recharge Successful"); // Recharge Successful
// console.log("Mobile Number: " + mobileNumber); // Mobile Number: 9876543210
// console.log("Recharge Amount: ₹" + rechargeAmount); // Recharge Amount: ₹299

// // Task 15 - Restaurant Bill

// let foodName = "Burger";
// let quantity = 3;
// let price = 150;
// let totalBill = quantity * price;

// console.log("Food Name: " + foodName); // Food Name: Burger
// console.log("Quantity: " + quantity); // Quantity: 3
// console.log("Price: ₹" + price); // Price: ₹150
// console.log("Total Bill: ₹" + totalBill); // Total Bill: ₹450


// Mini - Project
// Employee Management System

let employees1 = [
  {
    id: "EMP0001",
    name: "Tej",
    age: 24,
    department: "Frontend Developer",
    salary: 35000,
    experience: 2,
    skills: ["HTML", "CSS", "Bootstrap"]
  },
  {
    id: "EMP0002",
    name: "Dev",
    age: 26,
    department: "Backend Developer",
    salary: 45000,
    experience: 4,
    skills: ["Java", "Spring Boot", "MySQL"]
  },
  {
    id: "EMP0003",
    name: "Reno",
    age: 29,
    department: "Full Stack Developer",
    salary: 60000,
    experience: 6,
    skills: ["React.js", "Node.js", "MongoDB"]
  },
  {
    id: "EMP0004",
    name: "Vicky",
    age: 25,
    department: "UI/UX Designer",
    salary: 40000,
    experience: 3,
    skills: ["Figma", "Canva", "Adobe Illustrator"]
  },
  {
    id: "EMP0005",
    name: "Riya",
    age: 27,
    department: "Software Tester",
    salary: 38000,
    experience: 5,
    skills: ["Selenium", "Postman", "JMeter"]
  }
];

function showEmployee() {
    for (let employee of employees1) {
        console.log("...................................");
        console.log("Employee ID :", employee.id); // 
        console.log("Employee Name :", employee.name);
        console.log("Age :", employee.age);
        console.log("Department :", employee.department);
        console.log("Salary : ₹" + employee.salary);
        console.log("Experience :", employee.experience + " Years");
        console.log("Skills :", employee.skills);
    }
}

function bonusSalary() {
    let bonus = 5000;

    for (let employee of employees1) {
        let totalSalary = employee.salary + bonus;
        console.log(employee.name + " Total Salary : ₹" + totalSalary);
    }
}

function Experience() {
    for (let employee of employees1) {
        if (employee.experience >= 5) {
            console.log(employee.name + " : Senior Employee");
        } else {
            console.log(employee.name + " : Junior Employee");
        }
    }
}

showEmployee();
bonusSalary();
Experience();














