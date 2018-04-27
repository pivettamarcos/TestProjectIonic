import { Component } from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";
import {NgForm} from "@angular/forms";
import {LivroServiceFirebase} from "../../services/livros";
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileChooser } from '@ionic-native/file-chooser';
import { DomSanitizer } from '@angular/platform-browser';
import {File} from "@ionic-native/file";
import {FilePath} from "@ionic-native/file-path";
import { Base64 } from '@ionic-native/base64';

import { AngularFireStorage } from 'angularfire2/storage';

import * as firebase from 'firebase';



@Component({
  selector: 'page-livro-edit',
  templateUrl: 'livro-edit.html',
})
export class LivroEditPage {

  livro: any;
  outlineIconeLivro: boolean;
  CAPA_DEFAULT: string = "https://cor-cdn-static.bibliocommons.com/assets/default_covers/icon-book-93409e4decdf10c55296c91a97ac2653.png";

  constructor(
    private domSanitizationService: DomSanitizer ,
    private navParams: NavParams,
    private livroService: LivroServiceFirebase,
    private camera: Camera,
    private viewCtrl: ViewController,
    public file: File,
    public fileChooser: FileChooser,
    public filePath: FilePath,
    private storage: AngularFireStorage,
    private base64: Base64

  ) {}

  escolherPDF(){
    this.fileChooser.open()
      .then(uri => {
        console.log('Relative Path: '+ uri);
        this.filePath.resolveNativePath(uri).then(resolvedFilePath =>{
          this.base64.encodeFile(resolvedFilePath).then((base64File: string) => {
            let selectedPDF = this.dataURItoBlob(base64File, true);
            this.uploadToDB(selectedPDF, true);
            this.outlineIconeLivro = true;
          }, (err) => {
            console.log(err);
          });
        });
      })
      .catch(e => console.log(e));
  }


  ionViewDidLoad(){
    this.livro = this.navParams.get('livro');

    if(!this.livro.pdf)
      this.outlineIconeLivro = true;
    else
      this.outlineIconeLivro = false;

  }
  ngOnInit(){
    this.livro = this.navParams.get('livro');
  }

  salvarLivro(form: NgForm) {
    let novoLivro = this.livro;
    novoLivro.titulo = form.value.titulo;
    novoLivro.autor = form.value.autor;
    novoLivro.dtLancamento = form.value.dtLancamento;
    this.livroService.atualizarLivro(novoLivro);
    this.viewCtrl.dismiss();
  }

  onMudarCapa() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      let selectedPhoto  = this.dataURItoBlob(base64Image, false);
      this.uploadToDB(selectedPhoto, false);
      this.mudarImagemCapa(base64Image);


    }, (err) => {
      // Handle error
      console.log("erro ao capturar imagen");
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
      let selectedPhoto  = this.dataURItoBlob(base64Image, false);
      this.uploadToDB(selectedPhoto, false);
      this.mudarImagemCapa(base64Image);

    }, (err) => {
      // Handle error
      console.log("erro ao capturar imagem");
      console.log(err);
    });
  }

  mudarImagemCapa(img64: string){
    this.livro.capa=img64;
  }

  sanitizeBase64(capa: string) {
    this.domSanitizationService.bypassSecurityTrustUrl(capa);
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

  uploadToDB(selectedFile, pdf) {
    if (selectedFile) {
      let self = this;

      if(!pdf)
        var uploadTask = firebase.storage().ref().child('/'+this.livro.key.toString()+'/image').put(selectedFile);
      else
        var uploadTask = firebase.storage().ref().child('/'+this.livro.key.toString()+'/pdf').put(selectedFile);


      uploadTask.then(
        function(snapshot) {
          if(!pdf)
            self.livroService.atualizarAtributo('capa', self.livro.key, snapshot.downloadURL)
          else
            self.livroService.atualizarAtributo('pdf',self.livro.key, snapshot.downloadURL)
      }, function() {
          console.log("erro")
      });
    }
  }

}
