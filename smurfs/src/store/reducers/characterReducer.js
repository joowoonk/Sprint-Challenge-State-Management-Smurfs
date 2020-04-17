const initialState = {
  data: [],
  isFetching: false,
  error: "",
  characters: [],
};

export const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CHARACTER_START":
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case "FETCH_CHARACTER_SUCCESS":
      // console.log("FETCH_CHARACTER_SUCCESS", action.payload);
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: "",
      };
    case "FETCH_CHARACTER_FAILURE":
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case "POST_CHARACTER_SUCCESS":
      // console.log(
      // "POST_CHARACTER_SUCESS action payload",
      // action.payload
      // state.characters
      // );
      return { ...state, characters: action.payload };
    case "POST_CHARACTER_FAIL":
      return {
        ...state,
        addingCharacter: false,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};
