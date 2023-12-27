import React from "react";
import { useState, Fragment } from "react";
import Modal from "react-modal";
import "./App.css";
import RulesButton from "./components/RulesButton.js";
import RockHandIcon from "./img/icon-rock.svg";
import PaperHandIcon from "./img/icon-paper.svg";
import SpockHandIcon from "./img/icon-spock.svg";
import LizardHandIcon from "./img/icon-lizard.svg";
import Pentagon from "./img/bg-pentagon.svg";
import ScissorHandIcon from "./img/icon-scissors.svg";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
    console.log(playerMove);

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
    <div className="container">
      <header className="App-header"></header>

      <img src={Pentagon} className="pentagonImage"></img>
      <div>
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
          <button onClick={() => makeMove("lizard")} className="gameButton">
            <img src={LizardHandIcon} alt="LizardHandIcon" />
          </button>
        </div>
      </div>

      <RulesButton className="rulesButtonOnScreen" />
    </div>
  );
}

export default App;
