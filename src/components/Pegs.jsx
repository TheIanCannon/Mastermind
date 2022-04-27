import "./Pegs.css";

export default function Pegs({
  currentPeg,
  currentRow,
  setCurrentPeg,
  setCurrentRow,
  guessBoard,
  setGuessBoard,
  codePegs,
  hintBoard,
  setHintBoard,
  message,
  setMessage,
  solved,
  setSolved,
  lost,
  setLost
}) {
  function handleClick(evt) {
    if (currentPeg <= 3) {
      guessBoard[currentRow][currentPeg] = evt.target.innerHTML;
      setCurrentPeg(currentPeg + 1);
    }
    setGuessBoard(guessBoard);
  }

  function handleSubmit() {
    if (solved || lost) {
      return
				};
    if (guessBoard[currentRow].includes(null)) {
      message = "Choose four colors first...";
      setMessage(message);
      return;
    } else {
      checkGuesses();
      if (solved) {
        message = "YOU WIN!!!";
        setMessage(message);
      } else if (currentRow < 9) {
        message = "Try another solution...";
        setMessage(message);
        setCurrentRow(currentRow + 1);
        setCurrentPeg(0);
      } else if (currentRow === 9) {
        message = "You lose. Better luck next time!";
        setMessage(message);
        lost = true;
        setLost(lost);
      }
    }
  }

  function checkGuesses() {
    let checkArray = [];
    for (let i = 0; i < codePegs.length; i++) {
      if (guessBoard[currentRow][i] === codePegs[i]) {
        checkArray.push("Y");
      } else if (codePegs.includes(guessBoard[currentRow][i])) {
        checkArray.push("P");
      } else {
        checkArray.push("N");
      }
    }
    let hintArray = checkArray.sort(() => 0.5 - Math.random());
    hintBoard[currentRow] = hintArray;
    setHintBoard(hintBoard);
    if (
      guessBoard[currentRow][0] === codePegs[0] &&
      guessBoard[currentRow][1] === codePegs[1] &&
      guessBoard[currentRow][2] === codePegs[2] &&
      guessBoard[currentRow][3] === codePegs[3]
    ) {
      solved = true;
      setSolved(solved);
    }
  }

  function handleClear() {
    if (solved || lost) {
      document.getElementsByClassName('CheckOrX').id='blackout';
      return;
    };
    guessBoard[currentRow] = [null, null, null, null];
    setGuessBoard(guessBoard);
    setCurrentPeg(0);
  }

  return (
    <div className="Pegs">
      <div className="Row1">
        <button className="A-Peg" id="color_0" onClick={handleClick}>
          0
        </button>
        <button className="A-Peg" id="color_1" onClick={handleClick}>
          1
        </button>
        <button className="A-Peg" id="color_2" onClick={handleClick}>
          2
        </button>
        <button className="A-Peg" id="color_3" onClick={handleClick}>
          3
        </button>
        <button className="CheckOrX" onClick={handleSubmit}>
          ✓
        </button>
      </div>
      <div className="Row2">
        <button className="A-Peg" id="color_4" onClick={handleClick}>
          4
        </button>
        <button className="A-Peg" id="color_5" onClick={handleClick}>
          5
        </button>
        <button className="A-Peg" id="color_6" onClick={handleClick}>
          6
        </button>
        <button className="A-Peg" id="color_7" onClick={handleClick}>
          7
        </button>
        <button className="CheckOrX" id="" onClick={handleClear}>
          ✗
        </button>
      </div>
    </div>
  );
}
