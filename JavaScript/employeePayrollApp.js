// //UC10 validations for Name and Date
// // UC11 Ability to create Emp payrollObject
window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector("#name")
    const textError = document.querySelector('.text-error')
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = ""
            return
        }
        try {
            (new EmployeePayRoll).name = name.value
            textError.textContent = ""
        } catch (e) { textError.textContent = e }
    });

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
        output.textContent = salary.value
    });
    const year = document.getElementById('year')
    const month = document.getElementById('month')
    const day = document.getElementById('day')
    const dateError = document.querySelector('.date-error')
    year.addEventListener('change', function () {
        try {
            dateValidation()
        } catch (e) { dateError.textContent = e }
    });
    month.addEventListener('change', function () {
        try {
            dateValidation()
        } catch (e) { dateError.textContent = e }
    });
    day.addEventListener('change', function () {
        try {
            dateValidation()
        } catch (e) { dateError.textContent = e }
    });
    function dateValidation() {
        let date = getInputValueById('#day') + " " + getInputValueById('#month') + " " +
            getInputValueById('#year')
        let newDate = Date.parse(date)
        let currDate = new Date()
        let miliDate = Date.parse(currDate) - 2592000000
        if (newDate < miliDate) {
            dateError.textContent = ""
            return
        } else throw 'Incorrect Date'
    }
})

//UC12 local storage

function save() {
    try {
        let employeePayrollData = createEmpPayroll();
        createAndUpdateStorage(employeePayrollData)
    } catch (e) { return }
}

function createAndUpdateStorage(empPayrollData) {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"))
    if (employeePayrollList != undefined) {
        employeePayrollList.push(empPayrollData)
    } else {
        employeePayrollList = [empPayrollData]
    }
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList))
}

function createEmpPayroll() {
    let employeePayrollData = new EmployeePayRoll()
    try {
        employeePayrollData.name = getInputValueById('#name')
    } catch (e) {
        setTextValue('.text-error', e)
        throw e
    }
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop()
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop()
    employeePayrollData.department = getSelectedValues('[name=department]')
    employeePayrollData.salary = getInputValueById('#salary')
    employeePayrollData.note = getInputValueById('#notes')
    let date = getInputValueById('#day') + " " + getInputValueById('#month') + " " +
        getInputValueById('#year')
    employeePayrollData.date = date
    employeePayrollData.id = Date.parse(new Date());
    alert(employeePayrollData.toString());
    return employeePayrollData
}

function getSelectedValues(propValue) {
    let allItems = document.querySelectorAll(propValue)
    let selItems = []
    allItems.forEach(item => {
        if (item.checked) selItems.push(item.value)
    });
    return selItems
}

function getInputValueById(id) {
    let value = document.querySelector(id).value
    return value
}

//UC13 Reset values
const resetForm = () => {
    setValue('#name', '');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary', ' ');
    setValue('#notes', ' ');
    setValue('#day', '1');
    setValue('#month', 'Jan');
    setValue('#year', '2020');
}

const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => { item.checked = false; }
    );
}

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}