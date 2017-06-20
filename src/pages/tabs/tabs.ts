import { Component } from '@angular/core';

import { RecordsPage } from '../records/records';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RecordsPage;
  tab3Root = SettingsPage;
  tab4Root = '';
  constructor() {

  }
}
