import React from 'react';
import { useHistory, Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
// Page Components
import HEADER from './comps/header.jsx';
import CG_HEADER from './comps/cg/cg-header.jsx';
import GD_HEADER from './comps/gd/gd-header.jsx';
import WD_HEADER from './comps/wd/wd-header.jsx';
import FOOTER from './comps/footer.jsx';
import CG_FOOTER from './comps/cg/cg-footer.jsx';
import GD_FOOTER from './comps/gd/gd-footer.jsx';
import WD_FOOTER from './comps/wd/wd-footer.jsx';
import Home from './comps/home.jsx';
import About from './comps/about.jsx';
import Blog from './comps/home.jsx';
import CG_Home from './comps/cg/cg-home.jsx';
import CG_About from './comps/cg/cg-about.jsx';
import CG_Blog from './comps/cg/cg-blog.jsx';
import CG_Portfolio from './comps/cg/cg-portfolio.jsx';
import CG_Testimonials from './comps/cg/cg-testimonials';
import GD_Home from './comps/gd/gd-home.jsx';
import GD_About from './comps/gd/gd-about.jsx';
import GD_Blog from './comps/gd/gd-blog.jsx';
import GD_Portfolio from './comps/gd/gd-portfolio.jsx';
import GD_Testimonials from './comps/gd/gd-testimonials';
import WD_Home from './comps/wd/wd-home.jsx';
import WD_About from './comps/wd/wd-about.jsx';
import WD_Blog from './comps/wd/wd-blog.jsx';
import WD_Portfolio from './comps/wd/wd-portfolio.jsx';
import WD_Testimonials from './comps/wd/wd-testimonials';

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
          <Route path="/cg" component={CG_HEADER}></Route>
          <Route path="/gd" component={GD_HEADER}></Route>
          <Route path="/wd" component={WD_HEADER}></Route>
          <Route component={HEADER}></Route>
        </Switch>
        <div className="App-body">
          <Switch>
            {/* The Switch decides which component to show based on the current URL.*/}
            <Route path="/cg/about" component={CG_About}></Route>
            <Route path="/cg/blog" component={CG_Blog}></Route>
            <Route path="/cg/portfolio" component={CG_Portfolio}></Route>
            <Route path="/cg/testimonials" component={CG_Testimonials}></Route>
            <Route path="/cg/home" component={CG_Home}></Route>
            <Route path="/cg" component={CG_Home}></Route>
            <Route path="/gd/about" component={GD_About}></Route>
            <Route path="/gd/blog" component={GD_Blog}></Route>
            <Route path="/gd/portfolio" component={GD_Portfolio}></Route>
            <Route path="/gd/testimonials" component={GD_Testimonials}></Route>
            <Route path="/gd/home" component={GD_Home}></Route>
            <Route path="/gd" component={GD_Home}></Route>
            <Route path="/wd/about" component={WD_About}></Route>
            <Route path="/wd/blog" component={WD_Blog}></Route>
            <Route path="/wd/portfolio" component={WD_Portfolio}></Route>
            <Route path="/wd/testimonials" component={WD_Testimonials}></Route>
            <Route path="/wd/home" component={WD_Home}></Route>
            <Route path="/wd" component={WD_Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/blog" component={Blog}></Route>
            <Route path="/home" component={Home}></Route>
            <Route component={Home}></Route>
          </Switch>
          <Switch>
            <Route path="/cg" component={CG_FOOTER}></Route>
            <Route path="/gd" component={GD_FOOTER}></Route>
            <Route path="/wd" component={WD_FOOTER}></Route>
            <Route component={FOOTER}></Route>
          </Switch>
        </div>
        {/*<Switch>
          <Route 
            render={({ location }) => '/?'.includes(location.pathname)
              ? <Redirect to="/?/" />
              : null
            }
          />
          </Switch>*/}
      </BrowserRouter>
    </>
  );
};
export default Router;
