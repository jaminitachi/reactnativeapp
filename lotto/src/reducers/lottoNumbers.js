const defaultState = {
  currentNumber: [],
  history: [],
};

export const lottonumbers = (state = defaultState, action) => {
  if (action.type === "CREATE_NEW_NUMBERS") {
    return {
      ...state,
      currentNumber: action.numbers,
      history: state.history.concat([
        {
          date: new Date(),
          numbers: action.numbers,
        },
      ]),
    };
  }
  return {
    ...state,
  };
};
