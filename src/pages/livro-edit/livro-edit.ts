import { Component } from '@angular/core';
import {Livro} from "../../data/livroInterface";
import {NavParams, ViewController} from "ionic-angular";
import {NgForm} from "@angular/forms";
import {LivroService} from "../../services/livros";
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileChooser } from '@ionic-native/file-chooser';
import { DomSanitizer } from '@angular/platform-browser';
import {File} from "@ionic-native/file";
import {FilePath} from "@ionic-native/file-path";






@Component({
  selector: 'page-livro-edit',
  templateUrl: 'livro-edit.html',
})
export class LivroEditPage {

  livro: Livro;
  corIconeLivro: string;

  constructor(
    private domSanitizationService: DomSanitizer ,
    private navParams: NavParams,
    private livroService: LivroService,
    private camera: Camera,
    private viewCtrl: ViewController,
    public file: File,
    public fileChooser: FileChooser,
    public filePath: FilePath

  ) {}

  escolherPDF(){
    this.fileChooser.open()
      .then(uri => {
        console.log('Relative Path: '+ uri);
        this.filePath.resolveNativePath(uri).then(resolvedFilePath =>{
          console.log('Real Path: '+ resolvedFilePath);
          this.livro.pdf = resolvedFilePath;
        });
      })
      .catch(e => console.log(e));
  }


  ionViewDidLoad(){
    this.livro = this.navParams.get('livro');

    if(this.livro.pdf === "" || this.livro.pdf === null)
      this.corIconeLivro = "danger";
    else
      this.corIconeLivro = "verdeOk"

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

  sanitizeBase64(capa: string) {
    this.domSanitizationService.bypassSecurityTrustUrl(capa);
  }

}
