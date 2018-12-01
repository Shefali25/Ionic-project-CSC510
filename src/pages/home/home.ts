import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

console.log('ionViewDidLoad CameraPage: ', new Date());
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public base64Image: string;
  constructor(public navCtrl: NavController, private camera: Camera) {
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage: ', new Date());
  }
  // openCamera(selection: any) {
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.FILE_URI,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   }
  // }
    
  //   this.camera.getPicture(options).then((imageData) => {
  //    // imageData is either a base64 encoded string or a file URI
  //    // If it's base64 (DATA_URL):
  //    let base64Image = 'data:image/jpeg;base64,' + imageData;
  //   }, (err) => {
  //    // Handle error
  //   });
  // }
  takePicture(){
    this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }
}
