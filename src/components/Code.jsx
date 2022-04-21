import './Code.css';

export default function Code({codePegs, solved}){

  return(
    <div className="Code">
      {codePegs.map((peg, k) => {
        return(
          <div className="CodePegs" id={solved? "color_"+peg : "Hidden"} key={k}>{peg}</div>
        )
      })}
    </div>
  );

}