var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      //nested route inside route component. About and examples. IF USING IndexRoute! Then use IndexLink. Prevents multiple pages from being labeled active.
      <Route path="examples" component={Examples}/>
      <Route path="about" component={About}/>
      <IndexRoute component={Weather}/>

    </Route>
  </Router>,
  document.getElementById('app')
);
