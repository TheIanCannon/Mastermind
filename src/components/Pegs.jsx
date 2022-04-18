import { useState } from 'react';
import guessBoard from './Guesses.jsx';
import './Pegs.css';

export default function Pegs(props){

		const [currentRow, setCurrentRow] = useState(0);
		const [currentPeg, setCurrentPeg] = useState(0);

		function handleClick(evt){
    console.log(evt.target.id, props.guessBoard);
		}

  return(
    <div className="Pegs">
      <div className="Row1">
								<button className="A-Peg" id="Red" onClick={handleClick}></button>
								<button className="A-Peg" id="Orange" onClick={handleClick}></button>
								<button className="A-Peg" id="Yellow" onClick={handleClick}></button>
								<button className="A-Peg" id="Green" onClick={handleClick}></button>          
      </div>
      <div className="Row2">
        <button className="A-Peg" id="Cyan" onClick={handleClick}></button>
        <button className="A-Peg" id="Blue" onClick={handleClick}></button>
        <button className="A-Peg" id="Violet" onClick={handleClick}></button>
        <button className="A-Peg" id="Magenta" onClick={handleClick}></button>          
      </div>     
  </div>
  );
}
