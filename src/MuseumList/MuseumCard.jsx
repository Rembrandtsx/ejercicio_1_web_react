import React, { useState } from "react";

function MuseumCard({ museum, elegirMuseo }) {
  const [museo] = useState(museum);
  return (
    <div
      className="card"
      onClick={() => {
        elegirMuseo(museo.id);
      }}
    >
      <img src={museo.image} alt={museo.description} />
      <h3>{museo.name}</h3>
      <h6>{museo.city}</h6>
    </div>
  );
}

export default MuseumCard;
