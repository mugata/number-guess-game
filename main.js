// let inputName = prompt("이름을 입력받으세요");
// console.log(inputName);

function playGame() {
  let isWin = false;

  let min = 1;
  let max = 10;
  let rnd = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(rnd);

  let successCount = 0; // 유효하게 도전한 회수를 셀 변수

  // 성공 횟수가 5번이 될 때까지 무한 반복
  while (successCount < 5) {
    let userInput = Number(prompt("숫자를 입력받으세요"));
    console.log(userInput);

    // 1. 범위를 벗어난 경우
    if (userInput < 1 || userInput > 10) {
      console.log("경고: 1부터 10 사이의 숫자만 입력해주세요");
      continue;
    }

    // 2. 정상 적인 범위를 입력했을 때만 비로소 기회 1번 소모!
    successCount++;
    // console.log(successCount);

    if (userInput < rnd) {
      console.log("up");
    } else if (userInput > rnd) {
      console.log("DOWN!!");
    } else if (userInput === rnd) {
      console.log("That's right");
      isWin = true;
      break;
    }
  }

  if (isWin === true) {
    console.log("축하합니다 승리하셨습니다.");
  } else {
    console.log("기회를 모두 소진했습니다.");
  }
}

playGame();
