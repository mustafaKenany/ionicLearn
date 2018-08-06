import { locationsInfo } from './../../module/locationInof';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the GiftServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GiftServiceProvider {

  private gpsListRef = this.db.list<locationsInfo>('giftmap');

  constructor(public db: AngularFireDatabase) {
    // console.log('Hello GiftServiceProvider Provider');
  }

  getLocationList() {
    return this.gpsListRef;
  }
  addGiftPlace(location: locationsInfo) {
    return this.gpsListRef.push(location);
  }
  updateGiftPlace(location: locationsInfo) {
    return this.gpsListRef.update(location.key, location);
  }
  removeGiftPlace(key) {
    return this.gpsListRef.remove(key);
  }


}
