import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import du FormsModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],  // Ajoutez FormsModule ici
})
export class AppComponent {
  title = 'tp1';  
  msg: string = '';  // Variable pour stocker le message
  msgs: { text: string, color: string }[] = [];  // Tableau pour stocker les messages avec couleurs

  ajouterMessage() {
    if (this.msg.trim()) {
      const randomColor = this.getRandomColor();  // Obtenir une couleur aléatoire
      this.msgs.push({ text: this.msg, color: randomColor });  // Ajouter le message avec une couleur
      this.msg = '';  // Réinitialiser la zone de texte
    }
  }

  // Méthode pour générer une couleur aléatoire
  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Fonction pour supprimer le dernier message
  supprimerDernierMessage() {
    if (this.msgs.length > 0) {
      this.msgs.pop();  // Supprimer le dernier message
    }
  }
}
