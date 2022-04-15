import './Hints.css';

export default function Hints(){
		
  let hintBoard = [
				["","","",""],
				["","","",""],
				["","","",""],
				["","","",""],
				["","","",""],
				["","","",""],
				["","","",""],
				["","","",""],
				["","","",""],
				["","","",""],
		];

  let revHint = hintBoard.reverse();

  return(
    <div className="Hints">
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