
import { calculate_price }  from "../../actions/action_constant";

const initialState = {
  totalprice: [],

};
export default (state = initialState, action) => {

  switch (action.type) {
    case 'calculate_price':
    return { ...state, totalprice:action.data };
   
    
    default:
      return state;
  }
};

