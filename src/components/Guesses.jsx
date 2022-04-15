import './Guesses.css';

export default function Guesses(){

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