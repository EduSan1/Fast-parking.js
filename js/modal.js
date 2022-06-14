const entryModal = document.getElementById("entryModal");

const modalExit = document.getElementById("modalExit");

const modalClientName = document.getElementById("modalClientName");
const modalCarBoard = document.getElementById("modalCarBoard");
const modalEntryDay = document.getElementById("modalEntryDay");
const modalEntryHour = document.getElementById("modalEntryHour");
const modalVacancie = document.getElementById("modalVacancie");
const modalPlan = document.getElementById("modalPlan");

const getVacancie = async (id) => {
  const url = "" + id;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const openModal = (entryInformations) => {
  console.log(client);

  const parkingTitle = document.getElementById("parkingTitle");
  const parkingAddress = document.getElementById("parkingAddress");
  const parkingPhone = document.getElementById("parkingPhone");

  const now = new Date

  const date = now.getDate()
  const hour = now.getHours() + ":" + now.getMinutes()

  modalClientName.textContent = entryInformations.clientName;
  modalCarBoard.textContent = entryInformations.carBoard;
  modalEntryDay.textContent = date;
  modalEntryHour.textContent = hour;
  modalVacancie.textContent = entryInformations.registerVancie;
  modalPlan.textContent = entryInformations.registerPlan;

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
