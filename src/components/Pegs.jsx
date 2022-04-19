import './Pegs.css';

export default function Pegs({currentPeg, currentRow, setCurrentPeg, setCurrentRow, guessBoard, setGuessBoard, codePegs, setCodePegs}){

  function handleClick(evt){
    guessBoard[currentRow][currentPeg]=evt.target.innerText;
    console.log('button is', evt.target.innerText, 'choice is', guessBoard[currentRow][currentPeg]);
    if(currentPeg<3){currentPeg+=1};
    console.log(guessBoard[currentRow]);
 		}

  function handleSubmit(){
    if (guessBoard[currentRow][0]===codePegs[0] && guessBoard[currentRow][1]===codePegs[1] && guessBoard[currentRow][2]===codePegs[2] && guessBoard[currentRow][3]===codePegs[3]) {
      alert("YOU WIN!");
    } else if (currentRow<9) {
      currentRow++; 
      console.log(currentRow);
    } else if (currentRow===9) {
      alert("YOU LOSE");
				}
  }

  function handleClear(){
    guessBoard[currentRow]=["","","",""];
    console.log(guessBoard[currentRow]);
    guessBoard[currentRow][setCurrentPeg]=0;
  }

  return(
    <div className="Pegs">
      <div className="Row1">
								<button className="A-Peg" id="Red" onClick={handleClick}>0</button>
								<button className="A-Peg" id="Orange" onClick={handleClick}>1</button>
								<button className="A-Peg" id="Yellow" onClick={handleClick}>2</button>
								<button className="A-Peg" id="Green" onClick={handleClick}>3</button>          
        <button className="Confirm" onClick={handleSubmit}>Submit ✔</button>            
      </div>
      <div className="Row2">
        <button className="A-Peg" id="Cyan" onClick={handleClick}>4</button>
        <button className="A-Peg" id="Blue" onClick={handleClick}>5</button>
        <button className="A-Peg" id="Violet" onClick={handleClick}>6</button>
        <button className="A-Peg" id="Magenta" onClick={handleClick}>7</button>          
        <button className="Clear" onClick={handleClear}>Clear ✘</button>
      </div>     
  </div>
  );
}
