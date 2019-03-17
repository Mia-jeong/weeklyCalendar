import { FETCH_DAY, FETCH_DAY_SCHEDULE } from "../actions/type";

export const dayReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DAY:
      return action.payload;
    default:
      return state;
  }
};

export const scheduleReducer = (state = {}, action) => {
  const exampleList = dataExample();
  switch (action.type) {
    case FETCH_DAY_SCHEDULE:
      return { ...state, [action.payload]: exampleList[action.payload] };
    default:
      return state;
  }
};

const dataExample = () => {
  return {
    20190319: {
      9: {
        startTime: 9,
        endTime: 10.5,
        customer: "AAA",
        content: "blah blah",
        colour: "#24B170"
      },
      14: {
        startTime: 14,
        endTime: 15,
        customer: "BBB",
        content: "test",
        colour: "#104E9B"
      }
    },
    20190320: {
      10: {
        startTime: 10,
        endTime: 12,
        customer: "CCC",
        content: "test2",
        colour: "#6A2780"
      },
      18: {
        startTime: 18,
        endTime: 19,
        customer: "DDD",
        content: "test3",
        colour: "#9B2548"
      }
    }
  };
};
