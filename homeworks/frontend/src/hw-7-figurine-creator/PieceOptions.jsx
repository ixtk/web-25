import pieces from "./data";
import clsx from "clsx";

export const PieceOptions = ({ pieceName, pieceValue, setPiece }) => {
  const pieceButtons = pieces[pieceName].map((pieceObj) => {
    return (
      <button
        className={clsx("option", pieceObj.preview === pieceValue && "active")}
        onClick={() => {
          setPiece(pieceObj.preview);
        }}
      >
        <img src={pieceObj.thumbnail} />
      </button>
    );
  });

  return (
    <section>
      <h2>{pieceName}</h2>
      <div className="option-container">{pieceButtons}</div>
    </section>
  );
};
