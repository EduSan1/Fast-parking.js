import { registerEntry } from "../entryRegister.js";
import { moveCar } from "../moveCar.js";
import { plansRegister } from "../plans.js";
import {reports} from "../reports.js";
import { exitRegister } from "../exitRegister.js";

const shortcutEntry = document.getElementById("shortcutEntry");
const shortcutExit = document.getElementById("shortcutExit");
const shortcutMove = document.getElementById("shortcutMove");
const shortcutPlans = document.getElementById("shortcutPlans");
const shortcutReports = document.getElementById("shortcutReports");
const mainContainer = document.getElementById("container");

const changePage = (shortcut) => {
    mainContainer.replaceChildren();

    if (shortcut.id == "shortcutEntry") {
        mainContainer.innerHTML = `  
        <div class="entry-container">
            <p class="entry-title">Cadastro de Entrada</p>
            <div class="entry-form-container">
                <div class="entry-form">
                    <div class="entry-form-name">
                        <p>Nome Cliente:</p>
                        <input type="text" id="entryName" name="name">
                    </div>

                    <div class="entry-form-rg">
                        <p>R.G:</p>
                        <input type="text" id="entryRg" name="rg">
                    </div>

                    <div class="entry-form-phone">
                        <p>Telefone:</p>
                        <input type="text" id="entryPhone" name="phone">
                    </div>

                    <div class="entry-form-email">
                        <p>Email:</p>
                        <input type="email" id="entryEmail" name="email">
                    </div>

                    <div class="entry-form-board">
                        <p>Placa:</p>
                        <input type="text" id="entryBoard" name="board">
                    </div>

                    <div class="entry-form-plans">
                        <p>Vaga:</p>
                        <select name="vacancies" id="entryVacancies">
                            <option value="">Vagas</option>
                        </select>
                    </div>

                    <div class="entry-form-plans">
                        <p>Planos:</p>
                        <div name="plans" id="entryPlans"></div>
                    </div>

                </div>
                <div class="entry-form-button">
                    <button id="registerEntry">Registrar</button>
                </div>
            </div>
            <p class="entry-register-title">Registro de Entradas</p>
            <div class="entry-reister-table-container">
                <table class="entry-reister-table">
                    <tr class="entry-reister-table-title">
                        <th>Cliente</th>
                        <th>Placa</th>
                        <th>Telefone</th>
                        <th>Vaga</th>
                        <th></th>
                    </tr>
                    
                </table>
            </div>
        </div>
        `;
        registerEntry();
    } else if (shortcut.id == "shortcutExit") {
        mainContainer.innerHTML = `
        <div class="exit-container">
            <div class="exit-title">
                <p>Cadastro de Saída</p>
            </div>
            <div class="exit-form">
                <div class="exit-form-board-container">
                    <div class="exit-form-board">
                        <p>Placa:</p>
                        <select name="board"  id="exitBoards">
                            <option value="">Selecione uma Placa</option>
                        </select>
                    </div>
                </div>
                <div id="exitForm" class="exit-form-register">
                  
                </div>
                <div id="exitFormButton" class="exit-form-register-button">
                    
                </div>
            </div>
            <div class="exit-title-table">
                <p>Registro de Saída</p>
            </div>
            <div class="exit-table-container">
                <table id="exitTable" class="exit-table">
                    <tr class="exit-table-title">
                        <th>Cliente</th>
                        <th>Placa</th>
                        <th>Telefone</th>
                        <th>Data Saída</th>
                        <th>Hora Saída</th>
                    </tr>
                   
                  
                </table>
            </div>
        </div>
        `
        exitRegister();
    } else if (shortcut.id == "shortcutMove") {
        mainContainer.innerHTML = `
    <div class="move-container">
    <div class="move-title">
      <p>Mover Veiculo</p>
    </div>
    <div class="move-form-container">
      <div class="move-form">
        <p>Veiculo:</p>
        <select name="car" id="moveCarBoard">
          <option value="">ADC-1234</option>
        </select>
      </div>

      <div class="move-form">
        <p>Vaga:</p>
        <select name="moveVaga" id="moveCarGarage">
          <option value="">A201</option>
        </select>
      </div>
      <div class="move-form-button">
        <button id="moveCar">Mover Veiculo</button>
      </div>
    </div>
  </div>
        `;
        moveCar();

    } else if (shortcut.id == "shortcutPlans") {
        mainContainer.innerHTML = `
    <div class="plans-container">
    <div class="plans-register-title"><p>Cadastro de Planos</p></div>
    <div class="plans-form-container">
            <div class="plans-form-camp">
                <p>Nome do Plano:</p>
                <input type="text" id="planName">
            </div>
            <div class="plans-form-camp">
                <p>Primeira Hora:</p>
                <input type="number" id="planFirstHour">
            </div>
            <div class="plans-form-camp">
                <p>Demais Horas:</p>
                <input type="number" id="planOutherHours">
            </div>
            <div class="plans-form-camp">
                <p>Diaria:</p>
                <input type="number" id="planDaily">
            </div>
            <div class="plans-form-button">
                <button id="plansRegisterButton">Cadastrar Plano</button>
            </div>
    </div>
    <div class="plans-title"><p>Planos</p></div>
    <div id="plansContainer" class="plans-card-container">
     
  
    </div>
</div>
        `;

        plansRegister()
    } else if (shortcut.id == "shortcutReports") {
        mainContainer.innerHTML = `
  
<div class="reports-container">
<div class="reports-title">
    <p>Relatórios</p>
</div>
<div class="reports-card-container">
    <div class="report-card">
        <div class="report-card-title">
            <p>Semanal</p>
        </div>
        <div class="report-card-info">
            <Fdiv class="report-card-info-container">
                <div class="report-card-info-image">
                    <img src="./assets/icons/entrada.png" alt="">
                </div>

                <p>Entrada de carros: </p>
                <p id="enterWeek"></p>
        </div>
        <div class="report-card-info-container">
            <div class="report-card-info-image">
                <img src="./assets/icons/planos.png" alt="">
            </div>
            <p>Lucro Total: </p>
            <p id="profitWeek" ></p>
        </div>
    </div>
    <div class="report-card">
        <div class="report-card-title">
            <p>Mensal</p>
        </div>
        <div class="report-card-info">
            <Fdiv class="report-card-info-container">
                <div class="report-card-info-image">
                    <img src="./assets/icons/entrada.png" alt="">
                </div>

                <p >Entrada de carros: </p>
                <p id="enterMonth" >2000</p>
        </div>
        <div class="report-card-info-container">
            <div class="report-card-info-image">
                <img src="./assets/icons/planos.png" alt="">
            </div>
            <p>Lucro Total: </p>
            <p id="profitMonth" ></p>
        </div>
    </div>
    <div class="report-card">
        <div class="report-card-title">
            <p>anual</p>
        </div>
        <div class="report-card-info">
            <Fdiv class="report-card-info-container">
                <div class="report-card-info-image">
                    <img src="./assets/icons/entrada.png" alt="">
                </div>

                <p>Entrada de carros: </p>
                <p id="enterYear" ></p>
        </div>
        <div class="report-card-info-container">
            <div class="report-card-info-image">
                <img src="./assets/icons/planos.png" alt="">
            </div>
            <p>Lucro Total: </p>
            <p  id="profitYear" ></p>
        </div>
    </div>


</div>
</div>`;
reports()
    } else {
        mainContainer.innerHTML = `
        <p>deu ruim</p>
        `;
    }
};

const changeShortcutClass = (shortcut) => {
    shortcutEntry.setAttribute("class", "shortcut-container");
    shortcutExit.setAttribute("class", "shortcut-container");
    shortcutMove.setAttribute("class", "shortcut-container");
    shortcutPlans.setAttribute("class", "shortcut-container");
    shortcutReports.setAttribute("class", "shortcut-container");

    shortcut.setAttribute("class", "shortcut-container-selected");

    changePage(shortcut);
};
shortcutEntry.addEventListener("click", () =>
    changeShortcutClass(shortcutEntry)
);
shortcutExit.addEventListener("click", () => changeShortcutClass(shortcutExit));
shortcutMove.addEventListener("click", () => changeShortcutClass(shortcutMove));
shortcutPlans.addEventListener("click", () =>
    changeShortcutClass(shortcutPlans)
);
shortcutReports.addEventListener("click", () =>
    changeShortcutClass(shortcutReports)
);
