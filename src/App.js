import './App.css';
import { useState } from 'react';
import Footer from './Footer';
import Snackbar from './Snackbar';

function App() {
  const [result, setResult] = useState("");
  const [validExpression, setValidExpression] = useState(true);
  const changeHandler = (e) => {
    setResult(result.concat(e.target.name));
  }

  const clearHandler = () => {
    setResult('');
  }

  const resultHandler = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setValidExpression(false);
      clearHandler();
      setTimeout(() => {
        setValidExpression(true);
      }, 2000);
    }
  }

  const backspaceHandler = () => {
    return setResult(result.slice(0, result.length - 1));
  }

  return (
    <>
      <div className="container">
        <form>
          <input type='text' defaultValue={result} />
        </form>
        <div className='keypad'>
          <button onClick={clearHandler} id="clear">clear</button>
          <button onClick={backspaceHandler}>c</button>
          <button name='/' onClick={changeHandler}>&divide;</button>
          <button name='7' onClick={changeHandler}>7</button>
          <button name='8' onClick={changeHandler}>8</button>
          <button name='9' onClick={changeHandler}>9</button>
          <button name='*' onClick={changeHandler}>&times;</button>
          <button name='4' onClick={changeHandler}>4</button>
          <button name='5' onClick={changeHandler}>5</button>
          <button name='6' onClick={changeHandler}>6</button>
          <button name='-' onClick={changeHandler}>&ndash;</button>
          <button name='1' onClick={changeHandler}>1</button>
          <button name='2' onClick={changeHandler}>2</button>
          <button name='3' onClick={changeHandler}>3</button>
          <button name='+' onClick={changeHandler}>+</button>
          <button name='0' onClick={changeHandler}>0</button>
          <button name='.' onClick={changeHandler}>.</button>
          <button onClick={resultHandler} id="result">=</button>
        </div>
      </div>
      <Footer></Footer>
      <Snackbar validExpression={validExpression} />
    </>
  );
}

export default App;
