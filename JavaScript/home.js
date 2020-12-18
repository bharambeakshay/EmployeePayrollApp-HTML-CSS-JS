let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
}
);
const getEmployeePayrollDataFromStorage = () => {
    let employeePayrollList = createEmployeePayrollJSON();
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
    return localStorage.getItem('EmployeePayrollList') ? JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}


createInnerHtml = () => {
    if (empPayrollList.length == 0) return;
    const headerHtml = `<tr><th></th><th>Name</th><th>Gender</th><th>Department</th>
        <th>Salary</th><th>start Date</th><th>Actions</th></tr>`
    let innerHtml = `${headerHtml}`
    let empPayrollList = createEmployeePayrollJSON()
    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
        <tr>
        <td><img src="${empPayrollData._profilePic}" class="profile" width="30px" alt=""></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._department)}</td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
            <img id="1" name="${empPayrollData._id}" onclick="remove(this)" alt="delete" width="30px" src="../Assets/icons/delete-black-18dp.svg">
            <img id="1" name="${empPayrollData._id}" onclick="update(this)" alt="edit" width="30px" src="../Assets/icons/create-black-18dp.svg  ">
        </td>
    </tr>`
    }
    document.querySelector('#display').innerHTML = innerHtml
}
function getDeptHtml(deptList) {
    let deptHtml = ''
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml
}


const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Chandler Bing',
            _gender: 'male',
            _department: [
                'Engineering', 'Hr'
            ],
            _salary: '300000',
            _startDate: '8 June 2020',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../Assets/profile-images/Ellipse -3.png'
        },
        {
            _profilePic: '../Assets/profile-images/Ellipse -1.png',
            _name: 'Monica Geller',
            _gender: 'female',
            _department: [
                'Engineering', 'Sale'
            ],
            _salary: '100000',
            _startDate: '15 April 2020',
            _note: '',
            _id: new Date().getTime(),

        }
    ]
    return empPayrollListLocal
}

