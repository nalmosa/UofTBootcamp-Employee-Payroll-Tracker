// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Declare the variables firstName, lastName, salary, and employeeData
let firstName, lastName, salary, singleEmployee;
let employeesArray = [];
let allSalary = [];

const collectEmployees = function() {
  // Open input window to ask for questions
  firstName = window.prompt("What is your first name?");
  lastName = window.prompt("What is your last name?");
  salary = window.prompt("What is your salary?");

  // Store input into an array
  let singleEmployee = [firstName, lastName, salary];

  // Puts all employees into an array
  employeesArray.push(singleEmployee);

  // Since we need calulcate salary later, log salary into an array
  allSalary.push(salary);

  // Ask if the user wants to continue
  const addAnother = window.confirm("Add another employee?")
  //if confirms, run input windows again
  if (addAnother) {
    collectEmployees();
  }

  return employeesArray;
}

// Call the function to collect employee data
collectEmployees();

// Log all employee data
console.log(employeesArray);

console.log(allSalary);

// TODO: Calculate and display the average salary
const displayAverageSalary = function(employeesArray) {
}

// Sum of salaries
const salarySum = allSalary.reduce((total, salary) => total + salary, 0);
console.log(salarySum)

// Average salary (sum div. amount of salaries inputted)
const salaryAverage = salarySum / allSalary.length;
console.log(salaryAverage);



// Select a random employee

let randomlyChosen = '';

const getRandomEmployee = function(employeesArray) {
  // The maximum number you can randomly choose from should be the amount of items in array
  let max = employeesArray.length;
  // Choosing a number from 1-(max number)
  let randomEmployeeNum = Math.random() * (max - min) + min;
  // Make a variable called randomlyChosen will call an employee from the array at [random number generated]
  let randomlyChosen = employeesArray[randomEmployeeNum];
  return randomlyChosen;
}

console.log(randomlyChosen);

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
