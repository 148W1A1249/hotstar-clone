import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./components/Login/Login";
import Header from './components/Header/Header';
import Home from './components/Home/home';
import Detail from './components/Detail/Detail';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/detail/:id" component={Detail}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
