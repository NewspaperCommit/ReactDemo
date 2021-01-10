import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import layout from '../components/layout/layout'
import dashboard from "../components/Testcomponent";


const DashboardRoutes = [
  {
    path: "/dashboard",
    exact: true,
    layout: layout,
    // component: () => <Redirect to="/dashboard" />
    component: dashboard
  },
  // {
  //   path: "/dashboard",
  //   layout: layout,
  //   component: dashboard
  // }

];

export default DashboardRoutes;