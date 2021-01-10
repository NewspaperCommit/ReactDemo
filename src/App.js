import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Home from './components/home/Home';
import Login from './components/Login/Login'
import "./assets/css/homePagev1a.css"
import "./assets/css/minifiy_bootstrap.css"
import "./assets/css/website.css"
import { PersistGate } from 'redux-persist/es/integration/react';
import Routes  from './routes'
import { Provider } from 'react-redux';
import configureStore from './config';
import history from './history';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  /************ store configration *********/
  const { persistor, store } = configureStore(history);


  return (

    <Provider store={store}>
      <PersistGate  persistor={persistor}>
        {/* <ConnectedRouter history={history}> */}
        <Router basename={process.env.REACT_APP_BASENAME || ""}>
          <div>
            {Routes.map((route, index) => {
              debugger;
               console.log(index);
               console.log(route);
              return (


                <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={props => (
                  <route.layout>
                    <route.component {...props} />
                  </route.layout>
                )}
              />
              );
            })}
          </div>
        </Router>
        {/* <Header/> */}
      {/* <header className="App-header">
        
        <p>
         MY FIRSt PaGE
        </p>
       
     
        
      </header> */}
      {/* <Home/> */}
      {/* <Footer/> */}
        {/* </ConnectedRouter> */}
        


        {/* <Header/>
        <Home/> 
        <Footer/> */}
      </PersistGate>
    </Provider>
      );
}

export default App;
