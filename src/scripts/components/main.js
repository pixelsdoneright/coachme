'use strict';

var CoachmeApp = require('./CoachmeApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={CoachmeApp}>
    <Route name="/" handler={CoachmeApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
