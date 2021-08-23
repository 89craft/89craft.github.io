import React from 'react';
import { makeStyles } from '@material-ui/core';
//import logo from '.../logo.svg';
import './app.css';
import { useHistory, Switch, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import NavBar from '../header.jsx';
import CG_NavBar from '../computer-graphics/cg-header.jsx';
import GD_NavBar from '../game-dev/gd-header.jsx';
import WD_NavBar from '../web-dev/wd-header.jsx';
import Footer from '../footer.jsx';
import CG_Footer from '../computer-graphics/cg-footer.jsx';
import GD_Footer from '../game-dev/gd-footer.jsx';
import WD_Footer from '../web-dev/wd-footer.jsx';
import Home from '../home.jsx';
import About from '../about.jsx';
import Blog from '../home.jsx';
import CG_Home from '../computer-graphics/cg-home.jsx';
import CG_About from '../computer-graphics/cg-about.jsx';
import CG_Blog from '../computer-graphics/cg-blog.jsx';
import CG_Portfolio from '../computer-graphics/cg-portfolio.jsx';
import CG_Testimonials from '../computer-graphics/cg-testimonials';
import GD_Home from '../game-dev/gd-home.jsx';
import GD_About from '../game-dev/gd-about.jsx';
import GD_Blog from '../game-dev/gd-blog.jsx';
import GD_Portfolio from '../game-dev/gd-portfolio.jsx';
import GD_Testimonials from '../game-dev/gd-testimonials';
import WD_Home from '../web-dev/wd-home.jsx';
import WD_About from '../web-dev/wd-about.jsx';
import WD_Blog from '../web-dev/wd-blog.jsx';
import WD_Portfolio from '../web-dev/wd-portfolio.jsx';
import WD_Testimonials from '../web-dev/wd-testimonials';

const useStyles = makeStyles(() => ({}));

function App() {
  const classes = useStyles();
  const history = useHistory(); // for moving you around the site.

  return (
    <div className="App">
      <Switch>
        <Route path="/cg" component={CG_NavBar}></Route>
        <Route path="/gd" component={GD_NavBar}></Route>
        <Route path="/wd" component={WD_NavBar}></Route>
        <Route component={NavBar}></Route>
      </Switch>
      <div className="App-body">
        <Switch>
          {/* The Switch decides which component to show based on the current URL.*/}
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/blog" component={Blog}></Route>
          <Route exact path="/cg" component={CG_Home}></Route>
          <Route exact path="/cg/home" component={CG_Home}></Route>
          <Route exact path="/cg/about" component={CG_About}></Route>
          <Route exact path="/cg/blog" component={CG_Blog}></Route>
          <Route exact path="/cg/portfolio" component={CG_Portfolio}></Route>
          <Route exact path="/cg/testimonials" component={CG_Testimonials}></Route>
          <Route exact path="/gd" component={GD_Home}></Route>
          <Route exact path="/gd/home" component={GD_Home}></Route>
          <Route exact path="/gd/about" component={GD_About}></Route>
          <Route exact path="/gd/blog" component={GD_Blog}></Route>
          <Route exact path="/gd/portfolio" component={GD_Portfolio}></Route>
          <Route exact path="/gd/testimonials" component={GD_Testimonials}></Route>
          <Route exact path="/wd" component={WD_Home}></Route>
          <Route exact path="/wd/home" component={WD_Home}></Route>
          <Route exact path="/wd/about" component={WD_About}></Route>
          <Route exact path="/wd/blog" component={WD_Blog}></Route>
          <Route exact path="/wd/portfolio" component={WD_Portfolio}></Route>
          <Route exact path="/wd/testimonials" component={WD_Testimonials}></Route>
        </Switch>
        <Switch>
          <Route path="/cg" component={CG_Footer}></Route>
          <Route path="/gd" component={GD_Footer}></Route>
          <Route path="/wd" component={WD_Footer}></Route>
          <Route component={Footer}></Route>
        </Switch>
      </div>
    </div>
  );
}
export default App;