import React from 'react';
import { useHistory, Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
// Page Components
import HEADER from './components/header.jsx';
import CG_HEADER from './components/computer-graphics/cg-header.jsx';
import GD_HEADER from './components/game-dev/gd-header.jsx';
import WD_HEADER from './components/web-dev/wd-header.jsx';
import FOOTER from './components/footer.jsx';
import CG_FOOTER from './components/computer-graphics/cg-footer.jsx';
import GD_FOOTER from './components/game-dev/gd-footer.jsx';
import WD_FOOTER from './components/web-dev/wd-footer.jsx';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Blog from './components/home.jsx';
import CG_Home from './components/computer-graphics/cg-home.jsx';
import CG_About from './components/computer-graphics/cg-about.jsx';
import CG_Blog from './components/computer-graphics/cg-blog.jsx';
import CG_Portfolio from './components/computer-graphics/cg-portfolio.jsx';
import CG_Testimonials from './components/computer-graphics/cg-testimonials';
import GD_Home from './components/game-dev/gd-home.jsx';
import GD_About from './components/game-dev/gd-about.jsx';
import GD_Blog from './components/game-dev/gd-blog.jsx';
import GD_Portfolio from './components/game-dev/gd-portfolio.jsx';
import GD_Testimonials from './components/game-dev/gd-testimonials';
import WD_Home from './components/web-dev/wd-home.jsx';
import WD_About from './components/web-dev/wd-about.jsx';
import WD_Blog from './components/web-dev/wd-blog.jsx';
import WD_Portfolio from './components/web-dev/wd-portfolio.jsx';
import WD_Testimonials from './components/web-dev/wd-testimonials';

/**
 * This is the router configuration component.
 * @note only pass page components to this router.
 */
const Router = () => {
  const history = useHistory(); // for moving you around the site.
  
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="?/cg" component={CG_HEADER}></Route>
          <Route path="?/gd" component={GD_HEADER}></Route>
          <Route path="?/wd" component={WD_HEADER}></Route>
          <Route path="?" component={HEADER}></Route>
        </Switch>
        <div className="App-body">
          <Switch>
            {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path="?" component={Home}></Route>
            <Route exact path="?/home" component={Home}></Route>
            <Route exact path="?/about" component={About}></Route>
            <Route exact path="?/blog" component={Blog}></Route>
            <Route exact path="?/cg" component={CG_Home}></Route>
            <Route exact path="?/cg/home" component={CG_Home}></Route>
            <Route exact path="?/cg/about" component={CG_About}></Route>
            <Route exact path="?/cg/blog" component={CG_Blog}></Route>
            <Route exact path="?/cg/portfolio" component={CG_Portfolio}></Route>
            <Route exact path="?/cg/testimonials" component={CG_Testimonials}></Route>
            <Route exact path="?/gd" component={GD_Home}></Route>
            <Route exact path="?/gd/home" component={GD_Home}></Route>
            <Route exact path="?/gd/about" component={GD_About}></Route>
            <Route exact path="?/gd/blog" component={GD_Blog}></Route>
            <Route exact path="?/gd/portfolio" component={GD_Portfolio}></Route>
            <Route exact path="?/gd/testimonials" component={GD_Testimonials}></Route>
            <Route exact path="?/wd" component={WD_Home}></Route>
            <Route exact path="?/wd/home" component={WD_Home}></Route>
            <Route exact path="?/wd/about" component={WD_About}></Route>
            <Route exact path="?/wd/blog" component={WD_Blog}></Route>
            <Route exact path="?/wd/portfolio" component={WD_Portfolio}></Route>
            <Route exact path="?/wd/testimonials" component={WD_Testimonials}></Route>
          </Switch>
          <Switch>
            <Route path="/?/cg" component={CG_FOOTER}></Route>
            <Route path="/?/gd" component={GD_FOOTER}></Route>
            <Route path="/?/wd" component={WD_FOOTER}></Route>
            <Route path="/?" component={FOOTER}></Route>
          </Switch>
        </div>
        <Switch>
          <Route exact path="/" component={() => {<Redirect to="/?/" />}}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default Router;
