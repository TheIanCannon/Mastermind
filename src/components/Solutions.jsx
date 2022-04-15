import './Solutions.css';

export default function Solutions(){

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

  let revBoard = solutionBoard.reverse();

  return(
    <div className="Solutions">
      {revBoard.map((row, r) => {
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