import { Component } from '@angular/core';
import { Sentence } from './interfaces/sentence';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  sentenceS: Sentence[] = [
    {
      text: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
      img: "assets/img/1.jpg"
    },
    {
      text: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
      img: "assets/img/2.jpg"
    },
    {
      text: "L'heroi va decidir travessar la porta que el portava a casa",
      img: "assets/img/3.jpg"
    },
    {
      text: "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ...",
      img: "assets/img/4.jpg"
    },
  ];
  currentSentence: number = 0;
  mostrarEscena: boolean = false; 
  backgroundImg: string = this.sentenceS[0].img;

  prev() {
    if (this.currentSentence > 0) {
      this.currentSentence--;
      this.backgroundImg = this.sentenceS[this.currentSentence].img;
    }
  }

  next() {
    if (this.currentSentence < this.sentenceS.length - 1) {
      this.currentSentence++;
      this.backgroundImg = this.sentenceS[this.currentSentence].img;
    }
  }
}



