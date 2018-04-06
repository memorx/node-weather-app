const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
        a: {
           demand: true,
           alias: 'address',
           describe: 'Address to fetch weather for',
           string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURI(argv.address);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
}, (error, response, body)=> {
    console.log(`Address: ${body.results[0].formatted_address}, Lat:${body.results[0].geometry.location.lat} Lng:${body.results[0].geometry.location.lng}`);
});