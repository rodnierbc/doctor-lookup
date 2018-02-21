const apiKey = require('./../../.env').apiKey;
const apiKeyMap = require('./../../.env').apiKeyMap;

export let doctorQuery = function (latitude, longitude, medicalIssue, name) {
	return new Promise(function (resolve, reject) {
		let request = new XMLHttpRequest();
		let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${medicalIssue}&name=${name}&location=${latitude}%2C${longitude}%2C100&user_location=${latitude}%2C${longitude}&skip=0&limit=10&user_key=${apiKey}`;
		request.onload = function () {
			if (this.status === 200) {
				resolve(request.response);
			} else {

				reject(Error(request.statusText));
			}
		}
		request.open("GET", url, true);
		request.send();
	});
};
export let locationQuery = function (zipCode) {
	return new Promise(function (resolve, reject) {
		let request = new XMLHttpRequest();
		let url = `https://maps.googleapis.com/maps/api/geocode/json?&address=${zipCode}&key=${apiKeyMap}`;
		request.onload = function () {
			if (this.status === 200) {
				resolve(request.response);
			} else {
				reject(Error(request.statusText));
			}
		}
		request.open("GET", url, true);
		request.send();
	});
};
