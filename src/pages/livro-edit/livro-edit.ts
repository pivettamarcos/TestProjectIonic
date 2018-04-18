import { Component } from '@angular/core';
import {Livro} from "../../data/livroInterface";
import {NavParams, ViewController} from "ionic-angular";
import {NgForm} from "@angular/forms";
import {LivroService} from "../../services/livros";
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileChooser } from '@ionic-native/file-chooser';
import { DomSanitizer } from '@angular/platform-browser';





@Component({
  selector: 'page-livro-edit',
  templateUrl: 'livro-edit.html',
})
export class LivroEditPage {

  livro: Livro;

  constructor(
    private _DomSanitizationService: DomSanitizer ,
    private navParams: NavParams,
    private livroService: LivroService,
    private camera: Camera,
    private fileChooser: FileChooser,
    private viewCtrl: ViewController

  ) {}

  escolherPDF(){
    this.fileChooser.open()
      .then(uri => this.livro.pdf = uri)
      .catch(e => console.log(e));
  }


  ionViewDidLoad(){
    this.livro = this.navParams.get('livro');
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
    }

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.mudarImagemCapa(base64Image);


    }, (err) => {
      // Handle error
      console.log("erro ao capturar imagen");
      console.log(err);
    });
  }

  mudarImagemCapa(img64: string){
    this.livro.capa=img64;
  }
}
