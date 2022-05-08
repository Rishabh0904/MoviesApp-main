import './App.css';
import Nav from './Components/Nav'
import { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AuthProvider, AuthContext } from './Contexts/AuthProvider';
import About from './Components/About';
import Featured from './Components/Featured'
import Geners from './Components/Geners'
import Movies from './Components/Movies';
import Dubbed from './Components/Dubbed'
import Hindi from './Components/Hindi'
import TvSeries from './Components/TvSeries'
import Request from './Components/Request';
import Footer from './Components/Footer';
import Nav1 from './Components/Nav1'
import UploadFile from './UploadFile';
import Login from './Components/Login';
import SignUp from './Components/Signup';
import Profile from './Components/Profile'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute path='/MoviesApp' privateComponent={Movies}></PrivateRoute>
          <PrivateRoute path='/movies' privateComponent={Movies}></PrivateRoute>
          <PrivateRoute path='/about' privateComponent={About}></PrivateRoute>
          <PrivateRoute path='/featured' privateComponent={Featured}></PrivateRoute>
          <PrivateRoute path='/geners' privateComponent={Geners}></PrivateRoute>
          <PrivateRoute path='/upload' privateComponent={Hindi}></PrivateRoute>
          <PrivateRoute path='/dubbed' privateComponent={Dubbed}></PrivateRoute>
          <PrivateRoute path='/tvseries' privateComponent={TvSeries}></PrivateRoute>
          <PrivateRoute path='/request' privateComponent={Request}></PrivateRoute>
          <PrivateRoute path='/profile' privateComponent={Profile}></PrivateRoute>
          <Route path='/login' component={Login}></Route>
          <Route path='/signup' component={SignUp}></Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>


  );

}

function PrivateRoute({privateComponent: Component, ...restProps}) {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route {...restProps} render={(props) => {
      return (currentUser !== null) ? <Component {...props}/> : <Redirect to='/login'></Redirect>
    }}></Route>
  );
}

export default App;
