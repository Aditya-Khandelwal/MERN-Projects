const userForm = document.querySelector('#userForm');
const userTableBody = document.querySelector("#userTableBody");
userForm.addEventListener(
    'submit', (event)=>{
        event.preventDefault();
        const userData = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value
        }
        const allUserData = JSON.parse(localStorage.getItem("allUserData")) ?? [];
        allUserData.push(userData);
        console.log(allUserData);
        localStorage.setItem('allUserData', JSON.stringify(allUserData));

        showData();
    }
)

const showData=()=>{
    const allUserData = JSON.parse(localStorage.getItem("allUserData")) ?? [];
    let showUserData = "";
    allUserData.forEach(
        (user, index)=>{
            showUserData += `<tr>
                                <td>${index + 1}</td>
                                <td>${user.name}</td>
                                <td>${user.email}</td>
                                <td>${user.phone}</td>
                                <td><button class="btn btn-danger btn-sm deleteBtn" onclick="deleteUser(${index})">Delete</button></td>
                            </tr>`
        }
    )
    userTableBody.innerHTML = showUserData;
}
showData();

const deleteUser=(indexnum)=>{
    const allUserData = JSON.parse(localStorage.getItem("allUserData")) ?? [];
    allUserData.splice(indexnum, 1);
    localStorage.setItem('allUserData', JSON.stringify(allUserData));
    showData();
}