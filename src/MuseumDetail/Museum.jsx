import React, { useState } from "react";

function Museum({ museum }) {
  const [museo, setMuseo] = useState(museum);

  return (
    <div className="museum-detail-list">
      {museo.artworks.map((artwork) => (
        <div className="museum-detai-list-item" key={artwork.id}>
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
      ))}
    </div>
  );
}

export default Museum;
