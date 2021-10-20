import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './container/landingPage';
import './App.css';

function App() {
  return (
      <Router>
        <Switch>
           <Route path="/" exact component={LandingPage}/>

           {/* Error 404 Page */}
           <Route>
             <h2>404 PAGE !!!!!!</h2>
           </Route>
        </Switch>
      </Router>
  );
}

export default App;

//function App() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }
  
  // export default App;
