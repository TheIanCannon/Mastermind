import './Guesses.css';

export default function Guesses({guessBoard, currentPeg, currentRow, codePegs}){

  function handleConfirm(){
    if (currentRow===codePegs) {console.log("YOU WIN")}
  }

  function handleClear(){
    guessBoard[currentRow]=["","","",""];
    console.log(guessBoard[currentRow]);
    guessBoard[currentRow][currentPeg]=0;
  }
 
  const revBoard= guessBoard.slice(0).reverse();

  return(
    <div className="Guesses">
      {revBoard.map((row, r) => {
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