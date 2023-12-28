import RockHandIcon from "../img/icon-rock.svg";
import PaperHandIcon from "../img/icon-paper.svg";
import SpockHandIcon from "../img/icon-spock.svg";
import LizardHandIcon from "../img/icon-lizard.svg";
import ScissorHandIcon from "../img/icon-scissors.svg";
import { useState, useEffect } from "react";
import React from "react";
import "./BattleComponent.css";
const BattleComponent = ({ playerMove, machineMoveType }) => {
  const moveIcons = {
    rock: RockHandIcon,
    paper: PaperHandIcon,
    scissor: ScissorHandIcon,
    lizard: LizardHandIcon,
    spock: SpockHandIcon,
  };

  const playerMoveIcon = moveIcons[playerMove];
  const machineMoveIcon = moveIcons[machineMoveType];
  const [winner, setWinner] = useState("");
  const [resultMessage, setResultMessage] = useState("");
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
    const delay = 3500;

    const timeoutId = setTimeout(() => {
      const playerMoveValidation = possibleMoves.find(
        (currentMove) => currentMove.type === playerMove
      );
      const isPlayerTheWinner =
        playerMoveValidation &&
        playerMoveValidation.wins.includes(machineMoveType);

      const message = isPlayerTheWinner
        ? "Você Ganhou"
        : machineMoveType === playerMove
        ? "Houve um Empate"
        : "Você Perdeu";

      setResultMessage(message);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [playerMove, machineMoveType]);

  return (
    <div className="battle-container">
      <div className="your-choice">
        <p>SUA ESCOLHA</p>
        <div className="move-container">
          <img className="move-image" src={playerMoveIcon} alt="." />
        </div>
      </div>

      <div className="result-message-container">
        <p>{resultMessage}</p>
      </div>

      <div className="machine-choice">
        <p>ESCOLHA DA MAQUINA</p>
        <div className="move-container">
          <img className="move-image" src={machineMoveIcon} alt="." />
        </div>
      </div>
    </div>
  );
};

export default BattleComponent;
