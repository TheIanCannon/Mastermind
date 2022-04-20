import './Hints.css';

export default function Hints({hintBoard}){
		
  function shuffled(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  return(
    <div className="Hints">
      {hintBoard.slice(0).reverse().map((hintRow, hr) => {
        return(
          <div className="HintRow" key={hr}>
            {hintRow.map((hint, h) => {
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