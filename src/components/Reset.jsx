import './Reset.css';

export default function Reset(){

  return(
    <button className="Reset" onClick={() => window.location.reload()}>Reset</button>
		);

}