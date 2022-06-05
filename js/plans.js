'use strict'

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
  plansCardInfoFirstHour.textContent = `Primeria Hora: R$ ${plan.primeiraHora}`
  plansCardInfoOutherHours.textContent = `Demais Hora: R$ ${plan.horaAdicional}`
  plansCardInfoDaily.textContent = `Diária: R$ ${plan.diaria}`

  plansCard.setAttribute("class", "plans-card")

  plansCardHeader.setAttribute("class", "plans-card-header");
  plansCardImageContainer.setAttribute("class", "plans-card-image");
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

const loadCardPlans = () => {
  plans.forEach(plan => {

    plansContainer.appendChild(createCardPlans(plan))

  });
}

const plansRegister = () => {

  const plansRegisterButton = document.getElementById("plansRegisterButton");
  const plansContainer = document.getElementById("plansContainer");

  const planName = document.getElementById("planName");
  const planFirstHour = document.getElementById("planFirstHour");
  const planOutherHours = document.getElementById("planOutherHours");
  const planDaily = document.getElementById("planDaily");

  loadCardPlans()

  const register = () => {

    const plansApi = {
      nome: planName.value,
      primeiraHora: parseFloat(planFirstHour.value),
      horaAdicional: parseFloat(planOutherHours.value),
      diaria: parseFloat(planDaily.value)
    }

    console.log(plansApi.nome)
    console.log(plansApi.primeiraHora)
    console.log(plansApi.horaAdicional)
    console.log(plansApi.diaria)

    if (isNaN(plansApi.diaria) || isNaN(plansApi.primeiraHora) || isNaN(plansApi.horaAdicional)) {
      console.log("Preencha todos os valoress")
    } else {
     if(plansApi.nome != "") {
      plans.push(plansApi)

      plansContainer.replaceChildren()

      loadCardPlans()
     }else {
      console.log("Preencha o nome")
     }
    }

  };

  plansRegisterButton.addEventListener("mousedown", register);

};

export { plansRegister };
