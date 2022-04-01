import React, { useState } from "react";
import Obra from "./Obra";

function Museum({ museum }) {
  const [museo] = useState(museum);

  return (
    <div className="museum-detail-list">
      {museo.artworks.map((artwork) => (
        <Obra key={artwork.id} artwork={artwork}></Obra>
      ))}
    </div>
  );
}

export default Museum;
