import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';

/**
 * Generated class for the ApiCallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
console.log('ionViewDidLoad ApiCallPage: ', new Date());
@IonicPage()
@Component({
  selector: 'page-api-call',
  templateUrl: 'api-call.html',
})

export class ApiCallPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ApiCallPage: ', new Date());
  }
  movieList: any;
  endTime;
  startTime; 
  timeDiff;

  callAPI(){
    this.startTime = new Date();
    this.http.get('https://facebook.github.io/react-native/movies.json')
    .map(res => res.json())
    .subscribe(data => {
        this.endTime = new Date();
        this.timeDiff = (this.endTime - this.startTime)/1000; //in ms
        this.movieList = JSON.stringify(data);
    }, (err) => {
        console.log(err);
    });
  }

}
