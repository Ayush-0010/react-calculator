import './App.css';
import React, { useState } from 'react';
function App() {
  let [currentValue, setCurrentValue] = useState('00.00');
  let [prevValue, setPrevValue] = useState(' ');
  let btnClickHandler = (e) => {
    //console.log(e.target.id);
    let a = parseFloat(e.target.id), curr;
    if (currentValue === '00.00') {
      curr = 0;
      setCurrentValue(curr * 10 + a);
      return;
    }
    let str = currentValue + "";
    let flag = true;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '.')
        flag = false;
    }
    if (flag) {
      curr = parseFloat(currentValue);
      setCurrentValue(curr * 10 + a);
      return;
    }
    else {
      //console.log(false);
      curr = currentValue;
      setCurrentValue(currentValue + a);
    }
  }
  let btnClickHandlerOperation = (e) => {
    let str = currentValue + " " + e.target.id;
    setPrevValue(str);
    setCurrentValue(0);
  }
  let btnClickHandlerFinal = (e) => {
    if (prevValue === ' ') {
      alert("Invaild Calculation");
    }
    else {
      let b = parseFloat(currentValue);
      let a = prevValue.slice(0, prevValue.length - 2);
      a = parseFloat(a);
      let c = prevValue.slice(prevValue.length - 1, prevValue.length);
      //console.log(c);
      if (c === '+') {
        setCurrentValue(a + b);
        setPrevValue('');
      } else if (c === '*') {
        setCurrentValue(a * b);
        setPrevValue('');
      } else if (c === '-') {
        setCurrentValue(a - b);
        setPrevValue('');
      } else {
        if (b === 0) {
          alert("Invaild Calculation");
        }
        else {
          setCurrentValue(a / b);
          setPrevValue('');
        }
      }
    }
  }
  let btnClickHandlerDot = (e) => {
    let a = currentValue + '.';
    setCurrentValue(a);
  }
  let btnClickHandlerEqual = (e) => {
    setCurrentValue('00.00');
    setPrevValue('');
  }
  let btnClickHandlerDel = (e) => {
    if (currentValue !== '') {
      let a = currentValue + "";
      if(a.substring(0, a.length - 1)==='')
        setCurrentValue(0);
      else
        setCurrentValue(a.substring(0, a.length - 1));
    }
  }
  return (
    <div className='calculator-grid'>
      <div className='output'>
        <div className='previous-output'>{prevValue}</div>
        <div className='current-output'>{currentValue}</div>
      </div>
      <button className='span-two' onClick={btnClickHandlerEqual}>AC</button>
      <button id="del" onClick={btnClickHandlerDel}>DEL</button>
      <button id="/" onClick={btnClickHandlerOperation}>/</button>
      <button id="1" onClick={btnClickHandler}>1</button>
      <button id="2" onClick={btnClickHandler}>2</button>
      <button id="3" onClick={btnClickHandler}>3</button>
      <button id="*" onClick={btnClickHandlerOperation}>*</button>
      <button id="4" onClick={btnClickHandler}>4</button>
      <button id="5" onClick={btnClickHandler}>5</button>
      <button id="6" onClick={btnClickHandler}>6</button>
      <button id="+" onClick={btnClickHandlerOperation}>+</button>
      <button id="7" onClick={btnClickHandler}>7</button>
      <button id="8" onClick={btnClickHandler}>8</button>
      <button id="9" onClick={btnClickHandler}>9</button>
      <button id="-" onClick={btnClickHandlerOperation}>-</button>
      <button id="." onClick={btnClickHandlerDot}>.</button>
      <button id="0" onClick={btnClickHandler}>0</button>
      <button id="=" className='span-two' onClick={btnClickHandlerFinal}>=</button>
    </div>
  );
}

export default App;
