import React,{useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainPage from './page/MainPage';
import DetailedPage from './page/DetailedPage';

function App() {

  useEffect(() => {
    document.body.style.backgroundColor ='#181818';
  }, [])
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/movie/:id" component={DetailedPage}/>

      </Switch>
    </Router>
  );
}

export default App;
