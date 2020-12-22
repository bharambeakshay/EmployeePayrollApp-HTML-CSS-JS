// //UC10 validations for Name and Date
// // UC11 Ability to create Emp payrollObject
let isUpdate = false;
let employeePayrollObj = {};


window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            setTextValue('.text-error', " ");
            return;
        }
        try {
            (new EmployeePayRoll()).name = name.value;
            setTextValue('.text-error', "");
        } catch (e) {
            setTextValue('.text-error', e);
        }
    });

    const date = document.querySelector('#date');
    date.addEventListener('input', function () {
        const startDate = new Date(Date.parse(getInputValueById('#day') + " " +
            getInputValueById('#month') + " " +
            getInputValueById('#year')));
        try {
            (new EmployeePayRoll()).startDate = startDate;
            setTextValue('.date-error', "");
        } catch (e) {
            setTextValue('.date-error', e);
        }
    });

    const salary = document.querySelector('#salary');
    setTextValue('.salary-output', salary.value);
    // output.textContent = salary.value;
    salary.addEventListener('input', function () {
        setTextValue('.salary-output', salary.value);
    });
    checkForUpdate();
});

//UC12 local storage

const save = (event) => {
   
    try {
        let employeePayrollData = createEmpPayroll();
        createAndUpdateStorage(employeePayrollData)
      
    } catch (e) { return }
}

const createAndUpdateStorage = (empPayrollData) => {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"))
    if (employeePayrollList != undefined) {
        employeePayrollList.push(empPayrollData)
    } else {
        employeePayrollList = [empPayrollData]
    }
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList))
}

const createEmpPayroll = () => {
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
    employeePayrollData.startDate = date
    employeePayrollData.id = Date.parse(new Date());
    alert(employeePayrollData.toString());
    return employeePayrollData
}

const getSelectedValues = (propValue) => {
    let allItems = document.querySelectorAll(propValue)
    let selItems = []
    allItems.forEach(item => {
        if (item.checked) selItems.push(item.value)
    });
    return selItems
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value
    return value
}



//setting the function in the form
const setForm = () => {

    setValue('#name', employeePayrollObj._name);
    setSelectedValues('[name=profile]', employeePayrollObj._profilePic);
    setSelectedValues('[name=gender]', employeePayrollObj._gender);
    setSelectedValues('[name=department]', employeePayrollObj._department);
    setValue('#salary', employeePayrollObj._salary);
    setTextValue('.salary-output', employeePayrollObj._salary);
    setValue('#notes', employeePayrollObj._note);

    let date = stringifyDate(employeePayrollObj._startDate).split(" ");
    setValue('#day', date[0]);
    setValue('#month', date[1]);
    setValue('#year', date[2]);
}

const setSelectedValues = (propertyValue, value) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        if (Array.isArray(value)) {
            if (value.includes(item.value)) {
                item.checked = true;
            }
        }
        else if (item.value === value)
            item.checked = true;
    });
}


//UC13 Reset values
const resetForm = () => {
    setValue('#name', '');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary', ' ');
    setValue('#notes', ' ');
    setSelectedIndex('#day', 0);
    setSelectedIndex('#month', 0);
    setSelectedIndex('#year', 0);
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


//checking for update
const checkForUpdate = () => {
    const employeePayrollJson = localStorage.getItem('editEmp');
    isUpdate = employeePayrollJson ? true : false;
    //if is update is false return
    if (!isUpdate) return;
    employeePayrollObj = JSON.parse(employeePayrollJson);
    setForm();
}

const setEmployeePayrollObject = () => {
    employeePayrollObj._name = getInputValueById('#name');
    employeePayrollObj._profilePic = getInputValueByValues('[name=profile]').pop();
    employeePayrollObj._gender = getInputValueByValues('[name=gender]').pop();
    employeePayrollObj._department = getInputValueByValues('[name=department]');
    employeePayrollObj._salary = getInputValueById('#salary');
    employeePayrollObj._name = getInputValueById('#name');
    employeePayrollObj._note = getInputValueById('#notes');
    let date = getInputValueById('#day') + " " + getInputValueById('#month') + "  " + getInputValueById('year');
    employeePayrollObj._startDate = date;
}