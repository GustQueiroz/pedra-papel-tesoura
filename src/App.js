import React from "react";
import { useState, Fragment } from "react";
import "./App.css";
import RockHandIcon from "./img/icon-rock.svg";
import PaperHandIcon from "./img/icon-paper.svg";
import SpockHandIcon from "./img/icon-spock.svg";
import LizardHandIcon from "./img/icon-lizard.svg";
import ScissorHandIcon from "./img/icon-scissors.svg";

function App() {
  const [winner, setWinner] = useState("");
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

    console.log(machineMoveType);

    const playerMoveValidation = possibleMoves.find(
      (currentMove) => currentMove.type === playerMove
    );

    const isPlayerTheWinner =
      playerMoveValidation.wins.includes(machineMoveType);

    if (isPlayerTheWinner) {
      setWinner("Jogador");
    } else if (machineMoveType === playerMove) {
      setWinner("Empate");
    } else {
      setWinner("Computador");
    }
  };

  return (
    <Fragment>
      <header className="App-header"></header>

      {winner && <h1>{winner}</h1>}

      <button onClick={() => makeMove("spock")}>
        <img src={SpockHandIcon} alt="SpockHandIcon" />
      </button>

      <button onClick={() => makeMove("scissor")}>
        <img src={ScissorHandIcon} alt="ScissorHandIcon" />
      </button>

      <button onClick={() => makeMove("paper")}>
        <img src={PaperHandIcon} alt="PaperHandIcon" />
      </button>

      <button onClick={() => makeMove("rock")}>
        <img src={RockHandIcon} alt="RockHandIcon" />
      </button>

      <button onClick={() => makeMove("lizard")}>
        <img src={LizardHandIcon} alt="LizardHandIcon" />
      </button>
    </Fragment>
  );
}

export default App;
