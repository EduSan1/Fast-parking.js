
const entry = [{
    nomeCliente: "",
    placa: "",
    telefoneCliente: "",
    vaga: "",
    idRegistro: 0
},
{
    nomeCliente: "",
    placa: "",
    telefoneCliente: "",
    vaga: "",
    idRegistro: 0
},
{
    nomeCliente: "",
    placa: "",
    telefoneCliente: "",
    vaga: "",
    idRegistro: 0
},
{
    nomeCliente: "",
    placa: "",
    telefoneCliente: "",
    vaga: "",
    idRegistro: 0
}]

const ClientRegister = {
    nome: "vinicio",
    documento: "00.000.000.00",
    email: "vinicio@vinicio.com",
    telefone: "(11) 99999-9999"
}

const CarRegister = {
    placa: "DCE-1597",
    idCliente: 1
}

const entryRegister = {
    idVeiculo: 1,
    idVagas: 1
}

const vacancies = [{
    vaga: 23,
    setor: "A",
    idVaga: 5,
    Plano: "Gold",
    idPlano: 2
}, {
    vaga: 24,
    setor: "A",
    idVaga: 4,
    Plano: "Bronze",
    idPlano: 4
}, {
    vaga: 25,
    setor: "B",
    idVaga: 3,
    Plano: "Silver",
    idPlano: 1
}, {
    vaga: 26,
    setor: "A",
    idVaga: 2,
    Plano: "Platinum",
    idPlano: 3
}, {
    vaga: 27,
    setor: "B",
    idVaga: 1,
    Plano: "Gold",
    idPlano: 2
}]

const plans = [
    {
        nome: "Bronze",
        primeiraHora: 15.0,
        horaAdicional: 10.0,
        diaria: 100.0,
    },

    {
        nome: "Silver",
        primeiraHora: 15.0,
        horaAdicional: 20.0,
        diaria: 200.0,
    },

    {
        nome: "Gold",
        primeiraHora: 25.0,
        horaAdicional: 20.0,
        diaria: 300.0,
    }
];



const registerEntry = () => {
    const entryButton = document.getElementById("registerEntry")
    const clientName = document.getElementById("entryName")
    const clientRg = document.getElementById("entryRg")
    const clientPhone = document.getElementById("entryPhone")
    const clientEmail = document.getElementById("entryEmail")
    const carBoard = document.getElementById("entryBoard")
    const registerPlan = document.getElementById("entryPlans")
    const registerVacancies = document.getElementById("entryVacancies")

    const createVacanciesOption = (vacancie) => {

        const option = document.createElement("option")

        option.setAttribute("value", `${vacancie.idPlano}`);
        option.textContent = `${vacancie.setor + vacancie.vaga}`

        registerVacancies.appendChild(option);

    }

    const setPlan = (event) => {
        console.log(event.target)
        console.log("plano: " + vacancies[event.target.value].Plano)
        registerPlan.textContent = vacancies[event.target.value].Plano 
     

    }

  

    vacancies.map(vacancie => {createVacanciesOption(vacancie)})
    registerVacancies.addEventListener("change",setPlan)

    const registerClient = () => {
        const client = {
            nome: `${clientName.value}`,
            documento: `${clientRg.value}`,
            email: `${clientEmail.value}`,
            telefone: `${clientPhone.value}`
        }

        console.log(client)

        return 2
    }

    const registerCar = (idClient) => {
        const car = {
            placa: `${carBoard.value}`,
            idClient: idClient
        }

        console.log(car)

        return 1
    }

    const registerEntry = (idCar) => {
        const rntry = {
            idVagas: `${registerVacancies.value}`,
            idVeiculo: idCar
        }

        console.log(rntry)

 
    }

    const register = () => {
        const idClient = registerClient()
        const idCar = registerCar(idClient)
        registerEntry(idCar)

    }

    entryButton.addEventListener("click", register)
}

export { registerEntry };
