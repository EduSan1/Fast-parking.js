


const moveCar = () => {
  const moveCarButton = document.getElementById("moveCar");
  const moveCarBoard = document.getElementById("moveCarBoard");
 

  const vagas = [{
    vaga: 23,
    setor: "A",
    idVaga: 5
}, {
    vaga: 24,
    setor: "A",
    idVaga: 4
}, {
    vaga: 25,
    setor: "B",
    idVaga: 3
}, {
    vaga: 26,
    setor: "A",
    idVaga: 2
}, {
    vaga: 27,
    setor: "B",
    idVaga: 1
}]

  const boards = [{
    placa: "ABC-1234",
    idVeiculo: 2
  }, {
    placa: "SDF-9467",
    idVeiculo: 1
  }, {
    placa: "FDG-1375",
    idVeiculo: 3
  }, {
    placa: "GFR-7688",
    idVeiculo: 4
  }, {
    placa: "DIL-3456",
    idVeiculo: 5
  }]
  

  console.log(moveCarBoard);
  console.log(moveCarGarage);


  const move = () => {
  };

  const createFormMove = () => {

    const moveCarGarage = document.getElementById("moveCarGarage");
    moveCarButton.addEventListener("click", move);
    
  }

  moveCarBoard.addEventListener("change",createFormMove)
};

export { moveCar };
