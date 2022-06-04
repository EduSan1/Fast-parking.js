const plans = [
  {
    nome: "Bronze",
    primeiraHora: 15.0,
    demaisHoras: 10.0,
    diaria: 100.0,
  },

  {
    nome: "Silver",
    primeiraHora: 15.0,
    demaisHoras: 20.0,
    diaria: 200.0,
  },

  {
    nome: "Gold",
    primeiraHora: 25.0,
    demaisHoras: 20.0,
    diaria: 300.0,
  },
];

{/* <div class="plans-card">
    <div class="plans-card-header">
        <p>Gold</p> 
        <div class="plans-card-image">
            <img src="assets/icons/edit.png" alt="">
        </div>
    </div>
    <div class="plans-card-info">
        <p>Primeira hora: R$ 10,00</p>
        <p>Demais horas: R$ 20,00</p>
        <p>Diária: R$ 10,00</p>
    </div>
</div> */}

const plansRegister = () => {
  const plansRegisterButton = document.getElementById("plansRegisterButton");
  const plansContainer = document.getElementById("plansContainer");

  const register = () => {};

  plansRegisterButton.addEventListener("click", register);
};

export { plansRegister };
