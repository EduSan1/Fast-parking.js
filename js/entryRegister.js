
const entry = [ {
    nomeCliente:"",
    placa:"",
    telefoneCliente:"",
    vaga:"",
    idRegistro: 0
},
{
    nomeCliente:"",
    placa:"",
    telefoneCliente:"",
    vaga:"",
    idRegistro: 0
},
{
    nomeCliente:"",
    placa:"",
    telefoneCliente:"",
    vaga:"",
    idRegistro: 0
},
{
    nomeCliente:"",
    placa:"",
    telefoneCliente:"",
    vaga:"",
    idRegistro: 0
}]

const ClientRegister = {
    nome: "vinicio",
    documento: "00.000.000.00",
    email: "vinicio@vinicio.com",
    telefone: "(11) 99999-9999"
}

const CarRegister ={
        placa : "DCE-1597",
        idCliente : 1
}

const entryRegister ={
    idVeiculo : 1,
    idVagas : 1
}



const registerEntry = () => {
    const entryButton = document.getElementById("registerEntry")

    const register = () => {
        console.log("teste")
    }
    
    entryButton.addEventListener("click", register)
}

export {registerEntry};
