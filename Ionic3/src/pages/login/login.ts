import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginService } from '../../providers/loginService/loginService'
import { TabsPage } from '../../pages/tabs/tabs';
import { AlertController } from 'ionic-angular';
/*
  Generated class for the loginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

export class Operator {
  Phone: string;
  Companies: any;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginService]
})


export class LoginPage {
  public operator: Operator;

  credentials = {};

  public loginForm = new FormGroup({
    phone: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public loginService: LoginService,
    public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  getOperator(res) {
    if (res == null) {
      let alert = this.alertCtrl.create({
        title: 'Login error',
        subTitle: 'Invalid Phone Number and/or Password!',
        buttons: ['OK']
      });
      alert.present();
      return;
    }
    this.operator = new Operator(res);
    if (this.operator === undefined) {
      let alert = this.alertCtrl.create({
        title: 'Login error',
        subTitle: 'Invalid Phone Number and/or Password!',
        buttons: ['OK']
      });
      alert.present();
      return;
    }
    this.storage.set("operator", JSON.stringify(this.operator));
    this.navCtrl.setRoot(TabsPage);
  }
  
  login() {
    let phone = this.loginForm.value.phone;
    let pass = this.loginForm.value.password;
    if (phone === null || pass === null || phone === "" || pass === "") {
      let alert = this.alertCtrl.create({
        title: 'Login error',
        subTitle: 'Invalid Phone Number and/or Password!',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    this.loginService.login(phone, pass).then(res => this.getOperator(res));
  }
}
