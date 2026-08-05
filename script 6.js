let students = [];

function addStudent() {
    let id = prompt("Enter Student ID:");
    let name = prompt("Enter Student Name:");
    let age = prompt("Enter Student Age:");

    students.push({
        id: id,
        name: name,
        age: age
    });

    alert("Student Added Successfully!");
}

function displayStudents() {

    let result = "";

    if (students.length === 0) {
        result = "No Student Records Found.";
    } else {

        for (let student of students) {

            result +=
                "ID : " + student.id + "\n" +
                "Name : " + student.name + "\n" +
                "Age : " + student.age + "\n";
            result += "----------------------\n";
        }

    }

    document.getElementById("output").textContent = result;
}

function searchStudent() {

    let searchId = prompt("Enter Student ID:");

    let found = students.find(student => student.id === searchId);

    if (found) {

        document.getElementById("output").textContent =
            "Student Found\n\n" +
            "ID : " + found.id + "\n" +
            "Name : " + found.name + "\n" +
            "Age : " + found.age;

    } else {

        document.getElementById("output").textContent =
            "Student Not Found";

    }

}