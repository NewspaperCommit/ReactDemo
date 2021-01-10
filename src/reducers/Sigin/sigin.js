
import { LOGIN }  from "../../actions/action_constant";

const initialState = {
  Userdata: [],
  loggedIn: false,
  isActive:''
};
export default (state = initialState, action) => {

  switch (action.type) {
    case 'User_Sigin':
    return { ...state, Userdata:action.data,...{ loggedIn: true }, };
    case 'LOGOUT':
      
      return { ...state, loggedIn: false, Userdata: {} };
    
    default:
      return state;
  }
};

