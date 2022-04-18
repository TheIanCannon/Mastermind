import { useState } from 'react';
import './Guesses.css';

export default function Guesses(){

const [currentRow, setCurrentRow] = useState(0);
const [currentPeg, setCurrentPeg] = useState(0);

		let solutionBoard = [
				["0","","",""],
				["","","",""],
				["","","",""],
				["","","",""],
				["","","",""],
				["","","",""],
				["","","",""],
				["","","",""],
				["","","",""],
				["","","","39"],
		];

  let revSolution = solutionBoard.reverse();

  return(
    <div className="Guesses">
      {revSolution.map((row, r) => {
        return(
          <div className="Rows" key={r}>
            {[...row].map((dot, d) => {
              return (
                <div className="Dot">{dot}</div>
              )}
            )}
          </div>
        )
      })}
    </div>
  );
}