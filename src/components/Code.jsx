import './Code.css';

function SecretCode(){
		return(
    <div className="isHidden"></div>
		)
}

export default function Code({codePegs}){

  return(
    <div className="Code">
      {codePegs.map((peg, k) => {
        return(
          <div className="CodePegs" id={"color_"+peg} key={k}><Secret/></div>
        )
      })}
    </div>
  );

}