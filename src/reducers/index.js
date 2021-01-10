/*********** Reduceres defined here *********/

import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage"; // default: localStorage if web, AsyncStorage if react-native
//import { connectRouter } from "connected-react-router";
//import encryptor from "./encryptor";
import user from "./user/user";
import dashboard from "./dashboard/dashboard";
import home from "./home/home"
import sigin from './Sigin/sigin'
import shoppin from './shoppincart/shoppingcart';



const userPersistConfig = {
  key: "newspaper-app",
  storage: storage,
  //transforms: [encryptor],
  //blacklist: ['sigin']
  //whitelist:[home]
};


export default history =>
  persistCombineReducers(userPersistConfig, {
    
    home,
    sigin,
    shoppin,
    //router: connectRouter(history)
  });
