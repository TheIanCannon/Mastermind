import { useEffect, useState } from 'react';
import './Code.css';

export default function Code(){

const [codePegs, setCodePegs] = useState(["","","",""]);

  useEffect(() => {
    const getCode = async () => {
      const codeAPI = await fetch(`https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new`);
      let codeText = await codeAPI.text();
      let codeArray = codeText.split("\n", 4);
      setCodePegs(codeArray);
				};
    getCode(); 
  },[]);

  console.log('the code is ', codePegs);

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