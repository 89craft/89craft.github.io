import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// page components
import App from './components/app/app';

/**
 * This is the router configuration component.
 * @note only pass page components to this router.
 */
const ProjectRouter = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  );
};
export default ProjectRouter;
