import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background:'#27374D'
  };

  const rowStyle = {
    padding: '12px',
    borderRadius:'8px'
  };

  const btnstyle={
    padding: '12px',
    border:'solid #9DB2BF 1px',
    margin:'8px'
  };

  return (
    
      <div className="buttons">
        <div  style={containerStyle} className="container text-center">
            <div className='row text-center'>
                <div className="calculator">
      <input
      className="input-group-text lg-6"
        type="text"
        value={input}
        readOnly
      /></div>
        <div className="row" style={rowStyle}>
            <div className="col-4 bg-dark">
          <button style={btnstyle} className="btn btn-secondary" onClick={() => handleButtonClick('7')}>7</button>
          <button style={btnstyle} className="btn btn-secondary"onClick={() => handleButtonClick('8')}>8</button>
          <button style={btnstyle} className="btn btn-secondary"onClick={() => handleButtonClick('9')}>9</button>
          <button style={btnstyle} className="btn btn-secondary"onClick={() => handleButtonClick('+')}>+</button></div>
        </div>
        <div className="row" style={rowStyle}>
            <div className="col-4 bg-dark">
          <button style={btnstyle} className="btn btn-secondary"onClick={() => handleButtonClick('4')}>4</button>
          <button style={btnstyle} className="btn btn-secondary"onClick={() => handleButtonClick('5')}>5</button>
          <button style={btnstyle} className="btn btn-secondary"onClick={() => handleButtonClick('6')}>6</button>
          <button style={btnstyle} className="btn btn-secondary"onClick={() => handleButtonClick('-')}>-</button>
          </div>
        </div>
        <div className="row" style={rowStyle}>
            <div className="col-4 bg-dark">
          <button style={btnstyle} className="btn btn-secondary"onClick={() => handleButtonClick('1')}>1</button>
          <button  style={btnstyle} className="btn btn-secondary"onClick={() => handleButtonClick('2')}>2</button>
          <button style={btnstyle} className="btn btn-secondary"onClick={() => handleButtonClick('3')}>3</button>
          <button style={btnstyle} className="btn btn-secondary"onClick={() => handleButtonClick('*')}>*</button>
          </div>
        </div>
        <div className="row" style={rowStyle}>
            <div className="col-4 bg-dark">
          <button style={btnstyle} className="btn btn-secondary"onClick={() => handleButtonClick('0')}>0</button>
          <button style={btnstyle} className="btn btn-secondary"onClick={() => handleClear()}>C</button>
          <button style={btnstyle} className="btn btn-secondary"onClick={() => handleCalculate()}>=</button>
          <button style={btnstyle} className="btn btn-secondary"onClick={() => handleButtonClick('/')}>/</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Calculator;
