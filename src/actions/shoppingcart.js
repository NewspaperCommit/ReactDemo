

import ApiClient from "../api-client";




export const CalculateTotalPrice = (obj ,callback) => {
    let   params= {
        totalquantity: obj[0],
        itemBaseTotalQnty: obj[1],
        deductedQuantity: obj[2],
        itemQuantity: obj[3],
        totalCartDetailCount: obj[4],
        count: obj[5],
        modelUnitPrice: obj[6],
      }
    return (dispatch) => {
        debugger;
        let url='https://localhost:';
        dispatch({ type: "ISLOADING", data: true });
        ApiClient.post(`${url}44357/api/ShoppingCart/CalculateTotalPrice`,params).then((response) => {
          debugger;
         
          
          if(response.status == 200){
            dispatch({ type: "ISLOADING", data: false });
            dispatch({ type: "calculate_price", data: response });
 return callback(response);
          }
         
        });
      } 
  };

