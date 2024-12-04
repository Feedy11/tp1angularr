import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Le service sera accessible dans toute l'application
})
export class DataService {
  private messages: string[] = [];

  constructor() {}

  // Ajouter un message
  addMessage(message: string) {
    this.messages.push(message);
  }

  // Récupérer tous les messages
  getMessages(): string[] {
    return this.messages;
  }

  // Effacer les messages
  clearMessages() {
    this.messages = [];
  }
}
