import React from "react";
import { withStorageListener } from "./withStorageListener";

const ChangeStorageAlert = ({ show, synchronize }) => {
  if (show) {
    return (
      <div>
        <p>Hubo cambios</p>
        <button onClick={() => synchronize()}>Refrescar la información</button>
      </div>
    );
  }
  return false;
};

export const ChangeStorageAlertWithListener =
  withStorageListener(ChangeStorageAlert);
