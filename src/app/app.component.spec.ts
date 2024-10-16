import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp1';  // Titre utilisé dans les tests
  msg: string = '';  // Variable pour stocker le message
  msgs: string[] = [];  // Tableau pour stocker la liste des messages

  // Fonction pour ajouter un message
  ajouterMessage() {
    if (this.msg.trim()) {
      this.msgs.push(this.msg);  // Ajouter le message au tableau
      this.msg = '';  // Réinitialiser la zone de texte
    }
  }
}
