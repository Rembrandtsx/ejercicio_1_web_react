import React, { useEffect, useState } from "react";
import Museum from "../MuseumDetail/Museum";
function MuseumsList() {
  const [museums, setMuseums] = useState([]);
  const [curMuseum, setCurMuseum] = useState();

  useEffect(() => {
    fetch("https://back-museums-uniandes.herokuapp.com/api/museums")
      .then((result) => result.json())
      .then((museumList) => setMuseums(museumList));
  }, []);

  const elegirMuseo = (museumId) => {
    let encontrado = museums.find((museo) => museo.id === museumId);
    setCurMuseum(encontrado);
  };

  const clearMuseum = () => {
    setCurMuseum(undefined);
  };

  return (
    <div className="contenido">
      <p className="breadcrumb">
        <span>Home</span> {" > "} <span onClick={clearMuseum}>Museos</span>
        {curMuseum && (
          <>
            {" > "}
            <span> {curMuseum.name} </span>
          </>
        )}
      </p>

      <div className="header">
        {curMuseum === undefined
          ? "MUSEOS"
          : curMuseum.name + ": Obras principales"}
      </div>
      <hr />
      {curMuseum === undefined ? (
        <div className="museum-list">
          {museums.map((museo) => (
            <div
              className="card"
              key={museo.id}
              onClick={() => {
                elegirMuseo(museo.id);
                console.log(curMuseum);
              }}
            >
              <img src={museo.image} alt={museo.description} />
              <h3>{museo.name}</h3>
              <h6>{museo.city}</h6>
            </div>
          ))}
        </div>
      ) : (
        <Museum museum={curMuseum}></Museum>
      )}
    </div>
  );
}

export default MuseumsList;
