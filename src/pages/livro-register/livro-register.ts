import { Component } from '@angular/core';
import {Livro} from "../../data/livroInterface";
import {LivroService} from "../../services/livros";
import {ViewController} from 'ionic-angular';
import {Camera, CameraOptions} from "@ionic-native/camera";
import { DatePicker } from '@ionic-native/date-picker';
import {PhotoLibrary} from "@ionic-native/photo-library";


@Component({
  selector: 'page-livro-register',
  templateUrl: 'livro-register.html',
})
export class LivroRegisterPage {

  constructor(
    private datePicker: DatePicker,
    private camera: Camera,
    private viewCtrl: ViewController,
    private livroService: LivroService,
    private photoLibrary: PhotoLibrary){}

  livro: Livro;
  capaAtual: string = "https://cor-cdn-static.bibliocommons.com/assets/default_covers/icon-book-93409e4decdf10c55296c91a97ac2653.png";


  ngOnInit(){
  }

  registerLivro(livro) {
    console.log(livro);
    if(this.capaAtual == ""){
      this.capaAtual= 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwcIBwoICAoPCggKDxINCgoNEhQQEBIQEBQRDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/2wBDAQsMDBUTFSIYGCIUDg4OFBQODg4OFBEMDAwMDBERDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAIAAxMDAREAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAAEEAwUCB//EAC4QAQABAQcDBAMAAgIDAAAAAAABEQIDBBQzUaFxgcEhMbHREjJBE1IiYUKCkv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD9CABQAAUAAFAABQAAAAUAAAAAAAAAAAFAAoBQCgFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAUAoBQCgAAIAAAAAAAAAACAAAAAgAAAIAACAAgAAL6SBQAFAABQAAUAAFAAAAABQAAAAAAAAAAAAAKAUAoBQCgFAKAUAoCgAAAAAAAAAAAAAAAgFAKAUAoBQCgFAKAUAAAAAAAAAAAAAoCAAAAAAgAAAIAACAAgAFAPQAFAoACgAAoAAKAAACgAAAAUABQAAAAAAAAAAAAAAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAAAAAAAAAAAAAAAABKAAAAAAAgAAAIAACAAAgFAQAFABQAKAoAAKAACgAAAoAAAAFAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAoAAAAACAAAAAgAAIAACUABAAAAUAFABQAAAUAAFAAAABQAAAKAAAAAAoAAAAAAAAAAAFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAAAAAAAAAAABAAAAAKAAAAAAgAAAIAAACAAAAgIACAAoAKACgAoAAAKAAACgAAAAoAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAEAAABAAKAgAIACAAAAoAKACgAAoAAKAAACgAAAAAAoFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAgAAAAAIAAAACAAAgAIAACAAgKACgAoAKAACgAAAoAAAKAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABKAAAAAAAAAgAAAAIBQAAEABAAAQAEAABQAUAFABQAAUAAAFAAAAABQAAAAAAAAKAUAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQCgFAAAAAAAAAAAQAAAAEAAABAAAQAAEABAAQFABQAUAFAABQAAUAAAFAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAEAAAABAAAQAAEABAAQAAFABQAUAFAABQAAAUAAAAFAAAAAoAAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAFAAAAAAQAAAAEAABAAAQAAEABAAQFABQAUAFAABQAAUAAAFAAAAAABQAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAABAAAAAAAAQAAAEAABAAAQAEABAAAUAFABQAUAAFAABQAAAAAUAAAAAAAAAAAAFAAoBQCgFAKAUAAAAAAAAAAAAAAAAAAAoBQCgFAKAUAoAACAAAAAAAAAAAAgAAAAAIAACAAAgAAIACAgAAKCgAoAKAACgAAoAAAKAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUBAAAAAAAQAAAAEAABAAQAEABAAQFABQUAFAABQAUAAAFAAAABQAAAAAAAAAAKAUBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQCgAAAAAAAAAAAIAAAACAAAAgAAIACAAgAIAACgAoAKACgAoAAAKAAACgAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAACAAAAgAAIAACAAgAIACAAoKACgAoAKAAACgAAoAAAAKAAAAAAAAAABQAAAAAAAAFAAAAAAAAAAAAAAAAAABAAAAAAAKAUAAAAAAAAAABAAAAAQAAAEAABAAQAEABAAAAAUFABQAUAAFAAABQAAAUAAAAAAAFAAABxxP6R1BmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB2w37z0BpAAABAAAAAAAAAQAAAEAABAAAQA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AAAAAAAAAAAAAAAgAAAAAAAAAFQAAAAAQAAAAEAABAAAQAAEABAAQAAFABQAUAAFAABQAAAUAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAQAAAAEAABAAAQAEABAAQFABQAUAFAABQAAAUAAAAAFAAAAAAAAAqBUCoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFQKgVAAAAAAAAAABAAAAAQAAAEAABAAAQAEABAAAUAFABQAAUAAAFAAABQAAAAAAAKgAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJUAAAAAAAAEAAAABAKgAAgAIAACAAgAICgAoAKAACgAAoAAAKAAAAAACgVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqACAAAAAAgAAAAIAACAAgAAIACAAAoAKACgAAAoAAAKAAAACgAVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAQAAAEAABAAQAEAABAUAFABQKgAAoAAKAAAACgAAAVAAAAABQAAAAAAAAAAAKgVAqBUCoFQKgVAqBUCoFQKgVAqBUCoFQKgVAqAAAAAAAAAAACAAAAAVAAAAABAAAAQAAAEAAqACAgAIAAACgAtQAAAUAAFAAABQAAAAKgAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIABUAAAAAEAAAABAAAQAAEqACAAAgLAHQAFAABQAAUAAAFAAAAAqACgAAAAAAAAAAAAAAVAqBUCoFQKgVAqBUCoFQKgVAqBUCoFQKgVAqBUCoFQKgVAqAAAAAAAAAAAAAAAACVAAAAAABAAAAQAAEAABAAQAD2AqACgAAoAAKAACgAAAAAoAAAAAAAAAAAAAFQKgVAqBUCoFQKgVBQAAAAAAAAAAAAAAAQCoFQKgVAqBUCoFQKgAAAAAAAAAAAAVBAAAAAAQAAAEAABAAQACoFIBAAUAAFAABQAAUAAAAFAAAAAAAAAAABQAKgVAqBUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACoFQKgVAqAACAAAAAAAAAAAgAAAAIAAACAAAgAIAAD/9k=';
    }


    this.livroService.addLivro({id: this.livroService.getProximoId(), capa: this.capaAtual, titulo: livro.titulo, autor: livro.autor, dtLancamento: livro.dtLancamento, pdf: livro.pdf});

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
    }

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.mudarImagemCapa(base64Image);

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
    }

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.mudarImagemCapa(base64Image);

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

  }
}
