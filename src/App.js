import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import CalcButton from './components/CalcButton'


function App() {
  const [currentNum,setCurrentNum] = useState(null)
  const [prevNum,setPrevNum] = useState(null)
  const [operand,setOperand] = useState(null)
  const numClickHandler = (num) => {
    if(!currentNum){
      setCurrentNum(num)
    }
    else{
      setCurrentNum(currentNum+num)
    }
  }

  const opHandler = (op) => {
    if(currentNum){
      setOperand(op)
      setPrevNum(currentNum)
      setCurrentNum(null)
    }
  }
  const evalExp = () => {
    if(currentNum&&prevNum&&operand){
      switch(operand){
        case '+':
      setCurrentNum(parseInt(prevNum) + parseInt(currentNum));
      break;
    case '-':
      setCurrentNum(parseInt(prevNum) - parseInt(currentNum));
      break;
    case '*':
      setCurrentNum(parseInt(prevNum) * parseInt(currentNum));
      break;
    case '/':
      setCurrentNum(prevNum / currentNum);
      break;
      }
    
    }
  }

  const resetCalc = () => {
    setOperand(null)
    setPrevNum(null)
    setCurrentNum(null)
  }
    return (
    <div className="container">
    <div className="mainscreen">
    <text className="maintext">{currentNum||prevNum||0}</text>
    </div>
    <div className="numButtonContainer">
    <CalcButton value="AC" onClickHandler={()=> resetCalc()}type="firstRowButtons"/>
    <CalcButton value="+/-" type="firstRowButtons"/>
    <CalcButton value="%" type="firstRowButtons"/>
    <CalcButton value="/" onClickHandler={() => opHandler("/")} type="operandButtons"/>
      <CalcButton value="7" onClickHandler={() => numClickHandler("7")}/>
      <CalcButton value="8" onClickHandler={() => numClickHandler("8")}/>
      <CalcButton value="9" onClickHandler={() => numClickHandler("9")}/>
      <CalcButton value="X" onClickHandler={() => opHandler("*")} type="operandButtons"/>
      <CalcButton value="4" onClickHandler={() => numClickHandler("4")}/>
      <CalcButton value="5" onClickHandler={() => numClickHandler("5")}/>
      <CalcButton value="6" onClickHandler={() => numClickHandler("6")}/>
      <CalcButton value="-" onClickHandler={() => opHandler("-")} type="operandButtons"/>
      <CalcButton value="1" onClickHandler={() => numClickHandler("1")}/>
      <CalcButton value="2" onClickHandler={() => numClickHandler("2")}/>
      <CalcButton value="3" onClickHandler={() => numClickHandler("3")}/>
      <CalcButton value="+" onClickHandler={() => opHandler("+")} type="operandButtons"/>
      <CalcButton value="0" onClickHandler={() => numClickHandler("0")} type="zeroStyle"/>
      <CalcButton value="."/>
      <CalcButton value="=" onClickHandler={() => evalExp()}type="operandButtons"/>
      </div>
    </div>
  );
}

export default App;
