import { ALERT_DATA, FETCH_DATA_FAIL, FETCH_DATA_SUCCESS } from "./storeTypes";

export const counterReducer = (count = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return action.payload;
    case "DECREMENT":
      return action.payload;
    default:
      return count;
  }
};

const fetchInitData = {
  userId: 0,
  id: 0,
  title: "no title",
  completed: false
};

export const fetchReducer = (fetchedData = fetchInitData, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return action.payload;
    case FETCH_DATA_FAIL:
      return {
        fetchedData,
        error: action.payload
      };
    default:
      return fetchedData;
  }
};

const alertInitData: string = "no alert data";

export const alertReducer = (alertData = alertInitData, action) => {
  switch (action.type) {
    case ALERT_DATA:
      return action.payload;
    default:
      return alertData;
  }
};
