import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import NavigationBar from './components/Navbar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import CreateArticle from './components/CreateArticle';
import Articles from './components/Articles';
import ShowArticle from './components/ShowArticle';
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
            <Route path="/article" exact>
              <CreateArticle/>
            </Route>
            <Route path="/home" exact>
              <Articles/>
            </Route>
            <Route path="/:id" exact>
              <ShowArticle/>
            </Route>
        </Switch>
      </Router>
  );
}

export default App;
