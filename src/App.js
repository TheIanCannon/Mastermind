import HeaderRules from './components/HeaderRules.jsx';
import Code from './components/Code.jsx';
import Solutions from './components/Solutions.jsx';
import Pegs from './components/Pegs.jsx';

export default function App(){

  return(
    
    <div className="App">
      <HeaderRules/>
      <Code/>
      <Solutions/>
      <Pegs/>
    </div>
	 );
}