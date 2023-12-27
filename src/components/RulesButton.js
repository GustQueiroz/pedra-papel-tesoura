import React, { useState } from "react";
import RulesImage from "../img/image-rules-bonus.svg";
import CloseButton from "../img/icon-close.svg";
import Modal from "react-modal";
import "../App.css";

const RulesButton = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button className="rulesButton" onClick={openModal}>
        REGRAS
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Regras do Jogo"
        className="rulesModal"
      >
        <div>
          <div className="rulesHeader">
            <h1 className="rulesText">Regras</h1>
            <button onClick={closeModal} className="rulesCloseButton">
              <img src={CloseButton}></img>
            </button>
          </div>
          <div>
            <img
              src={RulesImage}
              alt="Regras do Jogo"
              style={{ maxWidth: "100%" }}
              className="rulesImage"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RulesButton;
