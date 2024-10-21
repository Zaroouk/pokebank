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


const board = document.getElementById("accounts-space")
allAccounts.forEach(element => {
    board.innerHTML += `<button onclick="openModal(${element.accountNumber})" class="bg-gray-700 text-white p-5 w-full rounded-lg">${element.accountNumber} - ${element.tipo}</button>`
});

function openModal(accountNumber) {
    const account = allAccounts[accountNumber];
    if (account) {
        document.getElementById('modalHeader').innerText = `Cuenta: ${account.accountNumber} - ${account.propietario}`;
        document.getElementById('modalContent').innerHTML = `
            <p><strong>Propietario:</strong> ${account.propietario}</p>
            <p><strong>Tipo:</strong> ${account.tipo}</p>
            <p><strong>Cantidad:</strong> $${account.cantidad}</p>
        `;
        localStorage.setItem("selectedAccount",account.accountNumber)
        document.getElementById('myModal').showModal();
    } else {
        alert('Account not found');
    }
}

function generateBalanceCheckTicket() {
    // Create a new jsPDF instance
    const accountN = localStorage.getItem("selectedAccount"); // Retrieve the account number

    document.getElementById('myModal').close();
    swal("Excelente!", "Gracias por utilizar nuestros servicios", "success");

    const account = allAccounts.find(x=> x.accountNumber == accountN)
    
    const doc = new jsPDF();

    // Set font size for the ticket
    doc.setFontSize(12);

    // Account number in bold
    doc.setFont("helvetica", "bold"); // Set font to bold
    doc.text("Numero de Cuenta: ", 20, 40); // Label for account number
    doc.setFont("helvetica", "normal"); // Set back to normal for value
    doc.text(accountN, 100, 40); // Account number value

    // Balance in bold
    doc.setFont("helvetica", "bold"); // Set font to bold
    doc.text("Balance Actual: ", 20, 50); // Label for current balance
    doc.setFont("helvetica", "normal"); // Set back to normal for value
    doc.text(`$${account.cantidad}`, 100, 50); // Current balance value

    // Date and time in normal font
    doc.setFont("helvetica", "normal");
    doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 20, 60); // Date
    doc.text(`Hora: ${new Date().toLocaleTimeString()}`, 20, 70); // Time

    // Thank you message
    doc.text("Gracias por utilizar nuestros servicios!", 20, 100);

    // Save the PDF
    doc.save("Balance.pdf");
}
function HandlePrint(){
    document.getElementById('myModal').close();
}