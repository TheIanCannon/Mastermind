import './Code.css';

export default function Code({codePegs}){



  return(
    <div className="Code">
      {codePegs.map((peg, k) => {
        return(
          <div className="CodePegs" key={k}>{peg}</div>
        )
      })}
    </div>
  );

}