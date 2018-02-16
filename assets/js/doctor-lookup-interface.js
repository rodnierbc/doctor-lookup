import {DoctorLookup} from './../assets/js/doctor-lookup.js';

$(document).ready(function(){
  let doctorLookup = new DoctorLookup("OR","","","");
  doctorLookup.getDoctors();
});
