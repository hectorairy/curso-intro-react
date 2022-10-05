import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./ChangeStorageAlert.css";

const ChangeStorageAlert = ({ show, synchronize }) => {
  if (show) {
    return (
      <div className="ChangeStorageAlert">
        <div className="ChangeStorageAlert__container">
          <p className="ChangeStorageAlert__text">
            Hemos encontrado cambios nuevos
          </p>
          <button
            className="ChangeStorageAlert__button"
            onClick={() => synchronize()}
          >
            ¡Muestrame lo nuevo!
          </button>
        </div>
      </div>
    );
  }
  return false;
};

export const ChangeStorageAlertWithListener =
  withStorageListener(ChangeStorageAlert);
