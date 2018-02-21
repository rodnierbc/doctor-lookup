import {doctorQuery} from './../assets/js/doctor-lookup.js';
import {locationQuery} from './../assets/js/doctor-lookup.js';

$(document).ready(function () {
    let medicalIssue = "sore throat";
    let zipCode = 97223;

    locationQuery(zipCode)
      .then(function(response) {
        let body = JSON.parse(response);
        let latitude = body.results[0].geometry.location.lat;
        let longitude = body.results[0].geometry.location.lng;
        return doctorQuery(latitude, longitude, medicalIssue);
      })
		.then(function (response) {
      var doctorsFounds = [];
			let data = JSON.parse(response);
      let body = JSON.parse(response);
      for (var i = 0; i < body.data.length; i++) {
        let languages = "";
        let acceptsNewPatients = "";
        for (var j = 0; j < body.data[i].practices.length; j++) {
          acceptsNewPatients = body.data[i].practices[j].accepts_new_patients;
        }
          let firstName = body.data[i].profile.first_name;
          let lastName = body.data[i].profile.last_name;
          let gender = body.data[i].profile.gender;
          let imageUrl = body.data[i].profile.image_url;
          for (var k = 0; k < body.data[i].profile.languages.length; k++) {
            languages = languages + body.data[i].profile.languages[k].name + " ";

          }
          doctorsFounds.push({firstName:firstName,lastName:lastName,gender:gender,languages:languages,acceptsNewPatients:acceptsNewPatients });

      }

      for(i=0;i<doctorsFounds.length;i++){
          //alert(doctorsFounds[i].firstName + "  "  + doctorsFounds[i].acceptsNewPatients + " " + doctorsFounds[i].languages);
          $("#dataTable").append("<tr><td>1</td><td>2</td><td>3</td></tr>");
       }
      //alert(doctorsFounds.length);
		}, function (error) {
			$('.showErrors').text(`There was an error processing your request: ${error.message}`);
		});

});
