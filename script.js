let firstName = document.getElementById('firstName').value;

let lastName = document.getElementById('lastName').value;

let id = document.getElementById('ID').value;

let jobTitle = document.getElementById('jobTitle').value;

let annualSalary = document.getElementById('annualSalary').value;

const employeeTable = document.getElementById('empTable')


function newEmployee(event) {
    //testing function to make sure it works.
    //function works. Need to attach new employee row 
    event.preventDefault()
    console.log('submitButton');

    
 
const newPerson = document.getElementById("submitButton")

// let currentMonthly = Number(document.querySelector("#monthlyAmount").innerText);
// console.log('this is the current monthly' , currentMonthly);


firstName = document.getElementById('firstName').value;


lastName = document.getElementById('lastName').value;

id = document.getElementById('ID').value;

jobTitle = document.getElementById('jobTitle').value;

annualSalary = document.getElementById('annualSalary').value; 
monthlyTotal += parseInt(annualSalary) 

const employeeTable = document.getElementById('empTable')
    employeeTable.innerHTML += `
 <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${id}</td>
    <td>${jobTitle}</td>
    <td>${annualSalary}</td>
    <td><button onclick="deleteButton(event)" class="deleteBtn">Delete</button></td> 
        
        
</tr>

`;
document.getElementById('firstName').value = ''
document.getElementById('lastName').value = ''
document.getElementById('ID').value = ''
document.getElementById('jobTitle').value = ''
document.getElementById('annualSalary').value = ''

let monthly = document.getElementById('total-monthly')
monthly.innerHTML = ''
monthly.innerHTML += `
${monthlyTotal}`


}

let monthlyTotal = 0 


function deleteButton(event) {
    console.log(event);
console.log('deleting row');
    let parentDiv= event.target.parentElement;
    parentDiv.closest("tr").remove();
    
    
  }
