
import ApiClient from "../api-client";

/********** Get Country data**********/

export const getCountryData = () => {
  debugger;
  return (dispatch) => {
    debugger;
    let url='https://localhost:';
    dispatch({ type: "ISLOADING", data: true });
    ApiClient.get(`${url}44357/api/Home/GetAllCountriesWithAbbr`).then((response) => {
      debugger;
      dispatch({ type: "ISLOADING", data: false });
      dispatch({ type: "GET_COUNTRY", data: response });
    });
  }
};