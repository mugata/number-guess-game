//랜덤번호 지정
// 유저가 번호를 입력한다. 그리고 go라는 버튼을 누름
// 만약에 유저가 랜던 번호를 맞추면,맞췄습니다.
// 랜덤번호가 < 유저번호 down
// 랜덤번호가 > 유저번호 up
// Reset버튼을 누르면 게임이 리셋된다
// 5번의 기회를 다쓰면 게임이 끝난다. (더이상 추측불가, 버튼이 disable)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다.
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깍지 않는다.

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
// console.log("버튼", playButton);
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

function play() {
  let userValue = userInput.value;
  if (userValue < computerNum) {
    resultArea.textContent = "up";
    console.log("up!!");
  } else if (userValue > computerNum) {
    resultArea.textContent = "down";
  } else {
    resultArea.textContent = "맞추셨습니다.";
  }
}

function reset() {
  // user input창이 깨끗하게 정리되고
  userInput.value = "";
  //   새로운 번호가 생성
  pickRandomNum();
  resultArea.textContent = "결과값이 여기 나옵니다.!!";
}
pickRandomNum();
