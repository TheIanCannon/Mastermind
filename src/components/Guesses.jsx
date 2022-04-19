import './Guesses.css';
import guessBoard from '../App.js';

export default function Guesses(props){

  function handleConfirm(){
    if (props.currentRow===props.code) {console.log("YOU WIN")}
  }

  function handleClear(){
    props.setCurrentRow(["","","",""]);
  }
 
  return(
    <div className="Guesses">
      {props.revBoard.map((row, r) => {
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