import React from "react";

function DisplayQuote({ quote, character, image }) {
  return (
    quote && (
      <div>
        <h1>{character}</h1>
        <img src={image} alt="alt" />
        <p>{quote}</p>
      </div>
    )
  );
}

export default DisplayQuote;
