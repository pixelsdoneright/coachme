'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var CoachmeApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    CoachmeApp = require('components/CoachmeApp.js');
    component = React.createElement(CoachmeApp);
  });

  it('should create a new instance of CoachmeApp', function () {
    expect(component).toBeDefined();
  });
});
