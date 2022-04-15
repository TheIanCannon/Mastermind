import TitleTag from './components/TitleTag.jsx';
import Code from './components/Code.jsx';
import Guesses from './components/Guesses.jsx';
import Hints from './components/Hints.jsx';
import Pegs from './components/Pegs.jsx';

import './App.css';

export default function App(){

  return(    
    <div className="App">
						<div className="Mastermind">
								<TitleTag/>
								<Code/>
								<div className="GuessesAndHints">
										<Guesses/>              
										<Hints/>        
								</div>
								<Pegs/>
						</div>
    </div>
	 );
}