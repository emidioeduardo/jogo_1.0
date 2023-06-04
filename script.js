// Variáveis de jogo
let farmLevel = 1;
let harvestCount = 0;
let money = 0
// Elementos da DOM
const farmButton = document.getElementById('farmButton');
const farmLevelElement = document.getElementById('farmLevel');
const harvestCountElement = document.getElementById('harvestCount');
const cells = document.querySelectorAll('td');

cells.forEach((cell, index) => {
  cell.addEventListener("click", (e) => {
    if(cell.classList.contains("trigo")){
        cell.classList.remove("trigo")
        harvestCount++
        harvestCountElement.textContent = `Colheitas: ${harvestCount}`;
    } else {
        cell.classList.add('red-cell');
    setTimeout(() => {
      cell.classList.remove('red-cell');
    }, 500);
    }
  });
});

// Evento de clique do botão da fazenda
farmButton.addEventListener('click', () => {
  // Aumenta o nível da fazenda
  farmLevel++;

  const numeroAleatorio = Math.floor(Math.random() * cells.length);
  const celulaAleatoria = cells[numeroAleatorio];
  if(celulaAleatoria.classList.contains("trigo")){
    Math.floor(Math.random() * cells.length)
  } else {
    celulaAleatoria.classList.add("trigo")
  }
  // Incrementa o contador de colheitas
  
  // Atualiza os elementos da DOM
  farmLevelElement.textContent = `Dia: ${farmLevel}`;
});



function numeroAleatorio(){
    let number = Math.floor(Math.random() * 15);
    return number
} 
function sell(){
    money += harvestCount * 4.73
    harvestCount = 0
    harvestCountElement.textContent = `Colheitas: ${harvestCount}`;
    document.querySelector('#sell').innerHTML = `Dinheiro: R$ ${money.toFixed(2).replace(".", ",")}`
    console.log(money)
}