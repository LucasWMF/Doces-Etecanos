function registred() {
    let userName = document.getElementById('user-name');
    let userEmail = document.getElementById('user-email');
    let userPassword = document.getElementById('user-password');

    let number;
    number += 1;

    if (number === 10) {
        id = number.toString().padStart(7, '0');
    } else if (number === 100) {
        id = number.toString().padStart(6, '0');
    } else if (number === 1000) {
        id = number.toString().padStart(5, '0');
    } else {
        id = number.toString().padStart(4, '0');
    }

    let idName = id + '/registration/name';
    let idEmail = id + '/registration/email';
    let idPassword = id + '/registration/password';
  
    localStorage.setItem(`${idName}`);
    localStorage.setItem(`${idEmail}`);
    localStorage.setItem(`${idPassword}`);
  
    let userLoginData = [];
    userLoginData.push(`${idName}`);
    userLoginData.push(`${idEmail}`);
    userLoginData.push(`${idPassword}`);
}

function checkPassword() {
    let userPassword = document.getElementById('user-password');
    let passwordCheck= document.getElementById('check-password');

    if (userPassword != passwordCheck) {
        let status = document.getElementsByClassName('registred-status').innerText = 'As senhas não conhecidem'
        let submit = document.getElementById('submit-button');

        submit.type = none;
    } else {
        registred();
    }
}