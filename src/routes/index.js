
import HomeRoutes from './Home'
import AuthRoutes from './auth';
import DashboardRoutes from './dashboard';
import LoginRoutes from './loginRoute';
import SearchRoutes from './Search';
import BrowseRoutes from './Browse';
import ObituariesRoutes from './Obituaries';



const Routes = [...HomeRoutes,...LoginRoutes,...SearchRoutes,...BrowseRoutes,...ObituariesRoutes];
export default Routes;
