import { useEffect, useReducer } from "react";

function useLocalStorage(itemName, initialValue) {
  // const [synchronizeItem, setSynchronizeItem] = useState(true);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(true);
  // const [item, setItem] = useState(initialValue);

  const [state, dispatch] = useReducer(reducer, {
    synchronizeItem: true,
    error: false,
    loading: true,
    item: initialValue,
  });

  const { synchronizeItem, error, loading, item } = state;

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

        dispatch({ type: actionTypes.synchronized, payload: parsedItem });
      } catch (error) {
        dispatch({ type: actionTypes.error });
      }
    }, 3000);
  }, [synchronizeItem]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      dispatch({ type: actionTypes.save, payload: newItem });
    } catch (error) {
      dispatch({ type: actionTypes.error });
    }
  };

  const synchronize = () => {
    dispatch({ type: actionTypes.synchronize });
  };

  return { item, saveItem, loading, error, synchronize };
}

const actionTypes = {
  synchronized: "SYNCHRONIZED",
  error: "ERROR",
  save: "SAVE",
  synchronize: "SYNCHRONIZE",
};

const reducerObject = (state, payload) => ({
  [actionTypes.synchronized]: {
    ...state,
    error: false,
    item: payload,
    loading: false,
    synchronizeItem: true,
  },
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.save]: {
    ...state,
    error: false,
    item: payload,
  },
  [actionTypes.synchronize]: {
    ...state,
    error: false,
    synchronizeItem: false,
    loading: true,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };
