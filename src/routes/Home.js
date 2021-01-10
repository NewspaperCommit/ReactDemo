
import home from '../components/home/Home'
import layout from '../components/layout/layout'
import { Redirect } from "react-router-dom";
const HomeRoutes = [
    {
      path: "/",
      exact: true,
      layout: layout,
    //   component: () => <Redirect to="/home" />
    component: home
    },
    // {
    //   path: "/dashboard",
    //   layout: Layout,
    //   component: dashboard
    // }
  
  ];
  
  export default HomeRoutes;