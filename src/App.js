import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import RulesButton from "./components/RulesButton.js";
import RockHandIcon from "./img/icon-rock.svg";
import PaperHandIcon from "./img/icon-paper.svg";
import SpockHandIcon from "./img/icon-spock.svg";
import LizardHandIcon from "./img/icon-lizard.svg";
import Pentagon from "./img/bg-pentagon.svg";
import ScissorHandIcon from "./img/icon-scissors.svg";
import ScoreBoard from "./components/ScoreBoard.js";
import BattleComponent from "./components/BattleComponent.js";

function App() {
  const [score, setScore] = useState(0);
  const [buttonsContainerVisible, setButtonsContainerVisible] = useState(true);
  const [buttonsContainerOpacity, setButtonsContainerOpacity] = useState(1);
  const [winner, setWinner] = useState("");
  const [playerMove, setPlayerMove] = useState("");
  const [machineMoveType, setMachineMoveType] = useState("");
  const [possibleMoves, setPossibleMoves] = useState([
    {
      type: "rock",
      label: "Pedra",
      wins: ["scissor", "lizard"],
      lose: ["paper", "spock"],
    },
    {
      type: "paper",
      label: "Papel",
      wins: ["rock", "spock"],
      lose: ["scissor", "lizard"],
    },
    {
      type: "scissor",
      label: "Tesoura",
      wins: ["paper", "lizard"],
      lose: ["rock", "spock"],
    },
    {
      type: "lizard",
      label: "Lagarto",
      wins: ["paper", "spock"],
      lose: ["rock", "scissor"],
    },
    {
      type: "spock",
      label: "Spock",
      wins: ["rock", "scissor"],
      lose: ["paper", "lizard"],
    },
  ]);

  useEffect(() => {
    const storedScore = localStorage.getItem("score");
    if (storedScore) {
      setScore(parseInt(storedScore, 10));
    }
  }, []);

  const makeMove = (playerMove) => {
    const minimumMachineMoveNumber = 1;
    const maximumMachineMoveNumber = 5;

    const randomMachineMove =
      Math.floor(
        Math.random() *
          (maximumMachineMoveNumber - minimumMachineMoveNumber + 1)
      ) + minimumMachineMoveNumber;

    let machineMoveType = "";

    switch (randomMachineMove) {
      case 1:
        machineMoveType = "paper";
        break;
      case 2:
        machineMoveType = "rock";
        break;
      case 3:
        machineMoveType = "scissor";
        break;
      case 4:
        machineMoveType = "spock";
        break;
      case 5:
        machineMoveType = "lizard";
        break;
    }

    const playerMoveValidation = possibleMoves.find(
      (currentMove) => currentMove.type === playerMove
    );

    const isPlayerTheWinner =
      playerMoveValidation.wins.includes(machineMoveType);

    if (isPlayerTheWinner) {
      setWinner("Você Ganhou");
      setTimeout(() => {
        setScore((prevScore) => prevScore + 1);
        localStorage.setItem("score", (score + 1).toString());
      }, 3500);
    } else if (machineMoveType === playerMove) {
      setWinner("Houve um Empate");
    } else {
      setWinner("Você Perdeu");
      setTimeout(() => {
        setScore(0);
        localStorage.setItem("score", "0");
      }, 3500);
    }

    setPlayerMove(playerMove);

    setTimeout(() => {
      setMachineMoveType(machineMoveType);
    }, 1000);

    setButtonsContainerOpacity(0);

    setTimeout(() => {
      setButtonsContainerVisible(false);
    }, 1000);
  };

  return (
    <div className="container">
      <ScoreBoard scores={score} />

      <div
        className={`buttonsContainer ${
          buttonsContainerVisible ? "visible" : "hidden"
        }`}
        style={{ opacity: buttonsContainerOpacity }}
      >
        <div className="pentagonImageDiv">
          <img src={Pentagon} className="pentagonImage"></img>
        </div>

        <div className="spockDiv">
          <button onClick={() => makeMove("spock")} className="gameButton">
            <img src={SpockHandIcon} alt="SpockHandIcon" />
          </button>
        </div>

        <div className="scissorDiv">
          <button onClick={() => makeMove("scissor")} className="gameButton">
            <img src={ScissorHandIcon} alt="ScissorHandIcon" />
          </button>
        </div>

        <div className="paperDiv">
          <button onClick={() => makeMove("paper")} className="gameButton">
            <img src={PaperHandIcon} alt="PaperHandIcon" />
          </button>
        </div>

        <div className="rockDiv">
          <button onClick={() => makeMove("rock")} className="gameButton">
            <img src={RockHandIcon} alt="RockHandIcon" />
          </button>
        </div>

        <div className="lizardDiv">
          <button
            onClick={() => makeMove("lizard")}
            className="gameButton lizard"
          >
            <img src={LizardHandIcon} alt="LizardHandIcon" />
          </button>
        </div>
      </div>

      <BattleComponent
        playerMove={playerMove}
        machineMoveType={machineMoveType}
      />

      <RulesButton className="rulesButtonOnScreen" />
    </div>
  );
}

export default App;
