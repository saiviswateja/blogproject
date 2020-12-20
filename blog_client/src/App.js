import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import NavigationBar from './components/Navbar';
import SignUp from './components/SignUp';
import Login from './components/Login';
function App() {
  return (
      <Router>
        <NavigationBar/>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/signup" exact>
                <SignUp/>
            </Route>
            <Route path="/login" exact>
                <Login/>
            </Route>
        </Switch>
      </Router>
  );
}

export default App;
