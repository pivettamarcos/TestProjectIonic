import { Component } from '@angular/core';
import {Livro} from "../../data/livroInterface";
import {LivroServiceFirebase} from "../../services/livros";
import {ViewController} from 'ionic-angular';
import {Camera, CameraOptions} from "@ionic-native/camera";
import { DatePicker } from '@ionic-native/date-picker';
import {FileChooser} from "@ionic-native/file-chooser";
import {FilePath} from "@ionic-native/file-path";
import { Base64 } from '@ionic-native/base64';



@Component({
  selector: 'page-livro-register',
  templateUrl: 'livro-register.html',
})
export class LivroRegisterPage {

  constructor(
    private datePicker: DatePicker,
    private camera: Camera,
    private viewCtrl: ViewController,
    private livroService: LivroServiceFirebase,
    private fileChooser: FileChooser,
    private filePath: FilePath,
    private base64: Base64){}

  livro: Livro;
  capaAtual: string = "";
  CAPA_DEFAULT: string = "https://cor-cdn-static.bibliocommons.com/assets/default_covers/icon-book-93409e4decdf10c55296c91a97ac2653.png";
  pdfAtual: string = "";
  btnPDFcolor: string;
  capaTemp: Blob;
  pdfTemp: Blob;


  ngOnInit(){
    this.btnPDFcolor = "danger";
  }

  registerLivro(livro) {
    console.log(livro);

    this.livroService.addLivro({key: '', capa: this.capaAtual, titulo: livro.titulo, autor: livro.autor, dtLancamento: livro.dtLancamento, pdf: ''}, this.capaTemp, this.pdfTemp);

    console.log(this.livroService.getAllLivros());
    this.viewCtrl.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  showDatePicker(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  onMudarCapaCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      let selectedPhoto  = this.dataURItoBlob(base64Image,false);
      this.capaAtual = base64Image;
      this.capaTemp = selectedPhoto;

    }, (err) => {
      // Handle error
      console.log("erro ao capturar imagem");
      console.log(err);
    });
  }


  onMudarCapaGaleria() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
      // encodingType: this.camera.EncodingType.JPEG,
      // mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      let selectedPhoto  = this.dataURItoBlob(base64Image,false);
      this.capaAtual = base64Image;
      this.capaTemp = selectedPhoto;

    }, (err) => {
      // Handle error
      console.log("erro ao capturar imagem");
      console.log(err);
    });
  }

  mudarImagemCapa(img64: string){
    this.capaAtual=img64;
  }

  onAdicionarPDF() {
    this.fileChooser.open()
      .then(uri => {
        console.log('Relative Path: '+ uri);
        this.filePath.resolveNativePath(uri).then(resolvedFilePath =>{
          this.base64.encodeFile(resolvedFilePath).then((base64File: string) => {
            this.pdfTemp = this.dataURItoBlob(base64File, true);
            this.pdfAtual = 'data:application/pdf;base64,'+base64File;
          }, (err) => {
            console.log(err);
          });
        });
      })
      .catch(e => console.log(e));
  }

  validaCapa(capa: string) {
    if(!capa)
      return this.CAPA_DEFAULT;
    else
      return capa;
  }

  dataURItoBlob(dataURI, pdf) {
    // code adapted from: http://stackoverflow.com/questions/33486352/cant-upload-image-to-aws-s3-from-ionic-camera
    let binary = atob(dataURI.split(',')[1]);
    let array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    if(!pdf)
      return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
    else
      return new Blob([new Uint8Array(array)], {type: 'application/pdf'});
  };
}
