import React from "react";
import { useState } from "react";

export const withStorageListener = (WrappedComponent) => {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);
    window.addEventListener("storage", (change) => {
      if (change.key === "TODOS_V1") {
        setStorageChange(true);
      }
    });

    const synchronize = () => {
      props.synchronize();
      setStorageChange(false);
    };

    return <WrappedComponent show={storageChange} synchronize={synchronize} />;
  };
};
