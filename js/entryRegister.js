
const entrys = [{
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
    idVaga: 0,
    Plano: "Gold",
    idPlano: 2
}, {
    vaga: 24,
    setor: "A",
    idVaga: 1,
    Plano: "Bronze",
    idPlano: 4
}, {
    vaga: 25,
    setor: "B",
    idVaga: 2,
    Plano: "Silver",
    idPlano: 1
}, {
    vaga: 26,
    setor: "A",
    idVaga: 3,
    Plano: "Platinum",
    idPlano: 3
}, {
    vaga: 27,
    setor: "B",
    idVaga: 4,
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

    const createEntryTable = (entry) => {
        // <tr>
        //                 <td>Cleiton Silva Santos</td>
        //                 <td>ACB-1234</td>
        //                 <td>(11) 99999-9999</td>
        //                 <td>A203</td>
        //                 <td>Cadastrar Saída </td>
        //             </tr>   

        const tr = document.createElement("tr")
        const nameClient = document.createElement("td")
        const boardCar = document.createElement("td")
        const phoneClient = document.createElement("td")
        const vacancie = document.createElement("td")
        const registerExit = document.createElement("td")
    }

    const createVacanciesOption = (vacancie) => {

        const option = document.createElement("option")

        option.setAttribute("value", `${vacancie.idVaga}`);
        option.textContent = `${vacancie.setor + vacancie.vaga}`

        registerVacancies.appendChild(option);

    }

    const setPlan = (event) => {
        registerPlan.textContent = vacancies[event.target.value].Plano
    }



    vacancies.map(vacancie => { createVacanciesOption(vacancie) })
    registerVacancies.addEventListener("change", setPlan)

    const registerClient = async () => {
        const client = {
            nome: `${clientName.value}`,
            documento: `${clientRg.value}`,
            email: `${clientEmail.value}`,
            telefone: `${clientPhone.value}`
        }

        const url = 'http://localhost/estacionamento/projetoEstacionamento/api/clientes';
        const options = {
            "method": 'POST',
            'body': JSON.stringify(client),
            'headers': {
                'content-type': 'application/json'
            }

        }

        const response = await fetch(url, options)
        const data = await response.json()

        const idClient = data.idCliente
        registerCar(idClient)
    }

    const registerCar = async (idClient) => {
        console.log(idClient)
        const car = {
            placa: `${carBoard.value}`,
            idCliente: idClient
        }

        console.log(JSON.stringify(car))

        const url = 'http://localhost/estacionamento/projetoEstacionamento/api/veiculos';
        const options = {
            "method": 'GET',
            'headers': {
                'content-type': 'application/json'
            }

        }

        const response = await fetch(url, options)
        const data = await response.json()

        console.log(data)

        // const idCar = data.idVeiculo
        // registerEntry(idCar)
    }

    const registerEntry = async (idCar) => {
        const entry = {
            idVagas: `${registerVacancies.value}`,
            idVeiculo: idCar
        }

        const url = 'http://localhost/estacionamento/projetoEstacionamento/api/registros';
        const options = {
            "method": 'POST',
            'body': JSON.stringify(entry),
            'headers': {
                'content-type': 'application/json'
            }

        }

        const response = await fetch(url, options)
        const data = await response.json()

        console.log(data)


    }



    entryButton.addEventListener("click", registerClient)
}

export { registerEntry };
