function generateID() {
    for (let i = 0; i < 5; i++) {
        let number = i + 1; // Aumenta o número a cada iteração
        let id;
    
        if (number === 10) {
            id = number.toString().padStart(7, '0');
        } else if (number === 100) {
            id = number.toString().padStart(6, '0');
        } else if (number === 1000) {
            id = number.toString().padStart(5, '0');
        } else {
            id = number.toString().padStart(4, '0');
        }
    
        console.log(id);
        storageData(id); // Chamada da função com o ID como parâmetro
    }
}

// Exemplo de uma função fictícia de armazenamento de dados
function storageData(id) {
    // Aqui você pode adicionar lógica para armazenar o ID
    console.log("Armazenando ID:", id);
}

// Chamada da função para testar
generateID();


// function generateID() {
//     for (let i = 0; i < 5; i++) {
//         let number = i + 1;
//         let id;
    
//         if (number === 10) {
//             id = number.toString().padStart(7, '0');
//         } else if (number === 100) {
//             id = number.toString().padStart(6, '0');
//         } else if (number === 1000) {
//             id = number.toString().padStart(5, '0');
//         } else {
//             id = number.toString().padStart(4, '0');
//         }
    
//         console.log(id);
//         return id;
//         storageData(id);
//     }
// }

// // Testando a função
// generateID();

// function storageData(id) {
//     let idData = []
//     idGeneratedName = 'name' + generateID()
//     idGeneratedFood = 'name' + generateID()
//     idGeneneratedOpinio = 'name' + generateID()

//     localStorage.setItem(`name/${idGenenerated}`, )
// }