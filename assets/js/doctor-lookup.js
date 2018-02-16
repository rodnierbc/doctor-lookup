import apiKey from './../../.env';

export class DoctorLookup {

  constructor(state, city, medicalIssue, doctorName, gender) {
    this.state = state;
    this.city = city;
    this.medicalIssue = medicalIssue;
    this.doctorName = doctorName;
    this.gender = gender;
  }

  getDoctors() {
    let that = this;
      let doctorsCall = new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=${that.state}&user_key=61ec296be9379d897b9fc99941d2fe6d`;
        console.log(url);
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(Error(request.statusText));
          }
        };
        request.open("GET", url, true);
        request.send();
      });

      doctorsCall.then(function(response) {
        let body = JSON.parse(response);
        for (var i = 0; i < body.data.length; i++) {
           alert(i);
          }
      });
  }



  get doctorName() {
        return this._doctorName.toUpperCase();
  }
  set doctorName(newDoctorName) {
      this._doctorName = newDoctorName;
  }
  get medicalIssue() {
        return this._medicalIssue.toUpperCase();
  }
  set medicalIssue(newMedicalIssue) {
      this._medicalIssue = newMedicalIssue;
  }

}
