import { GET_EVENTS } from "../../actions/action_constant";
import { PANEL_DATA } from "../../actions/action_constant";

const initialState = {
  containerList: [],
  paneldata:[]
};
export default (state = initialState, action) => {

  switch (action.type) {
    case GET_EVENTS:
    return { ...state, containerList:action.data };
    case PANEL_DATA:
    return { ...state, paneldata:action.data };
      // return state;
    default:
      return state;
  }
};

