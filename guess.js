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
        alert('Not an integer, input again!');
        return
    }
    if (x < 1 || x > 100) {
        alert('Not between 1~100, input again!');
        return
    }
}

function changeResult(x) {
    document.getElementById("result").innerHTML = x
}

function judgeInput(x, y) {
    if (x > y) {
        changeResult("Too High!");
    } else if (x < y) {
        changeResult("Too Low!");
    } else {
        changeResult("You Are Right!");
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
guessBtn.addEventListener('keyup', function(event){
    if (event.keyCode === 13) {
        document.getElementById("guessBtn").click()
    }
});
startNewBtn.addEventListener('click', startNew);

