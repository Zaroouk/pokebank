
const allAccounts = [
    {
        accountNumber: "00001",
        propietario: "Juan Martinez",
        tipo: "ahorro",
        cantidad: "12.12"
    },
    {
        accountNumber: "00002",
        propietario: "Juan Martinez",
        tipo: "corriente",
        cantidad: "1500.00"
    },
    {
        accountNumber: "00003",
        propietario: "Maria Gonzalez",
        tipo: "ahorro",
        cantidad: "2000.50"
    },
    {
        accountNumber: "00004",
        propietario: "Maria Gonzalez",
        tipo: "corriente",
        cantidad: "800.75"
    },
    {
        accountNumber: "00005",
        propietario: "Carlos Ramirez",
        tipo: "ahorro",
        cantidad: "875.00"
    },
    {
        accountNumber: "00006",
        propietario: "Carlos Ramirez",
        tipo: "corriente",
        cantidad: "320.40"
    },
    {
        accountNumber: "00007",
        propietario: "Ana Torres",
        tipo: "ahorro",
        cantidad: "3500.25"
    },
    {
        accountNumber: "00008",
        propietario: "Ana Torres",
        tipo: "corriente",
        cantidad: "450.00"
    },
    {
        accountNumber: "00009",
        propietario: "Luis Fernandez",
        tipo: "ahorro",
        cantidad: "5000.00"
    },
    {
        accountNumber: "00010",
        propietario: "Luis Fernandez",
        tipo: "corriente",
        cantidad: "1200.90"
    }
];

function validateTextInput(input) {
    // expresion regular de patron de validacion de texto
    const regex = /^[a-zA-Z\s]+$/; // Regex pattern for text validation
    return regex.test(input); // retorna true, si es valido y sino, false
}

function validateAmount(input) {
    // Regular expression to allow numbers with up to two decimal places
    const regex = /^\d*\.?\d{0,2}$/;
    
    // If the input value doesn't match the regex, remove the last character
    if (!regex.test(input.value)) {
        input.value = input.value.slice(0, -1);
    }
}

const board = document.getElementById("accounts-space")

const currentPropietario = localStorage.getItem("propietario")
const filteredAccounts = []

allAccounts.forEach(account=>{
    filteredAccounts.push(account)
})

filteredAccounts.forEach(element => {
    board.innerHTML += `<button onclick="openModal(${element.accountNumber})" class="bg-gray-700 text-white p-5 w-full rounded-lg">${element.accountNumber} - ${element.tipo}</button>`
});

function openModal(accountNumber) {
    const account = allAccounts[accountNumber];
    if (account) {
        document.getElementById('modalHeader').innerText = `Cuenta:`;
        document.getElementById('modalHeader2').innerText = `${account.accountNumber} - ${account.propietario}`;
        document.getElementById('modalContent').innerHTML = `
            <p><strong>Propietario:</strong> ${account.propietario}</p>
            <p><strong>Tipo:</strong> ${account.tipo}</p>
        `;
        localStorage.setItem("selectedAccount",account.accountNumber)
        document.getElementById('myModal').showModal();
    } else {
        alert('Account not found');
    }
}

document.getElementById("deposito-amount").addEventListener('input', function(event) {
    const input = event.target;
    const currentValue = input.value;

    // Remove non-numeric characters except for the decimal point
    const sanitizedValue = currentValue.replace(/[^0-9.]/g, '');

    // Format the sanitized value with commas
    const formattedValue = formatNumber(sanitizedValue);
    
    // Set the formatted value back to the input
    input.value = formattedValue;

    // Validate for decimal points and ensure only two digits after the decimal
    validateDecimalPlaces(input);
});

function formatNumber(value) {
    // Split the number into whole and decimal parts
    const parts = value.split('.');
    // Format the whole number part with commas
    const wholePart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // Rejoin whole and decimal parts if there is a decimal
    return parts.length > 1 ? `${wholePart}.${parts[1]}` : wholePart;
}

function validateDecimalPlaces(input) {
    const value = input.value;
    const decimalParts = value.split('.');
    // If there's a decimal part, check its length
    if (decimalParts.length > 1 && decimalParts[1].length > 2) {
        // Limit to two decimal places
        input.value = decimalParts[0] + '.' + decimalParts[1].substring(0, 2);
    }
}

function SuccessModalClose() {
    // Close the HTML modal
    document.getElementById('myModal').close();

    // Show SweetAlert after closing the modal
    swal({
        title: "Excelente!",
        text: "Transaccion realizada con exito!",
        icon: "success",
        buttons: {
            cancel: "Cerrar",
            confirm: {
                text: "Imprimir Ticket!",
                value: true,
                visible: true,
                className: "btn-confirm",
                closeModal: true, // Close the SweetAlert on button click
            },
        },
    }).then((willDoIt) => {
        if (willDoIt) {
          const amount = document.getElementById("deposito-amount").value
            // Code to execute if "Do it!" was clicked
            generateDepositTicket("123123",amount)
        } else {
            // Code to execute if "Stop" was clicked
            console.log("User chose to stop.");
        }
    });
}

function generateDepositTicket(accountNumber, depositAmount) {
    // Create a new jsPDF instance
    // const { jsPDF } = window.jspdf;
    const accountN = localStorage.getItem("selectedAccount")
    const doc = new jsPDF();

    doc.setFontSize(12);
    
    // Account number in bold
    doc.setFont("helvetica", "bold"); // Set font to bold
    doc.text("Numero de Cuenta: ", 20, 40); // Label for account number
    doc.setFont("helvetica", "normal"); // Set back to normal for value
    doc.text(accountN, 100, 40); // Account number value

    // Deposit amount in bold
    doc.setFont("helvetica", "bold"); // Set font to bold
    doc.text("Cantidad Depositada: ", 20, 50); // Label for deposit amount
    doc.setFont("helvetica", "normal"); // Set back to normal for value
    doc.text(`$${depositAmount}`, 100, 50); // Deposit amount value

    // Date and time in normal font
    doc.setFont("helvetica", "normal");
    doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 20, 60); // Date
    doc.text(`Hora: ${new Date().toLocaleTimeString()}`, 20, 70); // Time

    // You can add more details to the ticket as needed
    doc.text("Gracias por su Preferencia!", 20, 100);

    // Save the PDF
    doc.save("Deposito.pdf");
}