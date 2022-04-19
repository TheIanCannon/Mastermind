import './Guesses.css';

export default function Guesses({guessBoard, setGuessBoard}){

  return(
    <div className="Guesses">
      {guessBoard.slice(0).reverse().map((row, r) => {
        return(
          <div className="Rows" key={r}>
            {[...row].map((dot, d) => {
              return (
                <div className="Dot" key={d}>{dot}</div>
              )}
            )}
          </div>
        )
      })}
    </div>    
  );
}