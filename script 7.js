// 07-8-26 - Task 7

// Task 1 - Student Registration

let student = {
    name: "Subashree",
    age: 21,
    department: "Computer Science",
    courseFee: 25000
};

Age: 2
console.log("Student Name:", student.name); // Student Name: Subashree
console.log("Age:", student.age); // Age: 21
console.log("Department:", student.department); // Department: Computer Science
console.log("Course Fee:", student.courseFee); // Course Fee: 25000

if (student.age >= 18) {
    console.log("Eligible"); // Eligible
} else {
    console.log("Not Eligible");
}

// Task 2 - Employee Salary Calculator

function calculateSalary(basicSalary, bonus, deduction) {
    let totalSalary = basicSalary + bonus - deduction;
    console.log("Total Salary =", totalSalary); // Total Salary = 33000
}

Age: 2
calculateSalary(30000, 5000, 2000);

// Task 3 - Shopping Cart

let cart = ["Laptop", "Mouse", "Keyboard", "Headphone"];

console.log("Initial Cart:", cart); // Initial Cart: [ 'Laptop', 'Mouse', 'Keyboard', 'Headphone' ]

cart.push("Monitor");
console.log("After Adding Product:", cart); // [ 'Laptop', 'Mouse', 'Keyboard', 'Headphone', 'Monitor' ]

cart.pop();
console.log("After Removing Last Product:", cart); // [ 'Laptop', 'Mouse', 'Keyboard', 'Headphone' ]

console.log("Total Products:", cart.length); // Total Products: 4

console.log("First Product:", cart[0]); // First Product: Laptop

console.log("Last Product:", cart[cart.length - 1]); // Last Product: Headphone

// Task 4 - Login Validation

let storedUsername = "admin";
let storedPassword = "12345";

let enteredUsername = "admin";
let enteredPassword = "12345";

if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
    console.log("Login Success"); // Login Success
} else {
    console.log("Invalid Username or Password");
}

// Task 5 - Movie Ticket Booking

let age = 20;

let result = age >= 18 ? "Eligible" : "Not Eligible";

console.log(result); // Eligible

// Task 6 - Employee Search

let employees = [
    { name: "Arun", salary: 25000 },
    { name: "Kavin", salary: 40000 },
    { name: "Ravi", salary: 55000 }
];

let employee = employees.find(emp => emp.name === "Kavin");

console.log(employee); // { name: "Kavin", salary: 40000 }

// Task 7 - Product Filter

let products = [
    { name: "Laptop", price: 45000 },
    { name: "Mouse", price: 400 },
    { name: "Keyboard", price: 800 },
    { name: "Headphone", price: 350 },
    { name: "Speaker", price: 600 }
];

let filteredProducts = products.filter(product => product.price < 500);

console.log(filteredProducts);

// output:
// [
//   { name: "Mouse", price: 400 },
//   { name: "Headphone", price: 350 }
// ] 

// Task 8 - Student Marks

let marks = [45, 56, 67, 89];

let newMarks = marks.map(mark => mark + 5);

console.log("New Marks:", newMarks); // New Marks: [50, 61, 72, 94]

// Task 9 - Attendance Checker

let marks = [90, 85, 70, 65];

let result = marks.every(mark => mark > 50);

console.log(result); // true

// Task 10 - OTP Generator

let otp = Math.floor(100000 + Math.random() * 900000);

console.log("Your OTP:", String(otp)); // 742816

// Task 11 - Password Strength Checker

let password = "Abc@1234";

let hasMinimumLength = password.length >= 8;
let hasNumber = /[0-9]/.test(password);
let hasUppercase = /[A-Z]/.test(password);
let hasSpecialCharacter = /[^A-Za-z0-9]/.test(password);

if (hasMinimumLength && hasNumber && hasUppercase && hasSpecialCharacter) {
    console.log("Strong Password"); // Strong Password
} else {
    console.log("Weak Password");
}

// Task 12 - Product Search

let products = ["Laptop", "Mobile", "Watch", "Camera"];

let searchProduct = "Mobile";

if (products.includes(searchProduct)) {
    console.log("Available"); // Available
} else {
    console.log("Not Available");
}

// Task 13 - Current Digital Clock

function displayClock() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    console.log(`${hours}:${minutes}:${seconds} ${ampm}`);
}

displayClock();

setInterval(displayClock, 1000);

// output:
// 10:35:24 AM
// 10:35:25 AM
// 10:35:26 AM
// 10:35:27 AM

// Task 14 - Countdown Timer

let count = 10;

let timer = setInterval(() => {
    console.log(count);

    count--;

    if (count < 0) {
        clearInterval(timer);
    }
}, 1000);

// output:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

// Task 15 

let productData = fetch("https://fakestoreapi.com/products");

productData
    .then(response => response.json())
    .then(products => {

        products.forEach(product => {
            console.log("Product Image:", product.image);
            console.log("Product Name:", product.title);
            console.log("Price:", product.price);
        });

    })
    .catch(error => {
        console.log("Error:", error);
    });

// Task 16 - Employee Dashboard

let employees = [
    { name: "Arun", salary: 25000 },
    { name: "Kavin", salary: 40000 },
    { name: "Ravi", salary: 55000 },
    { name: "Priya", salary: 30000 }
];

let totalSalary = employees.reduce((total, employee) => {
    return total + employee.salary;
}, 0);

let averageSalary = totalSalary / employees.length;

let highestSalary = employees.reduce((highest, employee) => {
    return employee.salary > highest ? employee.salary : highest;
}, 0);

console.log("Total Salary:", totalSalary); // Total Salary: 150000
console.log("Average Salary:", averageSalary); // Average Salary: 37500
console.log("Highest Salary:", highestSalary); // Highest Salary: 55000

// Task 17 - Online Food Order

let menu = ["Pizza", "Burger", "Shawarma", "Fries"];

let cart = [];

cart.push("Pizza");
cart.push("Burger");
cart.push("Fries");

console.log("Cart:", cart); // Cart: [ 'Pizza', 'Burger', 'Fries' ]

cart.pop();

console.log("After Removing Item:", cart); // Cart: [ 'Pizza', 'Burger', 'Fries' ]

console.log("Total Items:", cart.length); // Total Items: 2

console.log("----- Food Bill -----");

cart.forEach(item => {
    console.log(item);
});

console.log("Total Items:", cart.length);

// output:
// ----- Food Bill -----
// Pizza
// Burger
// Total Items: 2

// Task 18 - Bank Account

let account = {
    accountHolder: "Subashree",
    balance: 10000,

    deposit: function(amount) {
        this.balance += amount;
        console.log("Deposited:", amount); // Deposited: 5000
    },

    withdraw: function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrawn:", amount); // Withdrawn: 2000
        } else {
            console.log("Insufficient Balance");
        }
    },

    checkBalance: function() {
        console.log("Current Balance:", this.balance); // Current Balance: 13000
    }
};

account.deposit(5000);

account.withdraw(2000);

account.checkBalance();

// Task 19 - To-Do List

let tasks = [];

function addTask(task) {
    tasks.push(task);
    console.log("Task Added:", task);
}

function deleteTask(index) {
    tasks.splice(index, 1);
    console.log("Task Deleted");
}

function updateTask(index, newTask) {
    tasks[index] = newTask;
    console.log("Task Updated:", newTask);
}

function showTasks() {
    console.log("All Tasks:");
    tasks.forEach((task, index) => {
        console.log(index + 1 + ".", task);
    });
}

addTask("Learn JavaScript");
addTask("Practice Arrays");
addTask("Complete Assignment");

updateTask(1, "Practice JavaScript");

deleteTask(0);

showTasks();

// output:
// Task Added: Learn JavaScript
// Task Added: Practice Arrays
// Task Added: Complete Assignment

// Task Updated: Practice JavaScript

// Task Deleted

// All Tasks:
// 1. Practice JavaScript
// 2. Complete Assignment

// Task 20 - Mini E-Commerce Product Management

let products = [
    {
        name: "Laptop",
        price: 50000,
        category: "Electronics",
        stock: 10
    },
    {
        name: "Mobile",
        price: 25000,
        category: "Electronics",
        stock: 15
    },
    {
        name: "Shirt",
        price: 1200,
        category: "Fashion",
        stock: 20
    }
];

function addProduct(name, price, category, stock) {
    let product = {
        name: name,
        price: price,
        category: category,
        stock: stock
    };

    products.push(product);
    console.log("Product Added:", product);
}

function searchProduct(name) {
    let product = products.find(product =>
        product.name.toLowerCase() === name.toLowerCase()
    );

    if (product) {
        console.log("Product Found:", product);
    } else {
        console.log("Product Not Found");
    }
}

function filterByCategory(category) {
    let result = products.filter(product =>
        product.category.toLowerCase() === category.toLowerCase()
    );

    console.log("Products in", category + ":", result);
}

function totalStock() {
    let total = products.reduce((sum, product) => {
        return sum + product.stock;
    }, 0);

    console.log("Total Stock:", total);
}

function totalInventoryValue() {
    let totalValue = products.reduce((total, product) => {
        return total + (product.price * product.stock);
    }, 0);

    console.log("Total Inventory Value:", totalValue);
}

addProduct("Watch", 3000, "Accessories", 8);

searchProduct("Mobile");

filterByCategory("Electronics");

totalStock();

totalInventoryValue();

// output:
// Product Added: {
//   name: "Watch",
//   price: 3000,
//   category: "Accessories",
//   stock: 8
// }

// Product Found: {
//   name: "Mobile",
//   price: 25000,
//   category: "Electronics",
//   stock: 15
// }

// Products in Electronics: [
//   { name: "Laptop", price: 50000, category: "Electronics", stock: 10 },
//   { name: "Mobile", price: 25000, category: "Electronics", stock: 15 }
// ]

// Total Stock: 53

// Total Inventory Value: 10074000