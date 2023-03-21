import React from "react";
import badminton from "../Pictures/pngegg.png";
import { useEffect, useState } from "react";

function OldGame() {
  // Make a GET request to your backend API
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_WEB_URI)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="game-page">
        <div className="picture-gp">
          <img className="pic" src={badminton} alt="react-app" />
        </div>
        <div className="old-gamepage-content">
          <h1 className="old-gamepage-heading">Played Games</h1>
          <div className="old-gamepage-data">
          {data.map((item, i) => {
            return (
              <div
                className="login"
                style={{ marginRight: "0px", marginBottom:"1vh", padding: "20px 30px" }}
                key={i}
              >
                <h1
                  style={{
                    backgroundColor: "transparent",
                    marginTop: "0px",
                    marginBottom: "0px",
                  }}
                >
                  {item.player1} vs {item.player2}
                </h1>
                <h2
                  style={{
                    backgroundColor: "transparent",
                    marginTop: "0px",
                    marginBottom: "0px",
                  }}
                >
                  Score: {item.score1} - {item.score2}
                </h2>
                <p
                  style={{
                    backgroundColor: "transparent",
                    marginTop: "5px",
                    marginBottom: "10px",
                  }}
                >
                  {item.winText}
                </p>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </>
  );
}

export default OldGame;
