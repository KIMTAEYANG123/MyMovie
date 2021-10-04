import React,{useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainPage from './page/MainPage';
import DetailedPage from './page/DetailedPage';
import Header from './components/common/Header';
import LoginPage from './components/LoginPage';
import SearchPage from './page/SearchPage';
import UserJoin from './components/UserJoin';

function App() {

  useEffect(() => {
    document.body.style.backgroundColor ='#181818';
  }, [])
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/search-movie/:name" component={SearchPage}/>
        <Route exact path="/movie/:id" component={DetailedPage}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/join" component={UserJoin}/>
      </Switch>
    </Router>
  );
}

export default App;
