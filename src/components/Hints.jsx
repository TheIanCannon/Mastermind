import './Hints.css';

export default function Hints({hintBoard}){
		
  return(
    <div className="Hints">
      {hintBoard.slice(0).reverse().map((hintRow, hr) => {
        return(
          <div className="HintRow" key={hr}>
            {[...hintRow].map((hint, h) => {
              return (
                <div className="Hint" key={h}>{hint}</div>
              )}
            )}
          </div>
        )
      })}
    </div>
  );
}