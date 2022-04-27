import "./Code.css";

export default function Code({ codePegs, solved, lost }) {
  return (
    <div className="Code">
      {codePegs.map((peg, k) => {
        return (
          <div
            className="CodePegs"
            id={(lost || solved ) ? "color_" + peg : "Hidden"}
            key={k}
          >
            {peg}
          </div>
        );
      })}
    </div>
  );
}
