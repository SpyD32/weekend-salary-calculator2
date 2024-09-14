const newPerson = document.getElementById("submitButton")
let total = 'totalCost';
let clear = 'clearForm'
let firstName = document.getElementById('firstName').value;
let lastName = document.getElementById('lastName').value;
let idNumber = document.getElementById('id').value;
let jobTitle = document.getElementById('jobTitle').value;
let annualSalary = document.getElementById('annualSalary').value;
const employeeTable = document.querySelector('table').value;

employeeTable.innerHTML += `
 <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${id}</td>
    <td>${jobTitle}</td>
    <td>${annualSalary}</td>
    <td><button class="deleteBtn">Delete</button></td>  
</tr>
`;
//this will be part of the trigger function
//to add the row for new employee$
//let html = document.getElementById('employeeRow').innerHTML

function newEmployee(event) {
    //testing function to make sure it works.
    //function works. Need to attach new employee row 
    console.log('row created', newEmployee);
    return newEmployeeRow;
    button.addEventListener(onClick());
    event.preventDefault(newEmployee)
   
    
}

//function submitForm() {