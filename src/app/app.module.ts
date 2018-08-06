import { GiftServiceProvider } from './../providers/gift-service/gift-service';
import { IftarplacePage } from './../pages/iftarplace/iftarplace';
import { GiftplacemodfyPage } from './../pages/giftplacemodfy/giftplacemodfy';
import { GiftplacePage } from './../pages/giftplace/giftplace';
import { IftarplacemodifyPage } from './../pages/iftarplacemodify/iftarplacemodify';
import { BasketmapPage } from './../pages/basketmap/basketmap';
import { IftarmapPage } from './../pages/iftarmap/iftarmap';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IftarServiceProvider } from '../providers/iftar-service/iftar-service';

export const firebaseConfig = {
  apiKey: "AIzaSyCmmoR-ZJQ2VARMkBhyuSsrr7PtnkzFiiM",
  authDomain: "ioniclearn-189cc.firebaseapp.com",
  databaseURL: "https://ioniclearn-189cc.firebaseio.com",
  projectId: "ioniclearn-189cc",
  storageBucket: "ioniclearn-189cc.appspot.com",
  messagingSenderId: "608223287338"
};
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IftarmapPage,
    BasketmapPage,
    GiftplacePage,
    GiftplacemodfyPage,
    IftarplacemodifyPage,
    IftarplacePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IftarmapPage,
    BasketmapPage,
    GiftplacePage,
    GiftplacemodfyPage,
    IftarplacemodifyPage,
    IftarplacePage
  ],
  providers: [
    GiftServiceProvider,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    IftarServiceProvider
  ]
})
export class AppModule { }
