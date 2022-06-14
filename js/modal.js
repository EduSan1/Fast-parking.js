const entryModal = document.getElementById("entryModal");

const modalExit = document.getElementById("modalExit");

const modalClientName = document.getElementById("modalClientName");
const modalCarBoard = document.getElementById("modalCarBoard");
const modalEntryDay = document.getElementById("modalEntryDay");
const modalEntryHour = document.getElementById("modalEntryHour");
const modalVacancie = document.getElementById("modalVacancie");
const modalPlan = document.getElementById("modalPlan");

const getVacancie = async (id) => {
  const url = "http://localhost/estacionamento/projetoEstacionamento/api/vagas/" + id;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getSetor = async (id) => {
  const url = "http://localhost/estacionamento/projetoEstacionamento/api/setores/" + id;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const openModal = async (entryInformations) => {

  const parkingTitle = document.getElementById("parkingTitle");
  const parkingAddress = document.getElementById("parkingAddress");
  const parkingPhone = document.getElementById("parkingPhone");

  const now = new Date

  const date = now.getDate()
  const hour = now.getHours() + ":" + now.getMinutes()

  const vacancie = await getVacancie(entryInformations.registerVacancies)
  const setor = await getSetor(vacancie.idSetor)

  console.log(vacancie)

  modalClientName.textContent = " " + entryInformations.clientName;
  modalCarBoard.textContent = " " + entryInformations.carBoard;
  modalEntryDay.textContent = " " + date;
  modalEntryHour.textContent = " " + hour;
  modalVacancie.textContent = " " + setor.nome + vacancie.numero ;
  modalPlan.textContent = " " + entryInformations.registerPlan;

  entryModal.setAttribute("class", "entry-modal");
};

const closeModal = () => {
  entryModal.setAttribute("class", "entry-modal-none");

  modalClientName.textContent = "";
  modalCarBoard.textContent = "";
  modalEntryDay.textContent = "";
  modalEntryHour.textContent = "";
  modalVacancie.textContent = "";
  modalPlan.textContent = "";
};

modalExit.addEventListener("click", closeModal);

export { openModal };
