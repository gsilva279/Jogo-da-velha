function gravarNomes() {
  const nomeJogador1 = document.getElementById('nomeJogador1').value;
  const nomeJogador2 = document.getElementById('nomeJogador2').value;

  // Verificando se os nomes foram preenchidos
  if (nomeJogador1 && nomeJogador2) {
    document.getElementById('jogador1').textContent = nomeJogador1;
    document.getElementById('jogador2').textContent = nomeJogador2;
  } else {
    alert('Por favor, preencha os nomes dos dois jogadores.');
  }
}

const cells = document.querySelectorAll('td');
let currentPlayer = 'x';

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (cell.textContent === '') {
      cell.textContent = currentPlayer;
      if (checkWin()) {
        alert(`${currentPlayer} Venceu!`);
        resetGame();
      } else if (checkDraw()) {
        alert('Empate!');
        resetGame();
      } else {
        currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
      }
    }
  });
});

function checkWin() {
  const winnerCombination = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6,], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
    ];
    return winnerCombination.some(combination => {
    return combination.every(index => cells[index].textContent === currentPlayer);
      
    });
}
function checkDraw() {
  return [...cells].every(cell => cell.textContent !== '');
}
function resetGame() {
  cells.forEach(cell => {
    cell.textContent = '';
  });
  currentPlayer ='x'
}