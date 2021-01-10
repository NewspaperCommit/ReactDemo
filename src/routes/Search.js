
import search from '../components/search/search'
import browse from '../components/browse/browse'
import obituaries from '../components/obituaries/obituaries'
 import layout from '../components/layout/layout'
import { Redirect } from "react-router-dom";
import layouttest from '../components/layout/layouttest'
const SearchRoutes = [
    {
      path: "/search",
      exact: true,
      layout: layouttest,
    //   component: () => <Redirect to="/home" />
    component: search
    }
    // {
    //   path: "/browse",
    //   layout: layout,
    //   component: browse
    // },

    // {
    //     path: "/obituaries",
    //     layout: layout,
    //     component: obituaries
    //   }
  
  ];
  
  export default SearchRoutes;