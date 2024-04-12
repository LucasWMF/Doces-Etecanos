
// ---------------------- Back Code ---------------------- //
// EventListener's Back

window.addEventListener("beforeunload", function (event) {
    if (event.target === window) {
        if (connected === true) {
            alert(`Sua conta foi desconectada`);
        }
    }
});

// Adiciona um evento de clique ao botão de hamburguer
document.querySelector('#mobile_menu button').addEventListener('click', function() {
    // Obtém o elemento do menu móvel
    let mobileMenu = document.querySelector('#mobile_menu');
    // Alterna a classe 'active' no menu móvel
    mobileMenu.classList.toggle('mobileon');
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

// Variable Functions
// Variáveis das Funções

let number;
let idData = [];
let connected = false;
number = localStorage.getItem('numberCounting');

// Functions Back

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

// ---------------------- Front Code ---------------------- //
// EventListener's Front

window.addEventListener('scroll', function () {
    let header = document.querySelector('.main-header');

    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let passwordEye = document.getElementById('password-eye');
    let inputPassword = document.getElementById('password-login')

    passwordEye.addEventListener('click', function() {
        if (passwordEye.classList.contains('fa-eye')) {
            passwordEye.classList.remove('fa-eye');
            passwordEye.classList.add('fa-eye-slash');
            inputPassword.type = 'text'
        } else {
            passwordEye.classList.remove('fa-eye-slash');
            passwordEye.classList.add('fa-eye');
            inputPassword.type = 'password'
        }
    });
});

// Modal Screens
// Telas Modais

// Selecionando os elementos
// o id do botão que fica no usuário
// Criar condição que se não tiver logado abre a tela de login ao envez da tela do Usuário.
// O id do botão que fica para criar avaliações
// Criar condição que o openModalReview abre o Login se não tiver conectado e se tiver abre para criar avaliação.

// let btnUser = document.getElementById('user-access');
// // let btnReview = document.getElementById('create-review');
// let closeModal = document.getElementById('exit-modal');
// let fade = document.getElementsByClassName('fade');

// // Adicionando os ouvintes de eventos para abrir modais
// btnUser.addEventListener("click", () => toggleModal('user'));
// // btnReview.addEventListener("click", () => toggleModal('review'));

// // Adicionando os ouvintes de eventos para fechar modais
// closeModal.addEventListener("click", () => toggleModal('close'));
// fade.addEventListener("click", () => toggleModal('close'));

function toggleModal() {
    let modal = document.getElementById("modal-login");
    let fade = document.querySelector(".fade");
    let container = document.querySelector('.container-modal');

    [modal, fade, container].forEach((el) => el.classList.toggle("active"));
}

function setupModal() {
    let btnUser = document.getElementById("user-access");
    let closeModal = document.getElementById("exit-modal");
    let fade = document.querySelector(".fade");
    let container = document.querySelector('.container-modal');

    [btnUser, closeModal, fade].forEach((el) => {
        el.addEventListener("click", toggleModal);
    });
}
setupModal()

// Functions Modal
// Funções para os Modais

// Função para definir o modal com base no tipo
// function modalDefined(modalType) {
//     let modal;
//     if (modalType === 'user') {
//         if (connected === true) {
//             modal = document.getElementById('modal-user');
//         } else if (userConnected === userAdmin) {
//             modal = document.getElementById('modal-database');
//         } else {
//             modal = document.getElementById('modal-login');
//         }
//     } else {
//         if (connected === true) {
//             modal = document.getElementById('modal-reviews');
//         } else {
//             modal = document.getElementById('modal-login');
//         }
//     }
//     return modal;
// }

// Função para alternar o modal e o fade (fundo escuro)
// function toggleModal(modalType) {
//     // let modal = modalDefined(modalType);
//     let modal = document.getElementById('modal-login')
//     if (modal) {
//         modal.classList.toggle('active');
//         fade.classList.toggle('active');
//     }
// }