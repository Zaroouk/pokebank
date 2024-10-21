// import { formatNumber,validateDecimalPlaces } from "../../../globalFuncs"

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

const receipts = [
    {
        accountNumber: "EN001",
        propietario: "Juan Martinez",
        serviceType: "Energía Eléctrica",
        companyName: "Clesa",
        amountDue: 50.75,
        dueDate: "2024-11-01",
        paymentStatus: "Unpaid",
        type: "Utility",
        invoiceNumber: "INV001",
        paymentMethod: "Credit Card",
        paymentDate: null,  // Not applicable for unpaid bills
        notes: "Payment due soon.",
        servicePeriod: "October 2024",
        userAddress: "789 Main St, San Salvador, SS, 01101"
    },
    {
        accountNumber: "EN002",
        propietario: "Maria Gonzalez",
        serviceType: "Energía Eléctrica",
        companyName: "AES",
        amountDue: 65.20,
        dueDate: "2024-11-10",
        paymentStatus: "Paid",
        type: "Utility",
        invoiceNumber: "INV002",
        paymentMethod: "Bank Transfer",
        paymentDate: "2024-10-15",
        notes: "Thank you for your prompt payment.",
        servicePeriod: "October 2024",
        userAddress: "321 Oak St, Santa Tecla, SS, 01102"
    },
    {
        accountNumber: "WA001",
        propietario: "Carlos Hernandez",
        serviceType: "Agua Potable",
        companyName: "ANDA",
        amountDue: 30.45,
        dueDate: "2024-11-05",
        paymentStatus: "Unpaid",
        type: "Utility",
        invoiceNumber: "INV003",
        paymentMethod: "Credit Card",
        paymentDate: null,  // Not applicable for unpaid bills
        notes: "Payment due soon.",
        servicePeriod: "October 2024",
        userAddress: "456 Pine Rd, Soyapango, SS, 01103"
    },
    {
        accountNumber: "WA002",
        propietario: "Luisa Ramirez",
        serviceType: "Agua Potable",
        companyName: "ANDA",
        amountDue: 42.10,
        dueDate: "2024-11-15",
        paymentStatus: "Paid",
        type: "Utility",
        invoiceNumber: "INV004",
        paymentMethod: "Cash",
        paymentDate: "2024-10-10",
        notes: "Thank you for your prompt payment.",
        servicePeriod: "October 2024",
        userAddress: "159 Elm St, Santa Ana, SA, 03101"
    },
    {
        accountNumber: "TE001",
        propietario: "Ana Lopez",
        serviceType: "Telefonía",
        companyName: "Claro",
        amountDue: 25.60,
        dueDate: "2024-11-08",
        paymentStatus: "Unpaid",
        type: "Service",
        invoiceNumber: "INV005",
        paymentMethod: "Credit Card",
        paymentDate: null,  // Not applicable for unpaid bills
        notes: "Payment due soon.",
        servicePeriod: "October 2024",
        userAddress: "258 Cedar St, San Miguel, SM, 02101"
    },
    {
        accountNumber: "TE002",
        propietario: "Pedro Alvarez",
        serviceType: "Telefonía",
        companyName: "Movistar",
        amountDue: 15.30,
        dueDate: "2024-11-20",
        paymentStatus: "Paid",
        type: "Service",
        invoiceNumber: "INV006",
        paymentMethod: "Bank Transfer",
        paymentDate: "2024-10-05",
        notes: "Thank you for your prompt payment.",
        servicePeriod: "October 2024",
        userAddress: "369 Maple St, La Libertad, LL, 04101"
    },
    {
        accountNumber: "IN001",
        propietario: "Sofia Jimenez",
        serviceType: "Internet",
        companyName: "Tigo",
        amountDue: 45.00,
        dueDate: "2024-11-12",
        paymentStatus: "Unpaid",
        type: "Service",
        invoiceNumber: "INV007",
        paymentMethod: "Credit Card",
        paymentDate: null,  // Not applicable for unpaid bills
        notes: "Payment due soon.",
        servicePeriod: "October 2024",
        userAddress: "147 Birch St, Chalatenango, CH, 06101"
    },
    {
        accountNumber: "IN002",
        propietario: "David Torres",
        serviceType: "Internet",
        companyName: "Cable Color",
        amountDue: 55.90,
        dueDate: "2024-11-25",
        paymentStatus: "Paid",
        type: "Service",
        invoiceNumber: "INV008",
        paymentMethod: "Cash",
        paymentDate: "2024-10-12",
        notes: "Thank you for your prompt payment.",
        servicePeriod: "October 2024",
        userAddress: "753 Spruce St, Ahuachapán, AH, 08101"
    }
];




const companies = [
    // Energy companies
    {
        name: "Clesa",
        serviceType: "Energy",
        address: "123 Clesa St, San Salvador, SS, 01101",
        phone: "(555) 101-2020"
    },
    {
        name: "AES",
        serviceType: "Energy",
        address: "456 AES Ave, Santa Tecla, SS, 01102",
        phone: "(555) 303-4040"
    },
    
    // Water companies
    {
        name: "ANDA",
        serviceType: "Water",
        address: "789 Water Way, Soyapango, SS, 01103",
        phone: "(555) 505-6060"
    },
    
    // Telephone companies
    {
        name: "Claro",
        serviceType: "Telephone",
        address: "321 Claro Blvd, San Miguel, SM, 02101",
        phone: "(555) 707-8080"
    },
    {
        name: "Movistar",
        serviceType: "Telephone",
        address: "654 Movistar Rd, Santa Ana, SA, 03101",
        phone: "(555) 909-1010"
    },
    {
        name: "Tigo",
        serviceType: "Telephone",
        address: "987 Tigo Ave, La Libertad, LL, 04101",
        phone: "(555) 111-1212"
    },
    {
        name: "Digicel",
        serviceType: "Telephone",
        address: "111 Digicel St, Usulután, US, 05101",
        phone: "(555) 131-1414"
    },
    
    // Internet companies
    {
        name: "Tigo",
        serviceType: "Internet",
        address: "222 Tigo Ave, Chalatenango, CH, 06101",
        phone: "(555) 151-1616"
    },
    {
        name: "Claro",
        serviceType: "Internet",
        address: "333 Claro Blvd, Sonsonate, SO, 07101",
        phone: "(555) 171-1818"
    },
    {
        name: "Cable Color",
        serviceType: "Internet",
        address: "444 Cable Color Rd, Ahuachapán, AH, 08101",
        phone: "(555) 191-2020"
    },
    {
        name: "Japi",
        serviceType: "Internet",
        address: "555 Japi St, La Unión, LU, 09101",
        phone: "(555) 212-2222"
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
allAccounts.forEach(element => {
    board.innerHTML += `<button onclick="openModal(${element.accountNumber})" class="bg-gray-700 text-white p-5 w-full rounded-lg">${element.accountNumber} - ${element.tipo}</button>`
});

function openModal(accountNumber) {
    const account = allAccounts[accountNumber];
    console.log(accountNumber)
    localStorage.setItem("transactionType",accountNumber)
    // if (account) {
        document.getElementById('modalHeader').innerText = `Ingresa Numero de Cuenta`;
        // document.getElementById('modalHeader2').innerText = `${account.accountNumber} - ${account.propietario}`;
        document.getElementById('modalContent').innerHTML = `
            <p><strong>Propietario:</strong> </p>
            <p><strong>Tipo: ${accountNumber}</strong> </p>
        `;
        document.getElementById('myModal').showModal();
    // } else {
        // alert('Account not found');
    // }
    
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

function GetFacturaData(accountNumber){
    const receipt = receipts.find(x=>x.accountNumber == accountNumber)
    if(receipt){
        console.log("yeah")
        const status = 200
        return {detail:receipt,status:status}
    }else{
        console.log("not found")
        const status = 404
        return{detail:"not found",status:status}
    }

}

function ValidadorRecibo(){
    const accountNumber = document.getElementById("pago-input")
    const transactionType = localStorage.getItem('transactionType')
    console.log(transactionType)
    // console.log(accountNumber.value)
    const receiptReq = GetFacturaData(accountNumber.value);
    if(transactionType != receiptReq.detail.serviceType){
        document.getElementById("myModal").close()
        swal("Oops",`Este Recibo no es de ${transactionType}`,"Error")
    }else{

        if(receiptReq.status == 200){
            const receipt = GetFacturaData(accountNumber.value).detail;
            document.getElementById('modalContent').innerHTML = `
                    <p><strong>Propietario: ${receipt.propietario}</strong> </p>
                    <p><strong>Tipo: ${receipt.serviceType}</strong> </p>
                    <p><strong>Total: ${receipt.amountDue}</strong> </p>
                    <p><strong>Fecha Limite: ${receipt.dueDate}</strong> </p>
                `;
    
                const payButton = document.getElementById("payButton");
                payButton.classList.remove("hidden");
        }else{
            document.getElementById("myModal").close()
            swal("Oops!", "Este Recibo No Existe!", "Error");
        }
    }

}
function generateGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function ValidateReceiptCompany(company){

    const single = companies.find(x=>{
        const type = x.name.split(" ")
        if(type[0] == company)return x
    })
    switch (company) {
        case "Energy":
                return single
            break;
            case "Telephone":
                return single
            break;
            case "Internet":
                return single
            break;
            case "Water":
                return single
            break;
    
        default:
            break;
    }
}

function GenerateTicket(accountNumber) {
    const factura = GetFacturaData(accountNumber).detail;
    const company = companies.find(x => x.name === factura.companyName);

    const comAddress = company.address.split(", ");
    const usrAddress = factura.userAddress.split(", ");
    const doc = new jsPDF();

    // Title
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text(`Recibo de ${company.name}`, 105, 20, null, null, 'center');

    // Company Information
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(`${company.name}`, 10, 30);
    doc.setFont("helvetica", "normal");
    doc.text(comAddress[0], 10, 35);
    doc.text(`${comAddress[1]}, ${comAddress[2]}, ${comAddress[3]}`, 10, 40);
    doc.text(`Telefono: ${company.phone}`, 10, 45);
    doc.line(10, 48, 200, 48); // Horizontal line

    // Receipt Details
    // Random Receipt No. (you could generate this randomly)
    const receiptNo = "0001234"; // Replace with actual random generation
    doc.setFont("helvetica", "bold");
    doc.text("Recibo No:", 10, 60);
    doc.setFont("helvetica", "normal");
    doc.text(receiptNo, 50, 60);

    doc.setFont("helvetica", "bold");
    doc.text("Fecha:", 10, 65);
    doc.setFont("helvetica", "normal");
    doc.text(new Date().toLocaleDateString(), 50, 65);

    // Customer Information
    doc.setFont("helvetica", "bold");
    doc.text("Direccion Cliente:", 10, 75);
    doc.setFont("helvetica", "normal");
    doc.text(usrAddress[0], 50, 75);
    doc.text(`${usrAddress[1]}, ${usrAddress[2]}, ${usrAddress[3]}`, 50, 80);

    doc.setFont("helvetica", "bold");
    doc.text("Cuenta No:", 10, 85);
    doc.setFont("helvetica", "normal");
    doc.text(factura.accountNumber, 50, 85);
    doc.line(10, 90, 200, 90); // Horizontal line

    // Payment Details
    doc.setFont("helvetica", "bold");
    doc.text("Pago:", 10, 95);
    doc.setFont("helvetica", "normal");
    doc.text(`$${factura.amountDue.toFixed(2)}`, 50, 95);

    doc.setFont("helvetica", "bold");
    doc.text("Metodo:", 10, 100);
    doc.setFont("helvetica", "normal");
    doc.text("Credit Card", 50, 100);

    doc.line(10, 105, 200, 105); // Horizontal line

    // Footer
    doc.setFont("helvetica", "bold");
    doc.text("Gracias Por su Preferencia!", 105, 120, null, null, 'center');

    // Adding a rectangle border around the receipt
    doc.rect(10, 10, 190, 130); // Rectangle border

    // Save the PDF
    doc.save(`Recibo de ${company.name}.pdf`);
}

function SuccessModalClose() {
    // Close the HTML modal
    const accNum = document.getElementById('pago-input').value
    document.getElementById('myModal').close();

    // Show SweetAlert after closing the modal
    swal({
        title: "Excelente!",
        text: "Transaccion Realizada con Exito!",
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
            // Code to execute if "Do it!" was clicked
            GenerateTicket(accNum)
        } else {
            // Code to execute if "Stop" was clicked
            console.log("User chose to stop.");
        }
    });
}

