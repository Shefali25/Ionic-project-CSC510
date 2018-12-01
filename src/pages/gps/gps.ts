import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation'

/**
 * Generated class for the GpsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
console.log('ionViewDidLoad GPSPage: ', new Date());
@IonicPage()
@Component({
  selector: 'page-gps',
  templateUrl: 'gps.html',
})
export class GpsPage {
  // this part was from a website i found (https://codesundar.com/ionic-geolocation/)
  lat: any;
  lng: any;
  coordAccuracy: any;
  altitude: any;
  altAccuracy: any;
  heading: any;
  speed: any;
  data: any;
  data2: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GPSPage: ', new Date());
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad GpsPage');
  // }

  // this part was from a website I found (https://codesundar.com/ionic-geolocation/)
  // automatically gets the data when you go to this page
  // ionViewDidLoad(){
  //   this.geolocation.getCurrentPosition().then( resp => {
  //   this.lat = resp.coords.latitude;
  //   this.lng = resp.coords.longitude;
  //   this.coordAccuracy = resp.coords.accuracy;
  //   this.altitude = resp.coords.altitude;
  //   this.altAccuracy = resp.coords.altitudeAccuracy;
  //   this.heading = resp.coords.heading;
  //   this.speed = resp.coords.speed;
  //   }).catch( err => console.log(err));
  // }



  // Following from documentation
  // gets device's current location
  getCurrentLocation(){

    // got this part from online
    // this adds options to get better accuracy
    // you can also add these individually
    // let options = {
    //   enableHighAccuracy: true,
    //   timeout: 5000,
    //   maximumAge: 0
    // };

    // from doc
    this.geolocation.getCurrentPosition({enableHighAccuracy:true}).then((resp) => {
      // this.lat = resp.coords.latitude;
      // this.lng = resp.coords.longitude;
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      this.coordAccuracy = resp.coords.accuracy;
      this.altitude = resp.coords.altitude;
      this.altAccuracy = resp.coords.altitudeAccuracy;
      this.heading = resp.coords.heading;
      this.speed = resp.coords.speed;
     }).catch((error) => {
       console.log('Error getting location', error.message);
     });
    
    // Following from the documentation
    // watchees the device's current location
   let watch = this.geolocation.watchPosition();
   watch.subscribe((data) => {
    // data can be a set of coordinates, or an error (if an error occurred).
    this.data = data.coords.latitude;
    this.data2 = data.coords.longitude;
  },(error)=>{console.log(error);});

  }
 

}
