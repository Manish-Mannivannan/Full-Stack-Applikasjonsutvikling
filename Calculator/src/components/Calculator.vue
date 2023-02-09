<script setup lang="ts">
  import { ref } from 'vue';

  let calculation = ref("");
  let preCalculation = ref("");
  let log = ref("");
  preCalculation.value = "__-";
  let calcArray = [];
  
  function addNumber(x: Number){
    if (calculation.value != "0" || x != 0) {
      if (calculation.value == "0" && x != 0) {
        calculation.value = String(x);
      }else{
        calculation.value += x;

      }
    }
    calcInit(0);
  }

  function negateCurrent() {
    calcArray = calculation.value.split(" ");
    if (calcArray[calcArray.length - 1].charAt(0) == "-") {
      calcArray[calcArray.length - 1] = calcArray[calcArray.length - 1].slice(1);
      calculation.value = "";
      calculation.value += calcArray[0];
      for (let i = 1; i < calcArray.length; i++) {
        calculation.value += " " + calcArray[i];          
      }
    }else{
      calculation.value = "";
      calcArray[calcArray.length - 1] = "-" + calcArray[calcArray.length - 1];
      calculation.value += calcArray[0];
      for (let i = 1; i < calcArray.length; i++) {
        calculation.value += " " + calcArray[i];          
      }
    }
    calcInit(0);
  }

  function addOperator(x: string) {
    if (calculation.value != "" && calculation.value.slice(-1) != ".") {
      switch (x) {
        case "+":
          if (!isOperator(calculation.value.charAt(calculation.value.length - 2))) {
            calculation.value += " + ";
          }
          break;
        case "-":
          if (calculation.value.charAt(calculation.value.length - 2) == "*"
          || calculation.value.charAt(calculation.value.length - 2) == "/") {
            calculation.value += "-";
          }else if (!isOperator(calculation.value.charAt(calculation.value.length - 2))) {
            calculation.value += " - ";
          }
          break;
        case "*":
          if (!isOperator(calculation.value.charAt(calculation.value.length - 2))) {
            calculation.value += " * ";
          }
          break;
        case "/":
          if (!isOperator(calculation.value.charAt(calculation.value.length - 2))) {
            calculation.value += " / ";
          }
          break;
        default:
          return "something went wrong";
          break;
      }
    }
  }

  function addDecimal() {
    if (!calculation.value.split(" ").slice(-1)[0].includes(".")) {
      calculation.value += ".";
    }else{
      quickAlert(".");
    }
  }

  function isOperator(testOp: string): boolean{
    if (testOp == "*" || testOp == "/" || testOp == "+" || testOp == "-") {
      return true;
    }
    return false;
  }

  function backspace(){
    let calcArray = calculation.value.split(" ");
    if (calcArray[2] == "") {
      if (calcArray[1] == "*" || calcArray[1] == "/" || calcArray[1] == "+" || calcArray[1] == "-") {
        calculation.value = calculation.value.slice(0, -3);
      }
    }else{
      calculation.value = calculation.value.slice(0, -1);
      if (calculation.value == "") {
        preCalculation.value = "__-";
      }
    }
    calcInit(0);
  }

  function empty() {
    calculation.value = "";
    preCalculation.value = "__-";
  }

  function calcInit(update: number) {
    calcArray = calculation.value.split(" ");
    if (calcArray.length >= 3 && calcArray[2] != "") {
      let answer = eval(calculation.value);
      if (update == 1) {
        let question = calculation.value;
        calculation.value = answer;
        createLogEntry(question, answer);
        preCalculation.value = "__-";
      }
      if (update == 0) {
        preCalculation.value = answer;
      }
    }else{
      preCalculation.value = "__-";
    }
  }
  
  function getANS(){
    let logArray = log.value.split("\n");
    let lastLog = logArray[logArray.length - 2].split(" ");
    calculation.value += lastLog[lastLog.length - 1];
  }

  function quickAlert(operator: string){
    alert("Using " + operator + " here is invalid");
  }

  function createLogEntry(newCalc: string, answer: string) {
    log.value += newCalc + " = " + answer + "\n";
  }

</script>

<template>
  <div class="container" id="calculatorContainer">
    <div class="calculatorBox">
      <div class="inputArea">
        <br><textarea id="mathInput" placeholder="Input Math">{{ calculation }}</textarea>
        <h3 id="preCalc">{{ preCalculation }}</h3>
      </div>
      <div class="calculatorButtons">
        <button type="button" id="empty" @click="empty()">C</button>
        <button type="button" id="plusminus" @click="negateCurrent()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus-slash-minus"
            viewBox="0 0 16 16"
          >
            <path
              d="m1.854 14.854 13-13a.5.5 0 0 0-.708-.708l-13 13a.5.5 0 0 0 .708.708ZM4 1a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 4 1Zm5 11a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 9 12Z"
            />
          </svg>
        </button>
        <button type="button" id="divide" @click="addOperator('/')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M5 11h14v2H5v-2zm7-3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
              />
            </g>
          </svg>
        </button>
        <button type="button" id="backspace" @click="backspace()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-backspace-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"
            />
          </svg>
        </button>
    
        <button type="button" id="7" @click="addNumber(7)">7</button>
        <button type="button" id="8" @click="addNumber(8)">8</button>
        <button type="button" id="9" @click="addNumber(9)">9</button>
        <button type="button" id="multiply" @click="addOperator('*')">X</button>
    
        <button type="button" id="4" @click="addNumber(4)">4</button>
        <button type="button" id="5" @click="addNumber(5)">5</button>
        <button type="button" id="6" @click="addNumber(6)">6</button>
        <button type="button" id="minus" @click="addOperator('-')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-dash-lg"
            viewBox="0 0 18 18"
          >
            <path
              fill-rule="evenodd"
              d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
            />
          </svg>
        </button>
    
        <button type="button" id="1" @click="addNumber(1)">1</button>
        <button type="button" id="2" @click="addNumber(2)">2</button>
        <button type="button" id="3" @click="addNumber(3)">3</button>
        <button type="button" id="plus" @click="addOperator('+')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus-lg"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
            />
          </svg>
        </button>
    
        <button type="button" id="comma" @click="addDecimal()">.</button>
        <button type="button" id="0" @click="addNumber(0)">0</button>
        <button type="button" id="ANS" @click="getANS()">ANS</button>
        <button type="button" id="EQ" @click="calcInit(1)">=</button>
      </div>
    </div>
    <textarea name="log" id="log" cols="30" rows="10">{{ log }}</textarea>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}

.calculatorBox{
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: 25rem;
}

.calculatorButtons{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 30rem;
}

.inputArea {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 98%;
  height: 9rem;
  background-color: var(--color-green);
  border: 1px solid transparent;
  border-radius: 10px;
}

button {
  flex: 1 0 21%;
  margin: 5px;
  /* max-width: 23%; */
}

#mathInput{
  font-size: 1.5rem;
  min-height: 3rem;
  background-color: transparent;
}

#mathInput::-webkit-input-placeholder { 
  color: var(--color-red);
}

#preCalc, #mathInput {
  width: 95%;
  text-align: right;
  padding: 0 2rem;
  margin: 1rem;
}

#EQ {
  background-color: var(--color-red);
}

#EQ:hover {
  border: 1px solid var(--color-red);
  color: #ffffff;
}

#log{
  height: 27.6rem;
  width: 35rem;
  font-size: 1.5rem;
  border-radius: 10px;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  .inputArea {
    background-color: var(--bg-field-dark);
  }
}
</style>
