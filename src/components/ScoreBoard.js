import React from "react";
import "./ScoreBoard.css";

const ScoreBoard = ({ scores }) => {
  return (
    <div className="score-board-container">
      <div className="names">
        <p>PEDRA</p>
        <p>PAPEL</p>
        <p>TESOURA</p>
        <p>LAGARTIXA</p>
        <p>SPOCK</p>
      </div>
      <div className="score-container">
        <div className="score-box">
          <p className="score-text">Score</p>
          <p className="score-number">{scores}</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
