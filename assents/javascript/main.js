let number;
let idData = [];
let connected = false;
number = localStorage.getItem('numberCounting');

document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();
    registred();
});

// SE ISSO FOR DESCOMENTADO ESTAMOS FERRADO ISSO DELETA TODOS OS DADOS POR FAVOR NÃO UTILIZAR SOMENTE PARA TESTE
// SOMENTE PARA TESTE
// SOMENTE PARA TESTE
// SOMENTE COM AUTORIZAÇÃO DO LUCAS
// NÃO DESCOMENTA O CÓDIGO DE BAIXO ELE APAGA TUDO QUE TÁ NO ARMAZENAMENTO
// localStorage.clear()
// Obrigado pela colaboração :D

function registred(idData) {
    let id;
    number++;
    
    let nameUser = document.getElementById('user-name').value;
    let emailUser = document.getElementById('user-email').value;
    let passwordUser = document.getElementById('user-password').value;
    let checkPassword = document.getElementById('check-password').value;
    
    for (let i = 0; i = idData.length; i++) {
        let nameData = localStorage.getItem(`${idData}/registred/name`);
        let emailData = localStorage.getItem(`${idData}/registred/email`);
        if (nameUser === nameData) {
            alert(`Esse nome já está em uso troque-o e Tente Novamente`);
        } else if (emailUser === emailData) {
            alert(`Esse email já está em uso tente logar com a sua conta ou utilize outro email`);
        } else if (password != checkPassword) {
            alert(`As senhas não coincidem. Tente Novamente`);
        } else {
            alert(`Registro bem Sucedido`);
            document.getElementById('registrationForm').reset();
            connected = true;
            userConnected = `${nameUser}`
            emailConnected = `${emailUser}`
        }
    }
    localStorage.setItem('numberCounting', number)
    
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

    localStorage.setItem(`${idData}/registred/name`, password);
    localStorage.setItem(`${idData}/registred/email`, emailUser);
    localStorage.setItem(`${idData}/registred/password`, passwordUser);
    return { 'idData': idData, 'loginDone': connected,'userConnected': userConnected, 'emailConnected': emailConnected};
}

function login() {
    // Ele irá verificar se os dados de login são iguais a de algum dos idData e reconehcer qual usuário conectou, além de definir UserConnect como true para utilizar para abrir o perfil.
}

function dataBase() {

}













































// function registred() {
// for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);
//     let value = localStorage.getItem(key);
//     console.log(`Chave: ${key}, Valor: ${value}`);
// }

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
// }