
let currentPage = window.location.pathname.split('/').pop(); // Obtém o nome da página atual

if (currentPage === 'test.html') {
    PasswordChecked();
    registred();
} else if (currentPage === 'database.html') {
    dataBaseInfo();
    registred();
}


// User Registration
// Registro de Usuário

function PasswordChecked() {
    document.getElementById("registrationForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let password = document.getElementById('user-password').value;
        let checkPassword = document.getElementById('check-password').value;

        if (checkPassword != password) {
            alert(`As senhas não coincidem. Tente Novamente`);
        } else {
            let userName = document.getElementById("user-name").value;
            alert(`Registro bem-sucedido para o usuário ${userName}.`);

            registred();
            document.getElementById('registrationForm').reset();
        }
    });
}

function registred() {
    // for (let i = 0; i < localStorage.length; i++) {
    //     let key = localStorage.key(i);
    //     let value = localStorage.getItem(key);
    //     console.log(`Chave: ${key}, Valor: ${value}`);
    // }

    let id;
    let nameUser = document.getElementById('user-name').textContent;
    let emailUser = document.getElementById('user-email').textContent;
    let passwordUser = document.getElementById('user-password').textContent;

    //   if (nameUser == null && emailUser == null && passwordUser == null) {
      //      alert('Campos não digitados!');

    //} //else {
       // alert('Entrei')

        let number = localStorage.getItem('userCounting', number);
        let idData = [];

        number++;
        alert('ConteiEntrei')
    }
    localStorage.setItem('userCounting', number);

    if (number > 10) {
        id = number.toString().padStart(8, '0');
    } else if (number < 10) {
        id = number.toString().padStart(7, '0');
    } else if (number >= 100) {
        id = number.toString().padStart(6, '0');
    } else if (number >= 1000) {
        id = number.toString().padStart(5, '0');
    } else {
        id = number.toString().padStart(4, '0');
    }
    idData.push(id);

    let idName = `${id}/registration/name`;
    let idEmail = `${id}/registration/email`;
    let idPassword = `${id}/registration/password`;

    localStorage.setItem(idName, nameUser);
    localStorage.setItem(idEmail, emailUser);
    localStorage.setItem(idPassword, passwordUser);

    for (let i = 0; i < idData.length; i++) {
        console.log(idData[i]);
    }
    console.log(localStorage.getItem('userCounting'));
    return idData;
}

// User Profile
// Perfil do Usuário
function profileDisplay(userConnect) {
    let profileButton = document.getElementsById('user-access');
    profileDisplay();
    profileButton.onclick = function () {
        if (userConnect) {
            alert('Test True');
            window.location.href = 'profile.html';
        } else {
            alert('Test False');
            loginscreen.showModal();
        }
    }
}

// Database Display
// Exibição do Banco de Dados
// function dataBaseInfo(idData) {
//     let container = document.getElementById('containerTable');
//     let tableHTML = `<table class="table-dataBase">
//                         <h1 class="title-dataBase">Dados dos Usuários</h1>
//                         <tr>
//                             <th>ID</th>
//                             <th>Nome de Usuário</th>
//                             <th>Email</th>
//                         </tr>`;

//     for (let i = 0; i < idData.length; i++) {
//         let id = idData[i];
//         tableHTML += `<tr>
//         <td>${localStorage.getItem(id)}</td>
//         <td>${localStorage.getItem(id + '/registration/name')}</td>
//         <td>${localStorage.getItem(id + '/registration/email')}</td>
//     </tr>`;

//     tableHTML += `</table/>`;
//     container.innerHTML = tableHTML;
// }