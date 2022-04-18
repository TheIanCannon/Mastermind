import './Guesses.css';
import guessBoard from '../App.js';

export default function Guesses(props){

  function handleConfirm(){
    console.log('clicked confirm');
  }

  function handleClear(){
    console.log('clicked clear');
  }
 
  

  return(
    <div className="Guesses">
      {props.guessBoard.reverse().map((row, r) => {
        return(
          <div className="Rows" key={r}>
            <button className="Confirm" onClick={handleConfirm}>✔</button>
            <button className="Clear" onClick={handleClear}>✘</button>
            {[...row].map((dot, d) => {
              return (
                <div className="Dot" key={d}>{dot}</div>
              )}
            )}
          </div>
        )
      })}
    </div>
    
  );
}