import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';

import {HomePage} from "../home/home"


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }

  /*loginWithGoogle(){
    this.googlePlus.login(
        {
        'webClientId': 'unasus.ufcspa.testProjectIonic', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
        }).then(res => console.log(res))
      .catch(err => console.error(err));
  }*/
/*
  onLogin(){
      this.navCtrl.push(HomePage)
  }

  loginRegular(f:ngForm){

      console.log(f.form.controls.password.valid);

      /*if(value.email == "admin" && value.password=="admin"){
          console.log(value);
          this.onLogin();
      }
  }*/
}
