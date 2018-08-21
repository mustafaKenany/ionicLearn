import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { locationsInfo } from './../../module/locationInof';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { IftarServiceProvider } from '../../providers/iftar-service/iftar-service';
import { GiftServiceProvider } from '../../providers/gift-service/gift-service';
/**
 * Generated class for the IftarplacemodifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-iftarplacemodify',
  templateUrl: 'iftarplacemodify.html',
})
export class IftarplacemodifyPage {

  dbIftarMap: AngularFireObject<any[]>;


  location: locationsInfo =
    {
      key: '',
      latitude: '',
      longitude: '',
      info: ''
    }
  iftarLocation = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController, public iftarService: IftarServiceProvider, public db: AngularFireDatabase) {
    this.dbIftarMap = this.db.object('iftarmap');
    this.dbIftarMap.snapshotChanges().subscribe(action => {
      if (action.payload.val() == null || action.payload.val() == undefined) {
        console.log('no data');
      } else {

        this.iftarLocation.push(action.payload.val())
        this.iftarLocation = Object.entries(this.iftarLocation[0])
        console.log(this.iftarLocation)
      }
    })
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad IftarplacemodifyPage');
  }

  updateLocation(location: locationsInfo) {
    this.iftarService.updateIftarPlace(location).then(() => {
      console.log('Location update')
      this.navCtrl.setRoot(HomePage)
    })
  }

  removeLocation(key) {
    this.iftarService.removeIftarPlace(key).then(() => {
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
