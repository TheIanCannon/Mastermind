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

  return(
    <div className="Hints">
      {hintBoard.reverse().map((pipRow, pr) => {
        return(
          <div className="HintRow" key={pr}>
            {[...pipRow].map((pip, p) => {
              return (
                <div className="Pip" key={p}>{pip}</div>
              )}
            )}
          </div>
        )
      })}
    </div>
  );
}