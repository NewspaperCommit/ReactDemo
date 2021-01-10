

import { dashboard } from './dashboard';
import {home} from './home'
import {Singin} from './singin'


export const useActions = (state, dispatch) => {
    debugger;
    return {
      dashboard: dashboard({ state, dispatch }),
      home:home({state,dispatch}),
      Singin:Singin({state , dispatch})

    }
  };