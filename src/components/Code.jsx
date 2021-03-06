export default function Code({codePegs}) {
  
  return(
    <div className="Code">
      {codePegs.map((peg, k) => {
        return (
          <div
            className="CodePegs"
            id={"color_" + peg}
            key={k}
          >
            {peg}
          </div>
        );
      })}
    </div>
		);  
}
