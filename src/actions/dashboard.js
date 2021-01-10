
import ApiClient from "../api-client";

/********** Get events**********/

export const getEvents = () => {
  debugger;
  return (dispatch) => {
    debugger;
    let url='http://localhost:';
    dispatch({ type: "ISLOADING", data: true });
    ApiClient.get(`${url}1508/api/dashboard/GetWidgetsList`).then((response) => {
      debugger;
      dispatch({ type: "ISLOADING", data: false });
      dispatch({ type: "GET_EVENTS", data: response });
    });
  }
};

export const getPanelData = (params,callback) => {

  return (dispatch) => {

    let url='http://localhost:';
    //dispatch({ type: "ISLOADING", data: true });
    ApiClient.get(`${url}1508/api/dashboard/GetWidgetsData?id=`+params.contentId).then((response) => {
      debugger;
     // dispatch({ type: "ISLOADING", data: false });
     if(response.length>0)
     {
      dispatch({ type: "PANEL_DATA", data: response });
      return callback(response);
     }

    });
  }
};


