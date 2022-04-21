import './Hints.css';

export default function Hints({hintBoard}){
		
  return(
    <div className="Hints">
      {hintBoard.slice(0).reverse().map((hintRow, hr) => {
        return(
          <div className="HintRow" key={hr}>
            {hintRow.map((hint, h) => {
              return (
                <div className="Hint" id={"Hint_"+hint} key={h}></div>
              )}
            )}
          </div>
        )
      })}
    </div>
  );
}