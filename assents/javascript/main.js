// Front End - Animações

document.addEventListener("mousemove", function (event) {
    // Obtém as coordenadas do cursor em relação ao topo da página
    var mouseY = event.clientY;

    // Verifica se o cursor se moveu para baixo
    if (mouseY > (window.innerHeight - 4)) {
        console.log("O cursor se moveu para baixo.");
        // Faça algo aqui quando o cursor se mover para baixo
    }
});

function abrirModal() {
    let modal = document.getElementById('modal-login')
    modal.classList.add('active')
    modal.classList.remove('notactive')
}

function fecharModal() {
    let modal = document.getElementById('container-modal')
    modal.classList.remove('active')
    modal.classList.add('notactive')
}

document.getElementById('exit-modal').addEventListener("click", () => {
    fecharModal();
});

// Adicionando ouvinte de evento ao botão user-acess
document.getElementById('user-acess').addEventListener("click", () => {
    abrirModal();
});

// Back End - Acesso e Avaliações

let number;
let idData = [];
let connected = false;
number = localStorage.getItem('numberCounting');

window.addEventListener("beforeunload", function (event) {
    if (event.target === window) {
        if (connected === true) {
            alert(`Sua conta foi reiniciada`);
        }
    }
});

document.addEventListener("submit", function (event) {
    event.preventDefault();
    let loginButton = document.getElementById('submit-button-login');
    let registrationForm = document.getElementById('registrationForm');

    if (loginButton) {
        login();
    } else if (registrationForm) {
        registred();
    }
});

function registred(idData, connected) {
    let nameUser = document.getElementById('user-name').value;
    let emailUser = document.getElementById('user-email').value;
    let passwordUser = document.getElementById('user-password').value;
    let checkPassword = document.getElementById('check-password').value;

    let userConnected = '';
    let emailConnected = '';

    let nameData, emailData;

    for (let i = 0; i < idData.length; i++) {
        nameData = localStorage.getItem(`${idData[i]}/registred/name`);
        emailData = localStorage.getItem(`${idData[i]}/registred/email`);

        if (nameUser === nameData) {
            alert(`Esse nome já está em uso troque-o e Tente Novamente`);
            return;
        } else if (emailUser === emailData) {
            alert(`Esse email já está em uso tente logar com a sua conta ou utilize outro email`);
            return;
        } else if (passwordUser !== checkPassword) {
            alert(`As senhas não coincidem. Tente Novamente`);
            return;
        } else {
            alert(`Registro bem Sucedido`);
            document.getElementById('registrationForm').reset();
            connected = true;
            userConnected = nameUser;
            emailConnected = emailUser;
        }

        let number = parseInt(localStorage.getItem('numberCounting') || 0);
        let id;

        number++;
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

        localStorage.setItem('numberCounting', number);
        localStorage.setItem(`${id}/registred/name`, nameUser);
        localStorage.setItem(`${id}/registred/email`, emailUser);
        localStorage.setItem(`${id}/registred/password`, passwordUser);

        return { 'idData': idData, 'loginDone': connected, 'userConnected': userConnected, 'emailConnected': emailConnected };
    };
}

function login() {
    let registredData = registred()
    let idData = registredData.idData
    let emailUser = document.getElementById('email-login').value;
    let passwordUser = document.getElementById('password-login').value;

    for (let i = 0; i < idData.length; i++) {
        let nameData = localStorage.getItem(`${idData}/registred/name`);
        let emailData = localStorage.getItem(`${idData}/registred/email`);
        let passwordData = localStorage.getItem(`${idData}/registred/password`);

        if (emailUser === emailData && passwordUser === passwordData) {
            connected = true;
            alert(`o ID da conta conectada é ${IdData}`)
        }
    }

    // Colocar aqui o evento de clicar no botão de perfil.
    document.getElementById('user-acess').addEventListener("click", () => {
        abrirModal();
    });
}

function dataBase() {
    let returnData = registred();
    let idData = returnData.idData;

    let tableHTML = document.getElementById('data-base');
    tableHTML.innerHTML = `<table class="table-database">`;
    tableHTML.innerHTML += `<tr><th>ID User</th><th>Nome do Usuário</th><th>Email do Usuário</th><th>Número de Avaliações</th></tr>`;

    for (let i = 0; i < idData.length; i++) {
        let userInfo = {
            'nameUser': localStorage.getItem(`${idData[i]}/registred/name`),
            'emailUser': localStorage.getItem(`${idData[i]}/registred/email`),
            'testimonialsUser': localStorage.getItem(`${idData[i]}/testimonials`)
        };

        tableHTML.innerHTML += `<tr><td>${idData[i]}</td><td>${userInfo.nameUser}</td><td>${userInfo.emailUser}</td><td>${userInfo.testimonialsUser}</td></tr>`;
        console.log(`<tr><td>${idData[i]}</td><td>${userInfo.nameUser}</td><td>${userInfo.emailUser}</td><td>${userInfo.testimonialsUser}</td></tr>`)
    }

    tableHTML.innerHTML += `</table>`;
}

// FIM DO CÓDIGO, ANOTAÇÕES ABAIXO

// function registred() {

// let id;
// let nameUser = document.getElementById('user-name').textContent;
// let emailUser = document.getElementById('user-email').textContent;
// let passwordUser = document.getElementById('user-password').textContent;

//   if (nameUser == null && emailUser == null && passwordUser == null) {
//      alert('Campos não digitados!');

//} //else {
// alert('Entrei')

//     let number = localStorage.getItem('userCounting', number);
//     let idData = [];

//     number++;
//     alert('ConteiEntrei')
// }
// localStorage.setItem('userCounting', number);

// let idName = `${id}/registration/name`;
// let idEmail = `${id}/registration/email`;
// let idPassword = `${id}/registration/password`;

// localStorage.setItem(idName, nameUser);
// localStorage.setItem(idEmail, emailUser);
// localStorage.setItem(idPassword, passwordUser);

// for (let i = 0; i < idData.length; i++) {
//     console.log(idData[i]);
//     console.log(localStorage.getItem('userCounting'));
//     return idData;
// }


// User Profile
// Perfil do Usuário
// function profileDisplay(userConnect) {
//     let profileButton = document.getElementsById('user-access');
//     profileDisplay();
//     profileButton.onclick = function () {
//         if (userConnect) {
//             alert('Test True');
//             window.location.href = 'profile.html';
//         } else {
//             alert('Test False');
//             loginscreen.showModal();
//         }
//     }
// }

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
// 
