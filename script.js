const newPerson = document.getElementById("submitButton")
let total = 'totalCost';
let clear = 'clearForm'
let firstName = document.getElementById('firstName').value;
let lastName = document.getElementById('lastName').value;
let id = document.getElementById('ID').value;
let jobTitle = document.getElementById('jobTitle').value;
let annualSalary = document.getElementById('annualSalary').value;
const employeeTable = document.getElementById('empTable')

//this will be part of the trigger function
//to add the row for new employee$
//let html = document.getElementById('employeeRow').innerHTML

function newEmployee(event) {
    //testing function to make sure it works.
    //function works. Need to attach new employee row 
    event.preventDefault()

event.target.innerHTML = 'click to clear row'    
const newPerson = document.getElementById("submitButton")
total = 'totalCost';
firstName = document.getElementById('firstName').value;
lastName = document.getElementById('lastName').value;
id = document.getElementById('ID').value;
jobTitle = document.getElementById('jobTitle').value;
annualSalary = document.getElementById('annualSalary').value;
const employeeTable = document.getElementById('empTable')
    employeeTable.innerHTML += `
 <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${id}</td>
    <td>${jobTitle}</td>
    <td>${annualSalary}</td>
    <td><button onClick="deleteButton()" class="deleteBtn">Delete</button></td> 
        
        
</tr>
`;
function removeRow(event) {
    event.target.closest('tr').remove();
}



}


//function submitForm() {