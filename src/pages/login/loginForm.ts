import { Component } from '@angular/core';
@Component({
  template: `
    <form (ngSubmit)="logForm()">
      <ion-item>
        <ion-label>Email</ion-label>
        <ion-input type="text" [(ngModel)]="todo.title" name="title"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Senha</ion-label>
        <ion-input type="password" [(ngModel)]="todo.title" name="title"></ion-input>
      </ion-item>
      <button ion-button type="submit" block>Entrar</button>
    </form>
  `
})

export class FormsPage {
  todo = {}
  logForm() {
    console.log(this.todo)
  }
}
