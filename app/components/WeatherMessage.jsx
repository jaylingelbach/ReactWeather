var React = require('react');

//instead of var {temp, location} = props, you can create those vars with deliniation instead of passing in props.
// old code was under var WeatherMessage
// var {temp, location} = props;
var WeatherMessage = ({temp, location}) => {
  // var {temp, location} = props;
  return (
    <div>
      <h3>It's {temp} in {location}</h3>
    </div>
  )
};

//Kind of like a return in a func. Whenever you require a file module.exports is what is returned.
module.exports = WeatherMessage;
