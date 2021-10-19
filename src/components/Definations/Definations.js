import React from "react";
import "./Definations.css";

function Definations({ word, category, meanings }) {
  return (
    <div className="meanings">
      {meanings[0] && word && category === "en" && (
        <audio
          src={meanings[0].phonetics[0].audio}
          style={{ backgroundColor: "#fff", borderRadius: 10 }}
          controls
        >
          Your browser doesn't support audio
          {console.log(meanings[0].phonetics[0])}
        </audio>
      )}
      {word === "" ? (
        <span className="subTitle">Start by typing a word in Search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map(
            (item) =>
              item.definitions.map((def) => (
                <div
                  className="singleMean"
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  <b>{def.definition}</b>
                  <hr style={{ backgroundColor: "black", width: "100%" }} />
                  {def.example && (
                    <span>
                      <b>Example: </b>
                      {def.example}
                    </span>
                  )}
                  {def.synonyms && (
                    <span>
                      <b>Synonyms: </b>
                      {def.synonyms.map((s) => `${s}, `)}
                    </span>
                  )}
                </div>
              ))
            // console.log(item.definitions)
          )
        )
      )}
    </div>
  );
}

export default Definations;
