
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


const registerEntry = async () => {
    const entryButton = document.getElementById("registerEntry")
    const clientName = document.getElementById("entryName")
    const clientRg = document.getElementById("entryRg")
    const clientPhone = document.getElementById("entryPhone")
    const clientEmail = document.getElementById("entryEmail")
    const carBoard = document.getElementById("entryBoard")
    const registerPlan = document.getElementById("entryPlans")
    const registerVacancies = document.getElementById("entryVacancies")
    const entryTable = document.getElementById("entryTable")

    const createEntryTable = (entry) => {


        const tr = document.createElement("tr")
        const nameClient = document.createElement("td")
        const boardCar = document.createElement("td")
        const phoneClient = document.createElement("td")
        const vacancie = document.createElement("td")
        const registerExit = document.createElement("td")

        nameClient.textContent = entry.nomeCliente
        boardCar.textContent = entry.placa
        phoneClient.textContent = entry.telefoneCliente
        vacancie.textContent = entry.vaga
        registerExit.textContent = entry.idRegistro

        tr.appendChild(nameClient)
        tr.appendChild(boardCar)
        tr.appendChild(phoneClient)
        tr.appendChild(vacancie)
        tr.appendChild(registerExit)

        entryTable.appendChild(tr)


    }

    entrys.map(entry => { createEntryTable(entry) })

    const createVacanciesOption = (vacancie) => {

        const option = document.createElement("option")

        option.setAttribute("value", `${vacancie.idVaga}`);
        // option.setAttribute("id", `${vacancie.idPlano}`)
        option.textContent = `${vacancie.setor + vacancie.vaga}`

        registerVacancies.appendChild(option);

    }

    const setPlan = async (event) => {

        console.log(event.target.value)

        let url = "http://localhost/estacionamento/projetoEstacionamento/api/vagas/" + event.target.value;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data)
        const idPLan = data.idPlano

        url = "http://localhost/estacionamento/projetoEstacionamento/api/planos/" + idPLan;
        response = await fetch(url);
        data = await response.json();
        console.log(data)
        registerPlan.textContent = data.nome
    }

    const getFreeVacancies = async () => {
        const url = "http://localhost/estacionamento/projetoEstacionamento/api/vagas/listar/livres";
        const response = await fetch(url);
        const data = await response.json();
        return data
    }

    const vacancies = await getFreeVacancies()


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

        return data.idCliente
    }

    const registerCar = async (idClient) => {

        const car = {
            placa: `${carBoard.value}`,
            idCliente: idClient
        }

        console.log(JSON.stringify(car))

        const url = 'http://localhost/estacionamento/projetoEstacionamento/api/veiculos';
        const options = {
            "method": 'POST',
            'body': JSON.stringify(car),
            'headers': {
                'content-type': 'application/json'
            }

        }

        const response = await fetch(url, options)
        const data = await response.json()

        console.log(data)

        return data.idVeiculo

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

    const register = async () => {
        const idClient = await registerClient()
        const idCar = await registerCar(idClient)
        console.log(idCar)
        registerEntry(idCar)
    }

    const phoneMask = (event) => {
        let phone = event.target.value
        phone = phone.replace(/[^0-9]/g, '')
        phone = phone.replace(/(.{2})(.{5})(.{4})/, '($1) $2-$3')
        phone = phone.replace(/(.{15})(.*)/, '$1')
        clientPhone.value = phone
    }

    const rgMask = (event) => {
        let rg = event.target.value
        rg = rg.replace(/([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{2})/, '$1.$2.$3-$4')
        rg = rg.replace(/(.{13})(.*)/, '$1')
        clientRg.value = rg
    }

    const boardMask = (event) => {
        let board = event.target.value
        board = board.replace(/([a-zA-Z]{3})([0-9]{4})/, '$1-$2')
        board = board.replace(/(.{8})(.*)/, '$1')
        carBoard.value = board.toUpperCase()
    }


    entryButton.addEventListener("click", register)
    clientPhone.addEventListener("input", phoneMask)
    clientRg.addEventListener("input", rgMask)
    carBoard.addEventListener("input", boardMask)
}

export { registerEntry };
