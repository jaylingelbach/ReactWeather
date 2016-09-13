var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=136baf87e387d7c4314379628037a77a&units=imperial';

module.exports = {
  getTemp: function(location) {
    //location must be encoded so the browser doesn't change it to something funky.
    //`${}` the back tick lets us inject variables into the string the ${} is for jsx --QUERY STRINGS
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res){
      throw new Error(res.data.message);
    })
  }
}
