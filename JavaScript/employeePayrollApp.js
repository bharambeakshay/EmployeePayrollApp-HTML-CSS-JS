// UC8
// salary bar 
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
//in range button the output shown should always be equal to value the user is updating
output.textContent = salary.value;
salary.addEventListener('input', function () {
    output.textContent = salary.value;
});

//UC10 UC11 UC12 validations for Name and Date


window.addEventListener('DOMContentLoaded', (event) => {
    // validating error for name
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error')
    name.addEventListener('input', function () {
        if (name.value.length === 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayRoll()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    //validaitng errors for date
    const date = document.querySelector('#date');
    const dateError = document.querySelector('.date-error');
    const getInputValueById = (id) => {
        let value = document.querySelector(id).value;
        return value;
    }
    date.addEventListener('click', function () {
        let startDate = getInputValueById('#day') + " " + getInputValueById('#month') + " " +
            getInputValueById('#year');
        try {
            (new EmployeePayRoll()).startDate = new Date(Date.parse(startDate));
            dateError.textContent = "";
        } catch (e) {
            dateError.textContent = e;
        }

    });
})


