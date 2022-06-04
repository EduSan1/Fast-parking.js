import { registerEntry } from "../entryRegister.js";
import { moveCar } from "../moveCar.js";
import { plansRegister } from "../plans.js";

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
                        <input type="text" name="name">
                    </div>

                    <div class="entry-form-rg">
                        <p>R.G:</p>
                        <input type="text" name="rg">
                    </div>

                    <div class="entry-form-phone">
                        <p>Telefone:</p>
                        <input type="text" name="phone">
                    </div>

                    <div class="entry-form-email">
                        <p>Email:</p>
                        <input type="text" name="email">
                    </div>

                    <div class="entry-form-board">
                        <p>Placa:</p>
                        <input type="text" name="board">
                    </div>

                    <div class="entry-form-plans">
                        <p>Planos:</p>
                        <select name="plans" id="plans">
                            <option value="">Planos</option>
                        </select>
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
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>A203</td>
                        <td>Cadastrar Saída </td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>A203</td>
                        <td>Cadastrar Saída </td>
                    </tr>
                   
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>A203</td>
                        <td>Cadastrar Saída </td>
                    </tr>
                   
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>A203</td>
                        <td>Cadastrar Saída </td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>A203</td>
                        <td>Cadastrar Saída </td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>A203</td>
                        <td>Cadastrar Saída </td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>A203</td>
                        <td>Cadastrar Saída </td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>A203</td>
                        <td>Cadastrar Saída </td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>A203</td>
                        <td>Cadastrar Saída </td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>A203</td>
                        <td>Cadastrar Saída </td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>A203</td>
                        <td>Cadastrar Saída </td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>A203</td>
                        <td>Cadastrar Saída </td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>A203</td>
                        <td>Cadastrar Saída </td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>A203</td>
                        <td>Cadastrar Saída </td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>A203</td>
                        <td>Cadastrar Saída </td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>A203</td>
                        <td>Cadastrar Saída </td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>A203</td>
                        <td>Cadastrar Saída </td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>A203</td>
                        <td>Cadastrar Saída </td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>A203</td>
                        <td>Cadastrar Saída </td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>A203</td>
                        <td>Cadastrar Saída </td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>A203</td>
                        <td>Cadastrar Saída </td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>A203</td>
                        <td>Cadastrar Saída </td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>A203</td>
                        <td>Cadastrar Saída </td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>A203</td>
                        <td>Cadastrar Saída </td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>A203</td>
                        <td>Cadastrar Saída </td>
                    </tr>
                     <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>A203</td>
                        <td>Cadastrar Saída </td>
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
                        <select name="board" id="boards">
                            <option value="">ACV-1234</option>
                        </select>
                    </div>
                </div>
                <div class="exit-form-register">
                    <div class="exit-form-camp">
                        <p>Nome Cliente:</p>
                        <div class="exit-form-camp-result">
                            <p>Jorge</p>
                        </div>
                    </div>
                    <div class="exit-form-camp">
                        <p>Plano:</p>
                        <div class="exit-form-camp-result">
                            <p>Gold</p>
                        </div>
                    </div>
                    <div class="exit-form-camp">
                        <p>Hora entrada:</p>
                        <div class="exit-form-camp-result">
                            <p>13:00</p>
                        </div>
                    </div>
                    <div class="exit-form-camp">
                        <p>Dia Entrada:</p>
                        <div class="exit-form-camp-result">
                            <p>29/03/2022</p>
                        </div>
                    </div>

                    <div class="exit-form-camp">
                        <p>Tempo Total:</p>
                        <div class="exit-form-camp-result">
                            <p>20h</p>
                        </div>
                    </div>

                    <div class="exit-form-camp">
                        <p>Vaga</p>
                        <div class="exit-form-camp-result">
                            <p>A102</p>
                        </div>
                    </div>

                    <div class="exit-form-camp">
                        <p>Valor Total:</p>
                        <div class="exit-form-camp-result">
                            <p>R$ 200,00</p>
                        </div>
                    </div>

                </div>
                <div class="exit-form-register-button">
                    <button id="registerExit">Confirmar Saída</button>
                </div>
            </div>
            <div class="exit-title-table">
                <p>Registro de Saída</p>
            </div>
            <div class="exit-table-container">
                <table class="exit-table">
                    <tr class="exit-table-title">
                        <th>Cliente</th>
                        <th>Placa</th>
                        <th>Telefone</th>
                        <th>Data Saída</th>
                        <th>Hora Saída</th>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>28/09/2022</td>
                        <td>13:23</td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>13/03/2022</td>
                        <td>14:20 </td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>28/09/2022</td>
                        <td>13:23</td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>13/03/2022</td>
                        <td>14:20 </td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>28/09/2022</td>
                        <td>13:23</td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>13/03/2022</td>
                        <td>14:20 </td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>28/09/2022</td>
                        <td>13:23</td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>13/03/2022</td>
                        <td>14:20 </td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>28/09/2022</td>
                        <td>13:23</td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>13/03/2022</td>
                        <td>14:20 </td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>28/09/2022</td>
                        <td>13:23</td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>13/03/2022</td>
                        <td>14:20 </td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>28/09/2022</td>
                        <td>13:23</td>
                    </tr>
                    <tr>
                        <td>Cleiton Silva Santos</td>
                        <td>ACB-1234</td>
                        <td>(11) 99999-9999</td>
                        <td>13/03/2022</td>
                        <td>14:20 </td>
                    </tr>
                </table>
            </div>
        </div>
        `;
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
                <input type="text" name="plan">
            </div>
            <div class="plans-form-camp">
                <p>Primeira Hora:</p>
                <input type="text" name="plan">
            </div>
            <div class="plans-form-camp">
                <p>Demais Horas:</p>
                <input type="text" name="plan">
            </div>
            <div class="plans-form-camp">
                <p>Diaria:</p>
                <input type="text" name="plan">
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
                <p>200</p>
        </div>
        <div class="report-card-info-container">
            <div class="report-card-info-image">
                <img src="./assets/icons/planos.png" alt="">
            </div>
            <p>Entrada de carros: </p>
            <p>200</p>
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

                <p>Entrada de carros: </p>
                <p>2000</p>
        </div>
        <div class="report-card-info-container">
            <div class="report-card-info-image">
                <img src="./assets/icons/planos.png" alt="">
            </div>
            <p>Entrada de carros: </p>
            <p>2000</p>
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
                <p>22300</p>
        </div>
        <div class="report-card-info-container">
            <div class="report-card-info-image">
                <img src="./assets/icons/planos.png" alt="">
            </div>
            <p>Entrada de carros: </p>
            <p>200</p>
        </div>
    </div>


</div>
</div>

        `;
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
