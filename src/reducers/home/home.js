//import { GET_EVENTS } from "../../actions/action_constant";
import { GET_COUNTRY } from "../../actions/action_constant";
import { HOMEPAGE_LOAD } from "../../actions/action_constant";

const initialState = {
  containerList: [],
  paneldata:[],
  countryList:[]
};
export default (state = initialState, action) => {

  switch (action.type) {
    case HOMEPAGE_LOAD:
        return { ...state, countryList:action.data };
    case GET_COUNTRY:
    return { ...state, countryList:action.data };
 
      // return state;
    default:
      return state;
  }
};

