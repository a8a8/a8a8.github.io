let userNum;
let targetNum;
let tried = 0;
let guessed = "";
const guessBtn = document.querySelector('#guessBtn')
const startNewBtn = document.querySelector('#startNewBtn')

function createTargetNum() {
    targetNum = Math.floor(Math.random() * 100) + 1;
    console.log("in func targetNum: "+targetNum);
}
function getInput(){
    userNum = document.getElementById('userInput').value;
    console.log(userNum);
}

function fits(x) {
    if (!!(Number.isInteger(x))) {
        alert('君輸入者非整數，請重試');
        return
    }
    if (x < 1 || x > 100) {
        alert('君輸入者非壹至佰內之數，請重試');
        return
    }
}

function changeResult(x) {
    document.getElementById("result").innerHTML = x
}

function judgeInput(x, y) {
    if (x > y) {
        changeResult("猜高了");
    } else if (x < y) {
        changeResult("猜低了");
    } else {
        changeResult("君贏也！");
    }
}

function guess(){
    userNum = document.getElementById('userInput').value

    fits(userNum);
    judgeInput(userNum, targetNum);
    tried++ ;
    console.log("tried: "+ tried);
    if (tried === 10) {
        startNew()
        return
    }
    guessed = guessed + " " + userNum;
    document.getElementById("guessed").innerHTML = guessed

    document.getElementById('userInput').value = '';
    document.getElementById('userInput').focus();
}

function startNew(){
    createTargetNum();
    guessed = "";
    tried = 0;
    document.getElementById("guessed").innerHTML = guessed;
    document.getElementById('userInput').value = ''
}

createTargetNum();
console.log("out func targetNum: "+targetNum);
guessBtn.addEventListener('click', guess);
window.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
          guessBtn.click();
        }
      });
startNewBtn.addEventListener('click', startNew);
