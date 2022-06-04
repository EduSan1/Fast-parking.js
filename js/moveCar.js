const garage = [
  {
    numero: 23,
    idSetor: 1,
    idEstacionamento: 2,
    idPlano: 3,
  },
  {
    numero: 2,
    idSetor: 1,
    idEstacionamento: 2,
    idPlano: 3,
  },
  {
    numero: 54,
    idSetor: 1,
    idEstacionamento: 2,
    idPlano: 3,
  },
  {
    numero: 12,
    idSetor: 1,
    idEstacionamento: 2,
    idPlano: 3,
  },
  {
    numero: 87,
    idSetor: 1,
    idEstacionamento: 2,
    idPlano: 3,
  },
];

const moveCar = () => {
  const moveCarButton = document.getElementById("moveCar");
  const moveCarBoard = document.getElementById("moveCarBoard");
  const moveCarGarage = document.getElementById("moveCarGarage");

  console.log(moveCarBoard);
  console.log(moveCarGarage);
  const move = () => {
    console.log("teste");
  };

  moveCarButton.addEventListener("click", move);
};

export { moveCar };
