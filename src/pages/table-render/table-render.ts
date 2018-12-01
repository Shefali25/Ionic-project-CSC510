import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TableRenderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface Config {
	technologies: string;
}
console.log('ionViewDidLoad TableRenderPage', new Date());
@IonicPage()
@Component({
  selector: 'page-table-render',
  templateUrl: 'table-render.html',
})
export class TableRenderPage {

  public config : Config;
  public columns : any;
  public rows : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _HTTP: HttpClient) {
    this.columns = [
      { prop: 'name' },
      { name: 'Summary' },
      { name: 'Company' }
    ];
  }
  endTime;
  startTime; 
  timeDiff;
  ionViewDidLoad() {
    this.startTime = new Date();
    this._HTTP
      .get<Config>('../../assets/data/technologies.json')
      .subscribe((data) =>
      {
        this.endTime = new Date()
        this.timeDiff = (this.endTime - this.startTime)/1000; //in ms
        console.log('Time difference: ', this.timeDiff)
        this.rows = data.technologies;
      })
    console.log('ionViewDidLoad TableRenderPage', new Date());
  }

}
