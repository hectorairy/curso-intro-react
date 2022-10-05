import { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
  const [synchronizeItem, setSynchronizeItem] = useState(true);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
        setSynchronizeItem(true);
      } catch (error) {
        setError(true);
      }
    }, 3000);
  }, [synchronizeItem]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(true);
    }
  };

  const synchronize = () => {
    setSynchronizeItem(false);
    setLoading(true);
  };

  return { item, saveItem, loading, error, synchronize };
}

export { useLocalStorage };
