import { HomePage } from './../home/home';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { locationsInfo } from './../../module/locationInof';
import { GiftServiceProvider } from './../../providers/gift-service/gift-service';

/**
 * Generated class for the GiftplacemodfyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-giftplacemodfy',
  templateUrl: 'giftplacemodfy.html',
})
export class GiftplacemodfyPage {

  dbGiftPlace: AngularFireObject<any[]>;


  location: locationsInfo =
    {
      key: '',
      latitude: '',
      longitude: '',
      info: ''
    }
  giftLocation = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController, public giftService: GiftServiceProvider, public db: AngularFireDatabase) {
    this.dbGiftPlace = this.db.object('giftmap');
    this.dbGiftPlace.snapshotChanges().subscribe(action => {
      if (action.payload.val() == null || action.payload.val() == undefined) {
        console.log('no data');
      } else {

        this.giftLocation.push(action.payload.val())
        this.giftLocation = Object.entries(this.giftLocation[0])
        console.log(this.giftLocation)
      }
    })
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad GiftplacemodfyPage');
  }

  updateLocation(location: locationsInfo) {
    this.giftService.updateGiftPlace(location).then(() => {
      console.log('Location update')
      this.navCtrl.setRoot(HomePage)
    })
  }

  removeLocation(key) {
    this.giftService.removeGiftPlace(key).then(() => {
      this.navCtrl.setRoot(HomePage)
    })
  }

  showPrompt(item) {
    var key = item[0];
    var info = item[1]['info']
    var latitude = item[1]['latitude'];
    var longitiude = item[1]['longitude'];
    const prompt = this.alert.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'Info',
          placeholder: 'Description for Location',
          value: info
        },
        {
          name: 'Latitude',
          placeholder: 'Latitude',
          value: latitude
        },
        {
          name: 'Longitiude',
          placeholder: 'Longitiude',
          value: longitiude
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.location.key = key;
            this.location.info = data.Info;
            this.location.latitude = data.Latitude;
            this.location.longitude = data.Longitiude
            console.log(this.location)
            this.updateLocation(this.location)
          }
        }
      ]
    });
    prompt.present();
  }
}
