import { Component, Input } from '@angular/core';
import { Sentence } from '../home/interfaces/sentence';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})


export class EscenaComponent {
  @Input() sentenceS: Sentence = { text: '' }; // Inicialización en la declaración

  @Input() currentSentence!: boolean;
}


