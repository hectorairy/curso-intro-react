import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./ChangeStorageAlert.css";

export const ChangeStorageAlert = ({ synchronize }) => {
  const { show, synchronizeData } = useStorageListener(synchronize);
  if (show) {
    return (
      <div className="ChangeStorageAlert">
        <div className="ChangeStorageAlert__container">
          <p className="ChangeStorageAlert__text">
            Hemos encontrado cambios nuevos
          </p>
          <button
            className="ChangeStorageAlert__button"
            onClick={() => synchronizeData()}
          >
            ¡Muestrame lo nuevo!
          </button>
        </div>
      </div>
    );
  }
  return false;
};

//  Ejemplo de un High order component
// export const ChangeStorageAlertWithListener =
//   withStorageListener(ChangeStorageAlert);
