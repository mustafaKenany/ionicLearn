import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { locationsInfo } from './../../module/locationInof';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the IftarServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IftarServiceProvider {

  private gpsListRef = this.db.list<locationsInfo>('iftarmap');

  constructor(public db: AngularFireDatabase) {
    // console.log('Hello IftarServiceProvider Provider');
  }

  getLocationList() {
    return this.gpsListRef;
  }
  addIftarPlace(location: locationsInfo) {
    return this.gpsListRef.push(location);
  }
  updateIftarPlace(location: locationsInfo) {
    return this.gpsListRef.update(location.key, location);
  }
  removeIftarPlace(key) {
    return this.gpsListRef.remove(key);
  }

}
