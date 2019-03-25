import _ from "lodash";
import {
  FETCH_DAY,
  FETCH_DAY_SCHEDULE,
  CREATE_SCHEDULE,
  EDIT_SCHEDULE,
  DELETE_SCHEDULE
} from "../actions/type";

export const dayReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DAY:
      return action.payload;
    default:
      return state;
  }
};

export const scheduleReducer = (state = {}, action) => {
  const exampleList = dataExample(); //for test
  switch (action.type) {
    case FETCH_DAY_SCHEDULE:
      return { ...state };
    case CREATE_SCHEDULE:
      return {
        ...state,
        [action.payload.date]: {
          ...state[action.payload.date],
          [action.payload.start]: action.payload
        }
      };
    case EDIT_SCHEDULE:
      return {
        ...state,
        [action.payload.date]: {
          ...state[action.payload.date],
          [action.payload.start]: action.payload
        }
      };
    case DELETE_SCHEDULE:
      const { date, start } = action.payload;
      return _.omit(state, `${date}[${start}]`);
    default:
      return state;
  }
};

const dataExample = () => {
  return {
    20190319: {
      9: {
        start: 9,
        end: 10.5,
        customer: "AAA",
        content: "blah blah",
        colour: "#FAB8CB"
      },
      14: {
        start: 14,
        end: 15,
        customer: "BBB",
        content: "test",
        colour: "#B5D4DE"
      }
    },
    20190320: {
      10: {
        start: 10,
        end: 12,
        customer: "CCC",
        content: "test2",
        colour: "#CFD8C9"
      },
      18: {
        start: 18,
        end: 19,
        customer: "DDD",
        content: "test3",
        colour: "#CCCCCC"
      }
    },
    20190322: {
      12: {
        start: 12,
        end: 12.5,
        customer: "AAA",
        content: "blah blah",
        colour: "#FFE1CF"
      },
      16: {
        start: 16,
        end: 18,
        customer: "BBB",
        content: "test",
        colour: "#B5D4DE"
      }
    }
  };
};
