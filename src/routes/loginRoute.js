

import Login from '../components/Login/Login'
import layout from '../components/layout/layout'
import { Redirect } from "react-router-dom";
const LoginRoutes = [
    {
      path: "/login",
      exact: true,
      layout: layout,
    component: Login
    },
    
  
  ];
  
  export default LoginRoutes;