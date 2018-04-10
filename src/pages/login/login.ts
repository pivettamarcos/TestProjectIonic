import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(private googlePlus: GooglePlus) {

  }

  loginWithGoogle(){
    this.googlePlus.login(
        {
        'webClientId': 'unasus.ufcspa.testProjectIonic', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
        }).then(res => console.log(res))
      .catch(err => console.error(err));
  }
}
