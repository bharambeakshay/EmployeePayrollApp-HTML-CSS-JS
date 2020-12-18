window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
})
function createInnerHtml() {
    const headerHtml = `<tr><th></th><th>Name</th><th>Gender</th><th>Department</th>
        <th>Salary</th><th>start Date</th><th>Actions</th></tr>`
    const innerHtml = `${headerHtml}
    <tr>
    <td><img src="../Assets/profile-images/Ellipse -1.png" class="profile" width="30px" alt=""></td>
        <td>Rachel Green</td>
        <td>Female</td>
        <td>
            <div class="dept-label">Engineer</div>
            <div class="dept-label">HR</div>
            <div class="dept-label">Others</div>
        </td>
        <td>400000</td>
        <td>15 March 2020</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete" width="30px"
                src="../Assets/icons/delete-black-18dp.svg">
                <img id="1" onclick="update(this)" alt="edit" width="30px"
                    src="../Assets/icons/create-black-18dp.svg">
</td>
</tr>
            <tr>
                <td><img src="../Assets/profile-images/Ellipse -2.png" class="profile" width="30px" alt=""></td>
                    <td>Joey Tribbiani</td>
                    <td>Male</td>
                    <td>
                        <div class="dept-label">Engineer</div>
                        <div class="dept-label">HR</div>
                    </td>
                    <td>400000</td>
                    <td>15 May 2020</td>
                    <td>
                        <img id="1" onclick="remove(this)" alt="delete" width="30px"
                            src="../Assets/icons/delete-black-18dp.svg">
                            <img id="1" onclick="update(this)" alt="edit" width="30px"
                                src="../Assets/icons/create-black-18dp.svg">
</td>
</tr>`
    document.querySelector('#display').innerHTML = innerHtml
}