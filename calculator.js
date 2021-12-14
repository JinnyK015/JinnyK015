const button = document.querySelector('.calculate__btn');
const displayHist = document.querySelector('.display__history');
const displayMain = document.querySelector('.display__main');
const displayTemp = document.querySelector('.display__temp');

let dp_main ='';
let dp_hist ='';
let result =''; 
let lastOperator ="";
let haveDot = false;

button.addEventListener('click', (e) => {
  if(e.target.classList.contains('dot') && !haveDot) {
      haveDot =true;
  } else if (e.target.classList.contains('dot') && haveDot){
    return;
  }

  if (e.target.classList.contains('number')) {
    dp_main += e.target.innerHTML;
    displayMain.innerHTML = dp_main;
  }

  if (e.target.classList.contains('operation')){
     haveDot = false;
     if(!dp_main) return; //prevent double operator print


      const operatorName = e.target.innerHTML;
      if(dp_main && dp_hist && lastOperator){
          mathOperator(lastOperator);
      } else {
        result = parseFloat(dp_main); //keep waiting next numbers
      }

      moveToDisplay(operatorName);
      lastOperator = operatorName;
  }

  if(e.target.classList.contains('equal')){
      displayMain.innerHTML = result;
      dp_main = result;
      dp_hist ='';
      displayTemp.innerHTML = '0';
      displayHist.innerHTML = '0';
  }
  
  if(e.target.classList.contains('clearAll')){
    dp_main ='';
    dp_hist ='';
    result = '';
    displayMain.innerHTML='0';
    displayHist.innerHTML='0';
    displayTemp.innerHTML='0';
  }

  if(e.target.classList.contains('clearScreen')){
    dp_main ='';
    displayMain.innerHTML='0';

    }
})

function moveToDisplay (operatorName) {
    dp_hist += dp_main + operatorName;
    displayHist.innerHTML = dp_hist;
    dp_main ='';
    displayMain.innerHTML ='0';
    displayTemp.innerHTML = result;
}


function mathOperator (operator) {
    switch(operator) {
        case "+":
            result = parseFloat(result) + parseFloat(dp_main);
            break;
        case "-":
            result = parseFloat(result) - parseFloat(dp_main);
            break;
        case "*":
            result = parseFloat(result) * parseFloat(dp_main);
            break;
        case "%":
            result = parseFloat(result) % parseFloat(dp_main);
            break;
        case "/":
            result = parseFloat(result) / parseFloat(dp_main);
            break;
    }
}