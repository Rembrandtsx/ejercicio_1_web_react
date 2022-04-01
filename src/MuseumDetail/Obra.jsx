import React from "react";

function Obra({ artwork }) {
  return (
    <div className="museum-detai-list-item">
      <div className="image">
        <img
          src={`https://source.unsplash.com/random/?artwork,${artwork.name
            .split(" ")
            .join(",")}`}
          alt=""
        />
        <h3>{artwork.name}</h3>
      </div>
      <div className="content">{artwork.description}</div>
    </div>
  );
}

export default Obra;
