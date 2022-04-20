import './Guesses.css';

function Dot(props){
  return(
    <div className="Dot">{props.children}</div>
  );
}

function Row(props){
  return(
    <div className="Rows">{props.children}</div>
  );
}

export default function Guesses({guessBoard, setGuessBoard}){

  return(
    <div className="Guesses">
      {guessBoard.slice(0).reverse().map((row, r) => {
        return(
          <Row key={r.toString()+"_"+row.join("")}>
            {row.map((dot, d) => {
              return (
                <Dot key={r+"_"+d}>{dot}</Dot>
              )}
            )}
          </Row>
        )
      })}
    </div>    
  );
}