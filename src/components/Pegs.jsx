import './Pegs.css';

export default function Pegs({currentPeg, currentRow, setCurrentPeg, setCurrentRow, guessBoard, setGuessBoard, codePegs, hintBoard, setHintBoard}){

  function handleClick(evt){
    if(currentPeg<=3){
						guessBoard[currentRow][currentPeg]=evt.target.innerHTML;
						console.log('button is', evt.target.id, 'choice is', guessBoard[currentRow][currentPeg]);
						setCurrentPeg(currentPeg+1)
    };
    console.log(guessBoard[currentRow]);
    setGuessBoard(guessBoard);
 		}

  function handleSubmit(){
    if (guessBoard[currentRow].includes(null)) {
      return;
    } else {
						if (guessBoard[currentRow][0]===codePegs[0] && 
          guessBoard[currentRow][1]===codePegs[1] && 
          guessBoard[currentRow][2]===codePegs[2] && 
          guessBoard[currentRow][3]===codePegs[3]) {      
        alert("YOU WIN!");
						} else if (currentRow<9) {
						  checkGuesses();
								setCurrentRow(currentRow+1); 
								setCurrentPeg(0);
								console.log(currentRow);
								console.log(guessBoard[currentRow]);
						} else if (currentRow===9) {
								alert("YOU LOSE");
						}
				}
  }
   
  function checkGuesses(){
    let hintArray = [];
    for (let i=0; i<codePegs.length; i++){
        if (guessBoard[currentRow][i]===codePegs[i]) {
            hintArray.push("Y");
        } else if (codePegs.includes(guessBoard[currentRow][i])){
            hintArray.push("P");
        } else {
            hintArray.push("N");
        }
    }
    console.log(hintArray);
    hintBoard[currentRow]=hintArray;
    setHintBoard(hintBoard);
    console.log(hintBoard);
}

  function handleClear(){
    guessBoard[currentRow]=[null,null,null,null];
    setGuessBoard(guessBoard);
    setCurrentPeg(0);
  }

  return(
    <div className="Pegs">
      <div className="Row1">
								<button className="A-Peg" id="color_0" onClick={handleClick}>0</button>
								<button className="A-Peg" id="color_1" onClick={handleClick}>1</button>
								<button className="A-Peg" id="color_2" onClick={handleClick}>2</button>
								<button className="A-Peg" id="color_3" onClick={handleClick}>3</button>          
        <button className="CheckOrX" onClick={handleSubmit}>✔</button>            
      </div>
      <div className="Row2">
        <button className="A-Peg" id="color_4" onClick={handleClick}>4</button>
        <button className="A-Peg" id="color_5" onClick={handleClick}>5</button>
        <button className="A-Peg" id="color_6" onClick={handleClick}>6</button>
        <button className="A-Peg" id="color_7" onClick={handleClick}>7</button>          
        <button className="CheckOrX" onClick={handleClear}>✘</button>
      </div>     
  </div>
  );
}
