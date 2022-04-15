import { useEffect, useState } from 'react';

export default function App(){

const [code, setCode] = useState([]);

  useEffect(() => {
    const getCode = async () => {
      const codeAPI = await fetch(`https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new`);
      let codeText = await codeAPI.text();
      let codeArray = codeText.split("\n", 4);
      setCode(codeArray);
				};
    getCode(); 
  },[]);

console.log('the code is ', typeof code, code);

}