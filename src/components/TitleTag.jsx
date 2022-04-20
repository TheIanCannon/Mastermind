import './TitleTag.css';

export default function TitleTag({message}){

  return(
    <div className="TitleTag">
						<p className="Title">M A S T E R M I N D</p>
						<p className="Tagline">Easy to Learn—a Lifetime to Master!</p>
      <p className="PlayerMessage">{message}</p>
    </div>
		);
}