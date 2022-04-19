import { useEffect, useState } from 'react';

import TitleTag from './components/TitleTag.jsx';
import Code from './components/Code.jsx';
import Guesses from './components/Guesses.jsx';
import Hints from './components/Hints.jsx';
import Pegs from './components/Pegs.jsx';

import './App.css';

export default function App(){

  let [codePegs, setCodePegs] = useState(["","","",""]);
		let [currentRow, setCurrentRow] = useState(0);
		let [currentPeg, setCurrentPeg] = useState(0);

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

		let guessBoard = [
				["0","1","2","3"],
				["4","5","6","7"],
				["8","9","10","11"],
				["12","13","14","15"],
				["16","17","18","19"],
				["20","21","22","23"],
				["24","25","26","27"],
				["28","29","30","31"],
				["32","33","34","35"],
				["36","37","38","39"],
  ];

  return(    
    <div className="App">
						<div className="Mastermind">
								<TitleTag/>
								<Code codePegs={codePegs}/>
								<div className="GuessesAndHints">
										<Guesses guessBoard={guessBoard} currentRow={currentRow} setCurrentRow={setCurrentRow} currentPeg={currentPeg} setCurrentPeg={setCurrentPeg} codePegs={codePegs}/>              
										<Hints/>        
								</div>
								  <Pegs guessBoard={guessBoard} currentRow={currentRow} setCurrentRow={setCurrentRow} currentPeg={currentPeg} setCurrentPeg={setCurrentPeg} codePegs={codePegs}/>						
        </div>
    </div>
	 );
}