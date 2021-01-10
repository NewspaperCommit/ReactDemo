

import ApiClient from "../api-client";




export const Singin = (value , callback) => {
    return (dispatch) => {
        debugger;
        let url='https://localhost:';
        dispatch({ type: "ISLOADING", data: true });
        ApiClient.post(`${url}44357/api/Login/Signin`,value).then((response) => {
          debugger;
         
          
          if(response.status == 200){
            dispatch({ type: "ISLOADING", data: false });
            dispatch({ type: "User_Sigin", data: response });
 return callback(response);
          }
         
        });
      } 
  };


  export const logout = () => {
    return (dispatch) => {
      dispatch({ type: "LOGOUT"});
    };
  };