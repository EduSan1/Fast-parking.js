const exitRegister = async () => {
    const exitBoards = document.getElementById("exitBoards");
    const exitForm = document.getElementById("exitForm");
    const exitFormButton = document.getElementById("exitFormButton");
    const exitTable = document.getElementById("exitTable");


    let selectedClient = null
    let selectedRegister = null
    let selectedBoard = null

    const getCars = async () => {

        const url = "http://localhost/estacionamento/projetoEstacionamento/api/veiculos/estacionados/";
        const response = await fetch(url);
        const data = await response.json();
        return data
    }

    const getRegisterByBoard = async (board) => {

        const url = "http://localhost/estacionamento/projetoEstacionamento/api/registros/buscar/" + board;
        const response = await fetch(url);
        const data = await response.json();
        return data
    }

    const getExitRegisters = async () => {
        const url = "http://localhost/estacionamento/projetoEstacionamento/api/registros/saida";
        const response = await fetch(url);
        const data = await response.json();
        return data
    }

    const createOptions = () => {

        boards.map(board => {
            const option = document.createElement("option")

            option.setAttribute("value", `${board.placa},${board.idRegistro}`);
            option.textContent = `${board.placa}`

            exitBoards.appendChild(option);
        })
    }

    const registerExit = async () => {

        const updateRegister = {
            horaEntrada: selectedClient.horaEntrada,
            diaEntrada: selectedClient.diaEntrada,
            precoFinal: selectedClient.valorTotal,
            idVagas: selectedClient.idVaga,
            idVeiculo: selectedClient.idVeiculo
        }
        
        const url = 'http://localhost/estacionamento/projetoEstacionamento/api/registros/' + selectedRegister;
        const options = {
            "method": 'PUT',
            'body': JSON.stringify(updateRegister),
            'headers': {
                'content-type': 'application/json'
            }

        }

        const response = await fetch(url, options)
        const data = await response.json()
        alert(data.message)

        exitBoards.replaceChildren()
        exitBoards.value = ""

        exitForm.replaceChildren()
        exitFormButton.replaceChildren()

        exitTable.replaceChildren()
        exitTable.innerHTML = `
        <tr class="exit-table-title">
            <th>Cliente</th>
            <th>Placa</th>
            <th>Telefone</th>
            <th>Data Saída</th>
            <th>Hora Saída</th>
        </tr>
        `

        await createExitTable()
        await createOptions()

    }

    const createForm = async (event) => {
        
        [selectedBoard, selectedRegister] = event.target.value.split(',')

        selectedClient = await getRegisterByBoard(selectedBoard)

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
            <p>${selectedClient.totalDias}d e ${selectedClient.totalHoras}h</p>
        </div>
    </div>
    
    <div class="exit-form-camp">
        <p>Vaga</p>
        <div class="exit-form-camp-result">
            <p>${selectedClient.setor + selectedClient.vaga}</p>
        </div>
    </div>
    
    <div class="exit-form-camp">
        <p>Valor Total:</p>
        <div class="exit-form-camp-result">
            <p>R$ ${selectedClient.valorTotal}</p>
        </div>
    </div>`

        exitFormButton.innerHTML = `
        <button id="registerExit">Confirmar Saída</button>
        `

        const registerExitButton = document.getElementById("registerExit");

        registerExitButton.addEventListener("click", registerExit);

    }

    const createExit = (registry) => {

        const tr = document.createElement("tr")
        const name = document.createElement("td")
        const board = document.createElement("td")
        const phone = document.createElement("td")
        const exitDate = document.createElement("td")
        const exitTime = document.createElement("td")

        name.textContent = registry.nome
        board.textContent = registry.placa
        phone.textContent = registry.telefone
        exitDate.textContent = registry.dataSaida
        exitTime.textContent = registry.horaSaida

        tr.appendChild(name)
        tr.appendChild(board)
        tr.appendChild(phone)
        tr.appendChild(exitDate)
        tr.appendChild(exitTime)

        exitTable.appendChild(tr)

    }

    const createExitTable = async () => {

        const exitClients = await getExitRegisters()

        if (exitClients.idErro == "404") {
            console.log("Não forma encontrados registros de saída")
            return
        }

        exitClients.map(registry => { createExit(registry) })

    }

    const boards = await getCars()
    await createExitTable()
    await createOptions()




    exitBoards.addEventListener("change", createForm);
};

export { exitRegister };
