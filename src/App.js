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
		let [guessBoard, setGuessBoard] = useState([
				["","","",""],
				["","","",""],
				["","","",""],
				["","","",""],
				["","","",""],
				["","","",""],
				["","","",""],
				["","","",""],
				["","","",""],
				["","","","TR"],
  ]);
  let [hintBoard, setHintBoard] = useState([
				["","","",""],
				["","","",""],
				["","","",""],
				["","","",""],
				["","","",""],
				["","","",""],
				["","","",""],
				["","","",""],
				["","","",""],
				["","","",""],
		]);

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
    <div className="App">
						<div className="Mastermind">
								<TitleTag/>
								<Code codePegs={codePegs}/>
								<div className="GuessesAndHints">
										<Guesses guessBoard={guessBoard} setGuessBoard={setGuessBoard} currentRow={currentRow} setCurrentRow={setCurrentRow} currentPeg={currentPeg} setCurrentPeg={setCurrentPeg} codePegs={codePegs}/>              
										<Hints hintBoard={hintBoard}/>        
								</div>
								  <Pegs guessBoard={guessBoard} setGuessBoard={setGuessBoard} currentRow={currentRow} setCurrentRow={setCurrentRow} currentPeg={currentPeg} setCurrentPeg={setCurrentPeg} codePegs={codePegs}/>						
        </div>
    </div>
	 );
}