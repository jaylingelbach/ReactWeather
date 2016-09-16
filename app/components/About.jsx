var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        This app is made with React.js, Foundation 6, Open Weather Map and Heroku.
      </p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the
            JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used
            Open Weather Map to search for weather data by city name.
        </li>
        <li>
          <a href="http://foundation.zurb.com/">Foundation</a> - Foundation was used as a CSS framework
        </li>
        <li>
          <a href="https://Heroku.com">Heroku</a> - I used Heroku to launch the app to the web.
        </li>
        <li>
          <a href="https://github.com/jaylingelbach/ReactWeather">GitHub Repository</a> - Check the code out on my GitHub repository
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
