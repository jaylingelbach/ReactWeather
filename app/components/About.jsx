var React = require('react');
var {Link} = require('react-router');
// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

var About = (props) => {
    return (
      <div>
        <h1 className="text-center">About</h1>
        <p>This app is made with React.js, Foundation 6, Open Weather Map and Heroku. It showcases responive design, my ability to work with APIs
         along with knowledge of React and launching apps to the web via Heroku</p>
        <ul>
          <li>
            <Link to='https://facebook.github.io/react/index.html'>React.js</Link>
          </li>
          <li>
            <Link to='http://foundation.zurb.com/'>Foundation</Link>
          </li>
          <li>
            <Link to='http://openweathermap.org'>Open Weather Map</Link>
          </li>
          <Li>
            <Link to="https://Heroku.com">Heroku</Link>
          </Li>
          <li>
            <Link to='https://github.com/jaylingelbach/ReactWeather'>GitHub Repository</Link>
          </li>
        </ul>
      </div>
    )
};
module.exports = About;
