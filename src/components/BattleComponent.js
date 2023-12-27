import RockHandIcon from "../img/icon-rock.svg";
import PaperHandIcon from "../img/icon-paper.svg";
import SpockHandIcon from "../img/icon-spock.svg";
import LizardHandIcon from "../img/icon-lizard.svg";
import ScissorHandIcon from "../img/icon-scissors.svg";

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

  return (
    <div className="battle-container">
      <div className="your-choice">
        <p>SUA ESCOLHA</p>
        <div className="move-container">
          <img className="move-image" src={playerMoveIcon} />
        </div>
      </div>

      <div className="machine-choice">
        <p>ESCOLHA DA MAQUINA</p>
        <div className="move-container">
          <img className="move-image" src={machineMoveIcon} />
        </div>
      </div>
    </div>
  );
};

export default BattleComponent;
