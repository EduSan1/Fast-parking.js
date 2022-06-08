const exitRegister = () => {
    const exitBoards = document.getElementById("exitBoards");
    const exitForm = document.getElementById("exitForm");
    const exitFormButton = document.getElementById("exitFormButton");
    const exitTable = document.getElementById("exitTable");

    const boards = [{
        placa: "ABC-1234",
        idRegistro: 2
    }, {
        placa: "SDF-9467",
        idRegistro: 1
    }, {
        placa: "FDG-1375",
        idRegistro: 3
    }, {
        placa: "GFR-7688",
        idRegistro: 4
    }, {
        placa: "DIL-3456",
        idRegistro: 5
    }]

    const selectedClient = {
        nomeCliente: "Cleiton",
        plano: "Gold",
        horaEntrada: "13:00",
        diaEntrada: "2022-03-29",
        tempoTotal: "20h",
        vaga: "A102",
        valorPagar: 200.00,
    }

    const exitClients = [{
        nomeCliente: "Cleiton",
        placa: "ASD-1234",
        telefone: "(11) 01234-5678",
        diaSaida: "2022-03-29",
        horaSaida: "13:00"
    },{
        nomeCliente: "Pedro",
        placa: "VBN-0568",
        telefone: "(11) 54665-7688",
        diaSaida: "2022-03-29",
        horaSaida: "14:35"
    },{
        nomeCliente: "Jorge",
        placa: "HJK-4967",
        telefone: "(11) 67887-8901",
        diaSaida: "2022-03-28",
        horaSaida: "16:14"
    },{
        nomeCliente: "Andreia",
        placa: "FDG-2648",
        telefone: "(11) 12366-5677",
        diaSaida: "2022-03-28",
        horaSaida: "13:23"
    },{
        nomeCliente: "Virginia",
        placa: "TYU-4756",
        telefone: "(11) 03454-3465",
        diaSaida: "2022-03-27",
        horaSaida: "12:34"
    },]


    const createOptions = () => {

        boards.map(board => {
            const option = document.createElement("option")

            option.setAttribute("value", `${board.idRegistro}`);
            option.textContent = `${board.placa}`

            exitBoards.appendChild(option);
        })
        // <option value="">ACV-1234</option>
    }

    const registerExit = () => { console.log("teste")}

    const createForm = () => {

        exitForm.innerHTML = `
        <div class="exit-form-camp">
        <p>Nome Cliente:</p>
        <div class="exit-form-camp-result">
            <p>${selectedClient.nomeCliente}</p>
        </div>
    </div>
    <div class="exit-form-camp">
        <p>Plano:</p>
        <div class="exit-form-camp-result">
            <p>${selectedClient.plano}</p>
        </div>
    </div>
    <div class="exit-form-camp">
        <p>Hora entrada:</p>
        <div class="exit-form-camp-result">
            <p>${selectedClient.horaEntrada}</p>
        </div>
    </div>
    <div class="exit-form-camp">
        <p>Dia Entrada:</p>
        <div class="exit-form-camp-result">
            <p>${selectedClient.diaEntrada}</p>
        </div>
    </div>
    
    <div class="exit-form-camp">
        <p>Tempo Total:</p>
        <div class="exit-form-camp-result">
            <p>${selectedClient.tempoTotal}</p>
        </div>
    </div>
    
    <div class="exit-form-camp">
        <p>Vaga</p>
        <div class="exit-form-camp-result">
            <p>${selectedClient.vaga}</p>
        </div>
    </div>
    
    <div class="exit-form-camp">
        <p>Valor Total:</p>
        <div class="exit-form-camp-result">
            <p>R$ ${selectedClient.valorPagar}</p>
        </div>
    </div>`

        exitFormButton.innerHTML = `
        <button id="registerExit">Confirmar Saída</button>
        `

        const registerExitButton = document.getElementById("registerExit");

        registerExitButton.addEventListener("click", registerExit);

    }

    const createExitTable = (registry) => {

        const tr = document.createElement("tr")
        const name = document.createElement("td")
        const board = document.createElement("td")
        const phone = document.createElement("td")
        const exitDate = document.createElement("td")
        const exitTime = document.createElement("td")

        name.textContent = registry.nomeCliente
        board.textContent = registry.placa
        phone.textContent = registry.telefone
        exitDate.textContent = registry.diaSaida
        exitTime.textContent = registry.horaSaida

        tr.appendChild(name)
        tr.appendChild(board)
        tr.appendChild(phone)
        tr.appendChild(exitDate)
        tr.appendChild(exitTime)

        exitTable.appendChild(tr)
        
    }

    exitClients.map(registry => {
        createExitTable(registry)
    })

    createOptions()

    


    exitBoards.addEventListener("change", createForm);
};

export { exitRegister };
