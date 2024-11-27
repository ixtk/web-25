import { useState } from "react";
import "./App.css";
import clsx from "clsx";
import pieces from "./data";
import { PieceOptions } from "./PieceOptions";

export const FigurineCreator = () => {
  const [hair, setHair] = useState(pieces.hair[2].preview);
  const [expression, setExpression] = useState(pieces.expression[2].preview);
  const [outfit, setOutfit] = useState(pieces.outfit[3].preview);

  return (
    <div className="container">
      <div className="result">
        <img src="https://res.cloudinary.com/dc2c49xov/image/upload/v1731168704/lego-figurine/rsmsanvcq4qqgerpb5hm.webp" />
        <img className="piece" src={expression} alt="" />
        <img className="piece" src={outfit} alt="" />
        <img className="piece" src={hair} alt="" />
      </div>

      <div className="options">
        {/* <PieceOptions
          pieceName="expression"
          pieceValue={expression}
          setPiece={setExpression}
        />
        <PieceOptions pieceName="hair" pieceValue={hair} setPiece={setHair} />
        <PieceOptions
          pieceName="outfit"
          pieceValue={outfit}
          setPiece={setOutfit}
        /> */}

        <section>
          <h2>Expression</h2>
          <div className="option-container">
            {pieces.expression.map((expressionObj) => {
              return (
                <button
                  className={clsx(
                    "option",
                    expressionObj.preview === expression && "active"
                  )}
                  onClick={() => {
                    setExpression(expressionObj.preview);
                  }}
                >
                  <img src={expressionObj.thumbnail} />
                </button>
              );
            })}
          </div>
        </section>
        <section>
          <h2>Hair</h2>
          <div className="option-container">
            {pieces.hair.map((hairObj) => {
              return (
                <button
                  className={clsx(
                    "option",
                    hairObj.preview === hair && "active"
                  )}
                  onClick={() => {
                    setHair(hairObj.preview);
                  }}
                >
                  <img src={hairObj.thumbnail} />
                </button>
              );
            })}
          </div>
        </section>
        <section>
          <h2>Outfit</h2>
          <div className="option-container">
            {pieces.outfit.map((outfitObj) => {
              return (
                <button
                  className={clsx(
                    "option",
                    outfitObj.preview === outfit && "active"
                  )}
                  onClick={() => {
                    setOutfit(outfitObj.preview);
                  }}
                >
                  <img src={outfitObj.thumbnail} />
                </button>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
