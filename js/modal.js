const entryModal = document.getElementById("entryModal")

const modalExit = document.getElementById("modalExit")

    const getVacancie = async (id) => {
        const url = "" + id;
        const response = await fetch(url);
        const data = await response.json();
        return data
    }

    const openModal = (client) => {
        console.log(client)

        entryModal.setAttribute("class", "entry-modal")

    }

    const closeModal = () => {
        entryModal.setAttribute("class", "entry-modal-none")
    }

    modalExit.addEventListener("click", closeModal)

    export {openModal} 