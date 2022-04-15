import './Hints.css';

export default function Hints(){
		
  let hintBoard = [
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

  let revHint = hintBoard.reverse();

  return(
    <div className="Solutions">
      {revHint.map((pipRow, pr) => {
        return(
          <div className="HintRow" key={pr}>
            {[...pipRow].map((pip, p) => {
              return (
                <div className="Pip">{pip}</div>
              )}
            )}
          </div>
        )
      })}
    </div>
  );
}