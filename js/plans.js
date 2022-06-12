'use strict'


const searchPlan = async(event) => {
  const id = event.target.id
  const plan = await searchPlanById(id)
  showPlan(plan)
}
const searchPlanById = async (id) => {

    const url = "http://localhost/estacionamento/projetoEstacionamento/api/planos/"+id;
    const response = await fetch(url);
    const data = await response.json();
    return data

}
const showPlan = (plan) => {
  // const planName = document.getElementById("planName");
  // const planFirstHour = document.getElementById("planFirstHour");
  // const planOutherHours = document.getElementById("planOutherHours");
  // const planDaily = document.getElementById("planDaily");
  // const plansRegisterButton = document.getElementById("plansRegisterButton");

  // const editPlan = async (plan,id) => {
  //   const url = 'http://localhost/estacionamento/projetoEstacionamento/api/planos/' + id;
  //   const options = {
  //     "method": 'PUT',
  //     'body': JSON.stringify(plan),
  //     'headers': {
  //       'content-type': 'application/json'
  //     }

  //   }

  //   const response = await fetch(url, options)
  // }

  // const edit = async (event) => {
  //   console.log(event)
  //   // const plansApi = {
  //   //   nome: planName.value,
  //   //   primeiraHora: parseFloat(planFirstHour.value),
  //   //   horaAdicional: parseFloat(planOutherHours.value),
  //   //   diaria: parseFloat(planDaily.value)
  //   // }

  //   // if (isNaN(plansApi.diaria) || isNaN(plansApi.primeiraHora) || isNaN(plansApi.horaAdicional)) {
  //   //   alert("Preencha todos os valoress")
  //   // } else {
  //   //   if (plansApi.nome != "") {
  //   //     await editPlan(plansApi,id)

  //   //     plansContainer.replaceChildren()

  //   //     loadCardPlans(await getPlans())
  //   //   } else {
  //   //     alert("Preencha o nome")
  //   //   }
  //   // }

  // };

  // planName.value = plan.nome
  // planFirstHour.value = plan.primeiraHora
  // planOutherHours.value = plan.horaAdicional
  // planDaily.value = plan.diaria
  // plansRegisterButton.addEventListener("click", edit)
}

const createCardPlans = (plan) => {
  const plansCard = document.createElement("div")

  const plansCardHeader = document.createElement("div")
  const plansCardHeaderTitle = document.createElement("p")
  const plansCardImageContainer = document.createElement("div")
  const plansCardImage = document.createElement("img")

  const plansCardInfo = document.createElement("div")
  const plansCardInfoFirstHour = document.createElement("p")
  const plansCardInfoOutherHours = document.createElement("p")
  const plansCardInfoDaily = document.createElement("p")

  plansCardHeaderTitle.textContent = `${plan.nome}`
  plansCardInfoFirstHour.textContent = `Primeira Hora: R$ ${plan.primeiraHora}`
  plansCardInfoOutherHours.textContent = `Demais Hora: R$ ${plan.horaAdicional}`
  plansCardInfoDaily.textContent = `Diária: R$ ${plan.diaria}`

  plansCard.setAttribute("class", "plans-card")

  plansCardHeader.setAttribute("class", "plans-card-header");
  plansCardImageContainer.setAttribute("class", "plans-card-image");
  plansCardImage.setAttribute("id", `${plan.id}`);
  plansCardImage.addEventListener('click', searchPlan)
  plansCardImage.setAttribute("src", "assets/icons/edit.png");
  plansCardImage.setAttribute("alt", "editPlan");
  plansCardInfo.setAttribute("class", "plans-card-info");

  plansCardImageContainer.appendChild(plansCardImage);
  plansCardHeader.appendChild(plansCardHeaderTitle);
  plansCardHeader.appendChild(plansCardImageContainer);

  plansCardInfo.appendChild(plansCardInfoFirstHour);
  plansCardInfo.appendChild(plansCardInfoOutherHours);
  plansCardInfo.appendChild(plansCardInfoDaily);

  plansCard.appendChild(plansCardHeader)
  plansCard.appendChild(plansCardInfo)

  return plansCard
}

const loadCardPlans = (plans) => {
  plans.forEach(plan => {

    plansContainer.appendChild(createCardPlans(plan))

  });
}

const plansRegister = async () => {

  const plansRegisterButton = document.getElementById("plansRegisterButton");
  const plansContainer = document.getElementById("plansContainer");

  const planName = document.getElementById("planName");
  const planFirstHour = document.getElementById("planFirstHour");
  const planOutherHours = document.getElementById("planOutherHours");
  const planDaily = document.getElementById("planDaily");




  const getPlans = async () => {
    const url = "http://localhost/estacionamento/projetoEstacionamento/api/planos";
    const response = await fetch(url);
    const data = await response.json();
    return data
  };


  const planos = await getPlans();
  loadCardPlans(planos)

  const editPlanContainer = document.getElementById("editPlan")


  const registerPlan = async (plan) => {


    const url = 'http://localhost/estacionamento/projetoEstacionamento/api/planos';
    const options = {
      "method": 'POST',
      'body': JSON.stringify(plan),
      'headers': {
        'content-type': 'application/json'
      }

    }

    const response = await fetch(url, options)
  }

  const register = async () => {

    const plansApi = {
      nome: planName.value,
      primeiraHora: parseFloat(planFirstHour.value),
      horaAdicional: parseFloat(planOutherHours.value),
      diaria: parseFloat(planDaily.value)
    }

    if (isNaN(plansApi.diaria) || isNaN(plansApi.primeiraHora) || isNaN(plansApi.horaAdicional)) {
      alert("Preencha todos os valoress")
    } else {
      if (plansApi.nome != "") {
        await registerPlan(plansApi)

        plansContainer.replaceChildren()

        loadCardPlans(await getPlans())
      } else {
        alert("Preencha o nome")
      }
    }

  };

  plansRegisterButton.addEventListener("mousedown", register);

};

export { plansRegister };
