import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  ngOnInit(): void {
    this.typingEffect();
  }

  typingEffect() {
    const contactTexts = this.shuffleArray(['Olá, meu nome é Fernando!', 'Bem-vindo ao meu site!']);
    const typedtext = document.getElementsByClassName("typedtext")[0];
    let removing = false;
    let idx = 0
    let char = 0

    setInterval(() => { // We define the interval of the typing speed

      // If we do not reach the limit, we insert characters in the html
      if (char < contactTexts[idx].length) typedtext.innerHTML += contactTexts[idx][char];

      // 15*150ms = time before starting to remove characters
      if (char == contactTexts[idx].length + 15) removing = true;

      // Removing characters, the last one always
      if (removing) typedtext.innerHTML = typedtext.innerHTML.substring(0, typedtext.innerHTML.length - 1);

      char++; // Next character

      // When there is nothing else to remove
      if (typedtext.innerHTML.length === 0) {

        // If we get to the end of the texts we start over
        if (idx === contactTexts.length - 1) idx = 0
        else idx++;

        char = 0; // Start the next text by the first character
        removing = false; // No more removing characters
      }

    }, 50); // Typing speed, 150 ms

  }

  shuffleArray(array: any) {
    let currentIndex = array.length,
      temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

}




