function startGame() {
  let playerName: string | undefined = getInputValue('playername');
  logPlayer(playerName);
  postScore(100, playerName);
}

const startButton = document.getElementById('startGame');
if (startButton !== null) {
  startButton.addEventListener('click', startGame);
}

function getInputValue(elementId: string): string | undefined {
  const inputElement: HTMLInputElement = <HTMLInputElement>(
    document.getElementById(elementId)
  );
  if (inputElement.value === '') {
    return undefined;
  } else {
    return inputElement.value;
  }
}

function postScore(
  score: number,
  playerName: string = 'MultiMath Player'
): void {
  let logger: (value: string) => void;

  if (score < 0) {
    logger = logError;
  } else {
    logger = logMessage;
  }
  let scoreElement: HTMLElement | null =
    document.getElementById('postedScores');
  scoreElement.innerText = `${score} - ${playerName}`;
  logger(`Score: ${score}`);
}

function logPlayer(name: string = 'MultiMath Player'): void {
  console.log(`New game starting for player: ${name}`);
}

const logMessage = (message: string) => console.log(message);

function logError(err: string): void {
  console.error(err);
}
