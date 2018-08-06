import { BasketmapPage } from './../basketmap/basketmap';
import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { IftarmapPage } from '../iftarmap/iftarmap';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = IftarmapPage;
  tab5Root = BasketmapPage;

  constructor() {

  }
}
