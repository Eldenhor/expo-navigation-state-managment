import { ALERT_DATA, FETCH_DATA_FAIL, FETCH_DATA_SUCCESS } from "./storeTypes";

export const fetchData = (id: number) => {
  return async dispatch => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
      const json = await response.json();
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: json
      });
    } catch (error) {
      dispatch({
        type: FETCH_DATA_FAIL,
        payload: error
      });
    }
  };
};

export const alertData = (data: string) => {
  return {
    type: ALERT_DATA,
    payload: data
  };
};

export const alertDataPlus = (data: string) => {
  return {
    type: ALERT_DATA,
    payload: data
  };
};

export const counterAction = (direction: boolean) => {
  return (dispatch, getState) => {
    if (direction) {
      dispatch({
        type: "INCREMENT",
        number: getState().count + 1,
        payload: 100
      });
    } else {
      dispatch({
        type: "DECREMENT",
        number: getState().count - 1,
        payload: 60
      });
    }
  };
};
