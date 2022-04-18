import { useState } from 'react';
import './Pegs.css';

export default function Pegs(props){

		let [currentRow, setCurrentRow] = useState(0);
		let [currentPeg, setCurrentPeg] = useState(0);

  

		function handleClick(evt){
    console.log('button is', evt.target.innerText);
    props.guessBoard[currentRow][currentPeg]=evt.target.innerText;
    console.log('choice is logged as ', props.guessBoard[currentRow][currentPeg]);
    console.log(props.guessBoard[currentRow]);
   if(currentPeg<3){currentPeg++};   
		}

  return(
    <div className="Pegs">
      <div className="Row1">
								<button className="A-Peg" id="Red" onClick={handleClick}>A</button>
								<button className="A-Peg" id="Orange" onClick={handleClick}>B</button>
								<button className="A-Peg" id="Yellow" onClick={handleClick}>C</button>
								<button className="A-Peg" id="Green" onClick={handleClick}>D</button>          
      </div>
      <div className="Row2">
        <button className="A-Peg" id="Cyan" onClick={handleClick}>E</button>
        <button className="A-Peg" id="Blue" onClick={handleClick}>F</button>
        <button className="A-Peg" id="Violet" onClick={handleClick}>G</button>
        <button className="A-Peg" id="Magenta" onClick={handleClick}>H</button>          
      </div>     
  </div>
  );
}
