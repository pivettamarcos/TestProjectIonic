import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';

import {HomePage} from "../home/home"
import {ShopListPage} from "../shopList/shopList"


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

  onLogin(){
      this.navCtrl.push(ShopListPage)
  }

  loginRegular(){
    this.onLogin();
    /*  if(value.email == "admin" && value.password=="admin"){
          console.log(value);
          this.onLogin();
      }*/
  }
}
