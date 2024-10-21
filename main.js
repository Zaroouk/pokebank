const users = [
    { propietario: "Juan Martinez", accountNumber: "EN001", balance: 24.78, pin: 6309 },
    { propietario: "Maria Gonzalez", accountNumber: "EN002", balance: 84.67, pin: 5835 },
    { propietario: "Carlos Hernandez", accountNumber: "WA001", balance: 20.96, pin: 5301 },
    { propietario: "Luisa Ramirez", accountNumber: "WA002", balance: 48.04, pin: 7717 },
    { propietario: "Ana Lopez", accountNumber: "TE001", balance: 14.89, pin: 9987 },
    { propietario: "Pedro Alvarez", accountNumber: "TE002", balance: 43.87, pin: 8789 },
    { propietario: "Sofia Jimenez", accountNumber: "IN001", balance: 85.74, pin: 7103 },
    { propietario: "David Torres", accountNumber: "IN002", balance: 70.77, pin: 5409 }
];

const selectAccount = document.getElementById("selectedSelect")
// selectAccount.addEventListener('change', function() {
//     const selectedValue = this.value; // Get the selected value
//     // resultDisplay.textContent = `You selected: ${selectedValue}`; // Display the selected value
//     console.log(selectedValue)
// });
function addOptions() {
    users.forEach(user => {
        const newOptionUser = new Option(user.propietario,user.accountNumber)
        selectAccount.add(newOptionUser);
        
    });

}
document.addEventListener("DOMContentLoaded", addOptions)

// funcion para validar valor del input
function validateTextInput(input) {
    // expresion regular de patron de validacion de texto
    const regex = /^[a-zA-Z\s]+$/; // Regex pattern for text validation
    return regex.test(input); // retorna true, si es valido y sino, false
}
// funcion para validar la direccion del cursor
function focusNextInput(el, prevId, nextId) {
    if (el.value.length === 0) {
        if (prevId) {
            document.getElementById(prevId).focus();
        }
    } else {
        if (nextId) {
            document.getElementById(nextId).focus();
        }
    }
}

// event listeners para todos los elementos [data-focus-input-init]
document.querySelectorAll('[data-focus-input-init]').forEach(function(element) {
    element.addEventListener('keydown', function(event) {
        const key = event.key;

        // chekea si el input tiene un valor
        if(event.target.value){
            return //rompemos validacion para que pueda retroceder el cursor
        }else if (validateTextInput(key)) {
            event.preventDefault(); //bloquea input para ingresar value
            console.log('The letter "e" is not allowed');
        }
    });
    element.addEventListener('keyup', function() {
        const prevId = this.getAttribute('data-focus-input-prev');
        const nextId = this.getAttribute('data-focus-input-next');
        focusNextInput(this, prevId, nextId);
    });
});

console.log(selectAccount.value)


function ValidateLogin(event){
    event.preventDefault()
    const code1 = document.getElementById("code-1").value
    const code2 = document.getElementById("code-2").value
    const code3 = document.getElementById("code-3").value
    const code4 = document.getElementById("code-4").value

    const pwd = `${code1}${code2}${code3}${code4}`
    // console.log(selectAccount.value)

    const userSelected = users.find(x=> x.accountNumber == selectAccount.value)
    // console.log(parseInt(pwd), " and ",userSelected.pin)
    
    if(userSelected.pin ==  parseInt(pwd)){
        console.log("pwd matches")
        localStorage.setItem("propietario",userSelected.propietario)
        location.href = "/POKEBANK/pages/menu"
    }else{
        console.log('pwd dont match')
    }
}

const form = document.getElementById("loginForm");
form.addEventListener("submit", ValidateLogin);
