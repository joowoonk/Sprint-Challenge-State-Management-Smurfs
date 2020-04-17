import axios from "axios";

export const characterAction = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_CHARACTER_START" });
    axios
      .get(`http://localhost:3333/smurfs`)
      .then((res) => {
        // console.log(
        //   `type: "FETCH_CHARACTER_SUCCESS", payload:res.data`,
        //   res.data
        // );
        dispatch({ type: "FETCH_CHARACTER_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_CHARACTER_FAILURE",
          payload: err,
        });
      });
  };
};

export const postSmurfAction = (smurf) => {
  return (dispatch) => {
    dispatch({ type: "FETCH_CHARACTER_START" });
    axios
      .post(`http://localhost:3333/smurfs`, smurf)
      .then((res) => {
        // console.log(
        //   `type: "POST_CHARACTER_SUCCES", payload:res.data`,
        //   res.data
        // );
        dispatch({ type: "POST_CHARACTER_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: "POST_CHARACTER_FAIL",
          payload: err,
        });
      });
  };
};
