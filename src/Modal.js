import React from "react";
import { FaTimes } from "react-icons/fa";
import { ReactDOM } from "react";
import { useGlobalContext } from "./context";
import {CSSTransition} from 'react-transition-group'
const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <CSSTransition
    in={isModalOpen}
    unmountOnExit
    timeout={{enter:0,exit:300}}>
      <div
        className="show-modal"
      >
        <div className="modal-container">
          <button className="close-modal-btn" onClick={closeModal}>
            <FaTimes />
          </button>
          <h2>Component Modal</h2>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
