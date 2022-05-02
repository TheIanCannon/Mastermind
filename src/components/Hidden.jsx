export default function Hidden() {

const hiddenPegs = ["?","?","?","?"];

  return (
    <div className="Code">
      {hiddenPegs.map((peg, k) => {
        return (
          <div
            className="CodePegs"
            id="Hidden"
            key={k}
          >
            {peg}
          </div>
        );
      })}
    </div>
  );
}


