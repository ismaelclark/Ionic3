import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Operator } from '../../pages/login/login';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  public operator: Operator;

  tabDuty = HomePage;
  tabJobs = AboutPage;
  tabCurrent = ContactPage;

  constructor(public alertCtrl: AlertController, public storage: Storage) {
    this.storage.get("operator").then((val) => {
      this.operator = JSON.parse(val);
    });
  }
}
