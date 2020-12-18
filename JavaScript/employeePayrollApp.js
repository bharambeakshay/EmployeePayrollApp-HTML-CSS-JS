
//UC10 validations for Name and Date
// UC11 Ability to create Emp payrollObject

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
    //UC8
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

const save = () => {
    try {
        let employeePayrollData = createEmployeePayroll();

    } catch (e) {
        return;
    }
}

const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayRoll();
    try {
        employeePayrollData.name = getInputValueById('#name');
    }
    catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }




    employeePayrollData.id = getSelectedValues('[name =id]')
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop()
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop()
    employeePayrollData.department = getSelectedValues('[name=department]')
    employeePayrollData.salary = getInputValueById('#salary')
    employeePayrollData.note = getInputValueById('#notes')
    let date = getInputValueById('#day') + " " + getInputValueById('#month') + " " +
        getInputValueById('#year')
    employeePayrollData.date = date
    alert(employeePayrollData.date + date)
    alert(employeePayrollData.toString())
    return employeePayrollData
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let setItems = [];
    allItems.forEach(item => {
        if (item.checked)
            setItems.push(item.value);
    });
    return setItems;
}

const getInputElementValue = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}
