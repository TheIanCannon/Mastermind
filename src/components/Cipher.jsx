import './Cipher.css';

export default function Cipher({codePegs, Code, Hidden, solved, lost}){

  return(
    solved || lost ? <Code codePegs={codePegs}/> : <Hidden/>
  );

}