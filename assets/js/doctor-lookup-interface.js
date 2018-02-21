import {doctorQuery} from './../assets/js/doctor-lookup.js';
import {locationQuery} from './../assets/js/doctor-lookup.js';

$(document).ready(function () {
  $("#doctorsFounds").hide();
  $("#doctorsNotFoundInfo").hide();
  $("#findDoctorForm").submit(function (event) {
		event.preventDefault();
    $("#dataTable").empty();
    let medicalIssue = $("#medicalIssue").val();
    let zipCode = $("#zipCode").val();
    let name = $("#doctorName").val();
    locationQuery(zipCode)
      .then(function(response) {
        let body = JSON.parse(response);
        let latitude = body.results[0].geometry.location.lat;
        let longitude = body.results[0].geometry.location.lng;
        return doctorQuery(latitude, longitude, medicalIssue, name);
      })
		.then(function (response) {
      var doctorsFounds = [];
			let data = JSON.parse(response);
      let body = JSON.parse(response);
      for (var i = 0; i < body.data.length; i++) {
        let languages = "";
        let acceptsNewPatients = "";
        let address = "";
        let phone = "";
        let website = "";
        for (var j = 0; j < body.data[i].practices.length; j++) {
          website = body.data[i].practices[j].website;
          if(body.data[i].practices[j].accepts_new_patients){
            acceptsNewPatients= "Yes";
          }
          else {
            acceptsNewPatients= "No";
          }
          address = body.data[i].practices[j].visit_address.street+", "+body.data[i].practices[j].visit_address.city+", "+body.data[i].practices[j].visit_address.state+", "+body.data[i].practices[j].visit_address.zip;
          phone = body.data[i].practices[j].phones[0].number;
        }
          let firstName = body.data[i].profile.first_name;
          let lastName = body.data[i].profile.last_name;
          let gender = body.data[i].profile.gender;
          let imageUrl = body.data[i].profile.image_url;
          for (var k = 0; k < body.data[i].profile.languages.length; k++) {
            languages = languages + body.data[i].profile.languages[k].name + " ";
          }
          doctorsFounds.push({firstName:firstName,lastName:lastName,gender:gender,languages:languages,acceptsNewPatients:acceptsNewPatients,phone:phone,address:address,imageUrl:imageUrl,website:website });
      }
      if(doctorsFounds.length>0){
        for(i=0;i<doctorsFounds.length;i++){
            $("#dataTable").append("<tr><td><img src="+doctorsFounds[i].imageUrl+"/></td><td>"+doctorsFounds[i].firstName+"</td><td>"+doctorsFounds[i].lastName+"</td><td>"+doctorsFounds[i].address+"</td><td>"+doctorsFounds[i].phone+"</td><td>"+doctorsFounds[i].acceptsNewPatients+"</td><td>"+doctorsFounds[i].gender+"</td><td>"+doctorsFounds[i].languages+"</td></tr>");
         }
         $("#doctorsNotFoundInfo").hide();
         $("#doctorsFounds").show();
      }else {
        $("#doctorsNotFoundInfo").show();
      }
		}, function (error) {
      $("#doctorsFounds").hide();
      $("#doctorsNotFoundInfo").show();
			$('.showErrors').text(`There was an error processing your request: ${error.message}`);
		});
  });
});
