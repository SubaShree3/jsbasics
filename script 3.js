// 23-7-26 Task 3

// Task 1 - : Employee Login System

let username = prompt("Enter your username:");
let password = prompt("Enter your password:");

if (username === "admin" && password === "12345") {
    console.log("Login Successful"); // Login Successful
} else {
    console.log("Invalid Username or Password");
}

// Task 2 - E-Commerce Discount

let amount = 6500;
let finalAmount;

if (amount >= 5000) {
    finalAmount = amount - (amount * 20 / 100);
    console.log("20% Discount Applied"); // 20% Discount Applied
    console.log("Final Amount: ₹" + finalAmount); // Final Amount: ₹5200
} else {
    finalAmount = amount;
    console.log("No Discount");
    console.log("Final Amount: ₹" + finalAmount);
}

// Task 3 - ATM Withdrawal

let balance = 10000;
let withdraw = Number(prompt("Enter withdrawal amount:"));

if (withdraw <= balance) {
    balance -= withdraw;
    console.log("Transaction Success"); // Transaction Success
    console.log("Withdraw Amount: ₹" + withdraw); // Withdraw Amount: ₹4000
    console.log("Remaining Balance: ₹" + balance); // Remaining Balance: ₹6000
} else {
    console.log("Insufficient Balance");
}

// Task 4 - Student Grade System

let mark = Number(prompt("Enter your mark:"));

if (mark >= 90) {
    console.log("Grade A"); // Grade A
}
else if (mark >= 80) {
    console.log("Grade B"); // Grade B
}
else if (mark >= 70) {
    console.log("Grade C"); // Grade C
}
else {
    console.log("Fail");
}

// Task 5 - Traffic Signal

let signal = prompt("Enter the traffic signal (red, yellow, green):").toLowerCase();

switch (signal) {

    case "red":
        console.log("Stop"); // Stop
        break;

    case "yellow":
        console.log("Ready"); // Ready 
        break;

    case "green":
        console.log("Go"); // Go
        break;

    default:
        console.log("Invalid");
}

// Task 6 - Online Shopping Delivery Charge

let orderAmount = Number(prompt("Enter Order Amount:"));
let deliveryCharge;

if (orderAmount >= 1000) {
    deliveryCharge = 0;
} else {
    deliveryCharge = 80;
}

let total = orderAmount + deliveryCharge;

console.log("Order Amount : ₹" + orderAmount); // Order Amount : ₹750
console.log("Delivery : ₹" + deliveryCharge); // Delivery : 80
console.log("Total : ₹" + total); // Total : ₹830

// Task 7 - User Age Verification

let age = Number(prompt("Enter your age:"));

if (age >= 18) {
    console.log("Eligible"); // Eligible
} else {
    console.log("Not Eligible"); // Not Eligible
}

// Task 8 - Find Largest Number

let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
let c = Number(prompt("Enter third number:"));

if (a >= b && a >= c) {
    console.log("Largest Number: " + a); // Largest Number: 20
}
else if (b >= a && b >= c) {
    console.log("Largest Number: " + b); // Largest Number: 45
}
else {
    console.log("Largest Number: " + c); // Largest Number: 50
}

// Task 9 - Mobile Password

let pin = prompt("Enter your 4-digit PIN:");

if (pin.length === 4 && pin === "1234") {
    console.log("Login Success"); // Login Success
}
else {
    console.log("Invalid PIN");
}

// Task 10 - Product Stock

let stock = Number(prompt("Enter product stock:"));

if (stock === 0) {
    console.log("Out of Stock"); // Out of Stock
}
else {
    console.log("Available"); // Available
}

// Task 11 - Employee Salary Bonus

let salary = Number(prompt("Enter employee salary:"));
let bonus;

if (salary > 50000) {
    bonus = 10000;
}
else if (salary > 30000) {
    bonus = 5000;
}
else {
    bonus = 2000;
}

console.log("Salary : " + salary); // Salary : 60000
console.log("Bonus : " + bonus); // Bonus : 10000

// Task 12 - Electricity Bill

let units = Number(prompt("Enter electricity units:"));
let bill;

if (units <= 100) {
    bill = units * 2;
}
else if (units <= 200) {
    bill = units * 4;
}
else {
    bill = units * 6;
}

console.log("Units : " + units); // Units : 150
console.log("Total Bill : ₹" + bill); // Total Bill : ₹600

// Task 13 - Movie Ticket Booking

let age = Number(prompt("Enter your age:"));
let ticketPrice;

if (age < 5) {
    ticketPrice = 0;
}
else if (age <= 18) {
    ticketPrice = 100;
}
else {
    ticketPrice = 200;
}

console.log("Age : " + age); // Age : 20
console.log("Ticket Price : ₹" + ticketPrice); // Ticket Price : ₹200

// Task 14 - Hospital Token System

let category = prompt("Enter patient category (Emergency, Senior Citizen, Normal):").toLowerCase();

switch (category) {

    case "emergency":
        console.log("Token 1"); // Token 1
        break;

    case "senior citizen":
        console.log("Priority");
        break;

    case "normal":
        console.log("Regular Queue");
        break;

    default:
        console.log("Invalid Category");
}

// Task 15 - Company Attendance

let status = prompt("Enter attendance status (Present, Leave, Absent):").toLowerCase();

switch (status) {

    case "present":
        console.log("Working"); // Working
        break;

    case "leave":
        console.log("Leave Approved"); // Leave Approved
        break;

    case "absent":
        console.log("Salary Deduction"); // Salary Deduction
        break;

    default:
        console.log("Invalid Status");
}

// Task 16 - Grocery Cart Total

let rice = 500;
let sugar = 300;
let oil = 250;

let total = rice + sugar + oil;
let finalAmount;

if (total > 1000) {
    finalAmount = total - (total * 10 / 100);
    console.log("10% Discount Applied"); //10% Discount Applied
}
else {
    finalAmount = total;
    console.log("No Discount");
}

console.log("Total Amount : ₹" + total); // Total Amount : ₹1050
console.log("Final Amount : ₹" + finalAmount); // Final Amount : ₹945

// Task 17 - : Array Task

let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];

for (let i = 0; i < products.length; i++) {
    console.log((i + 1) + " " + products[i]);
}

// Output:
// 1 Laptop
// 2 Mouse
// 3 Keyboard
// 4 Monitor

// Task 18 - Employee Database

let employee = {
    name: "Subashree",
    role: "Developer",
    salary: 50000
};

for (let key in employee) {
    console.log(employee[key]);
}

// Output:
// Subashree
// Developer 
// 50000

// Task 19 - Type Casting

let num = Number("100");
let bool = Boolean("true");
let str = String(200);

console.log(num); // 100
console.log(bool); // true
console.log(str); // 200

// Task 20 - Banking Menu

let choice = Number(prompt("Enter your choice:\n1. Deposit\n2. Withdraw\n3. Balance\n4. Exit"));

switch (choice) {

    case 1:
        console.log("Deposit Selected"); // Deposit Selected
        break;

    case 2:
        console.log("Withdraw Selected"); // Withdraw Selected
        break;

    case 3:
        console.log("Balance Selected"); // Balance Selected
        break;

    case 4:
        console.log("Exit"); // Exit
        break;

    default:
        console.log("Invalid Choice");
}


// Employee Management System

let employees = [];

let choice;

do {
    choice = Number(prompt(
        "1. Add Employee\n" +
        "2. Show Employee Details\n" +
        "3. Calculate Bonus\n" +
        "4. Check Attendance\n" +
        "5. Print Salary\n" +
        "6. Exit"
    ));

    switch (choice) {

        case 1:
            let emp = {
                name: prompt("Enter Name:"),
                role: prompt("Enter Role:"),
                salary: Number(prompt("Enter Salary:")),
                attendance: prompt("Enter Attendance:")
            };

            employees.push(emp);
            console.log("Employee Added");
            break;

        case 2:
            for (let employee of employees) {
                console.log(`${employee.name} ${employee.role} ${employee.salary}`);
            }
            break;

        case 3:
            for (let employee of employees) {
                if (employee.salary > 50000)
                    console.log("Bonus: 10000");
                else if (employee.salary > 30000)
                    console.log("Bonus: 5000");
                else
                    console.log("Bonus: 2000");
            }
            break;

        case 4:
            for (let employee of employees) {
                if (employee.attendance == "Present")
                    console.log("Working");
                else
                    console.log("Leave");
            }
            break;

        case 5:
            for (let employee of employees) {
                console.log("Salary: " + employee.salary);
            }
            break;

        case 6:
            console.log("Exit");
            break;

        default:
            console.log("Invalid Choice");
    }

} while (choice != 6);