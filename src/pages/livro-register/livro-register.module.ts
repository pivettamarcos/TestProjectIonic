import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LivroRegisterPage } from './livro-register';

@NgModule({
  declarations: [
    LivroRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(LivroRegisterPage),
  ],
})
export class LivroRegisterPageModule {}
