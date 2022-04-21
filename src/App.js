import { useEffect, useState } from 'react';

import TitleTag from './components/TitleTag.jsx';
import Code from './components/Code.jsx';
import Guesses from './components/Guesses.jsx';
import Hints from './components/Hints.jsx';
import Pegs from './components/Pegs.jsx';
import Reset from './components/Reset.jsx';

import './App.css';

export default function App(){

  let [codePegs, setCodePegs] = useState([null,null,null,null]);
		let [currentRow, setCurrentRow] = useState(0);
		let [currentPeg, setCurrentPeg] = useState(0);
  let [currentHint, setCurrentHint] = useState(0);
  let [solved, setSolved] = useState(false);
		let [guessBoard, setGuessBoard] = useState([
				[null,null,null,null],
				[null,null,null,null],
				[null,null,null,null],
				[null,null,null,null],
				[null,null,null,null],
				[null,null,null,null],
				[null,null,null,null],
				[null,null,null,null],
				[null,null,null,null],
				[null,null,null,null],
  ]);
  let [hintBoard, setHintBoard] = useState([
				[null,null,null,null],
				[null,null,null,null],
				[null,null,null,null],
				[null,null,null,null],
				[null,null,null,null],
				[null,null,null,null],
				[null,null,null,null],
				[null,null,null,null],
				[null,null,null,null],
				[null,null,null,null],
		]);
  let [message, setMessage] = useState("Guess the hidden code...");

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
								<TitleTag message={message}/>
								<Code codePegs={codePegs} solved={solved} setSolved={setSolved}/>
								<div className="GuessesAndHints">
										<Guesses guessBoard={guessBoard}/>              
										<Hints guessBoard={guessBoard} hintBoard={hintBoard} currentHint={currentHint} setCurrentHint={setCurrentHint}/>        
								</div>
								  <Pegs guessBoard={guessBoard} setGuessBoard={setGuessBoard} currentRow={currentRow} setCurrentRow={setCurrentRow} currentPeg={currentPeg} setCurrentPeg={setCurrentPeg} codePegs={codePegs} hintBoard={hintBoard} setHintBoard={setHintBoard} message={message} setMessage={setMessage}/>						
        </div>
          <Reset/>
    </div>
	 );
}