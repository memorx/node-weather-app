const request = require('request');

var getWeather = (lat, long, callback) => {

    request({
        url: `https://api.darksky.net/forecast/31f66f4fd5e3f3bd8b1c279de0ca1b49/${lat},${long}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to retrieve weather');
        }
    });
}

module.exports.getWeather = getWeather;
