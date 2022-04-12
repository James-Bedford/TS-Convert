//Container DiV1 + DIV2  Div1 3 buttons  Div2 four Div as Dice-->
document.addEventListener("DOMContentLoaded", function () {
  //Create dice object

  class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }

  class Dice {
    constructor(face, value) {
      this.face = face;
      this.value = value;
    }
  }
  let dice1 = new Dice(`\u2680`, 1);
  let dice2 = new Dice(`\u2681`, 2);
  let dice3 = new Dice(`\u2682`, 3);
  let dice4 = new Dice(`\u2683`, 4);
  let dice5 = new Dice(`\u2684`, 5);
  let dice6 = new Dice(`\u2685`, 6);

  console.log(dice1.face);
  let mainContainer = document.createElement(`div`);
  let div1 = document.createElement(`div`);
  let button1 = document.createElement(`btn`);
  let text1 = document.createTextNode(`New Die`);
  button1.appendChild(text1);
  let button2 = document.createElement(`btn`);
  let text2 = document.createTextNode(`Reroll Die`);
  button2.appendChild(text2);
  let button3 = document.createElement(`btn`);
  let text3 = document.createTextNode(`Sum Die`);
  button3.appendChild(text3);

  div1.appendChild(button1);
  div1.appendChild(button2);
  div1.appendChild(button3);

  let div2 = document.createElement(`div`);
  // let dice1 = document.createElement(`div`);

  let span1 = document.createElement(`span`);
  let span2 = document.createElement(`span`);
  let span3 = document.createElement(`span`);
  let span4 = document.createElement(`span`);
  let a = roll();
  let dice1Txt = document.createTextNode(roll());
  let dice2Txt = document.createTextNode(roll());
  let dice3Txt = document.createTextNode(roll());
  let dice4Txt = document.createTextNode(roll());

  span1.appendChild(dice1Txt);
  span2.appendChild(dice2Txt);
  span3.appendChild(dice3Txt);
  span4.appendChild(dice4Txt);
  div2.appendChild(span1);
  div2.appendChild(span2);
  div2.appendChild(span3);
  div2.appendChild(span4);

  mainContainer.appendChild(div1);
  mainContainer.appendChild(div2);
  document.body.appendChild(mainContainer);

  //add some ids and classes to allow styling
  mainContainer.classList.add(`mainContainer`);
  div1.classList.add(`div1`);

  button1.classList.add(`button`);
  button1.setAttribute(`id`, `button1`);
  button2.classList.add(`button`);
  button2.setAttribute(`id`, `button2`);
  button3.classList.add(`button`);
  button3.setAttribute(`id`, `button3`);
  div2.classList.add(`div2`);

  //returns a random dice
  function roll() {
    let dice = Math.trunc(Math.random() * 6) + 1;
    let face;
    switch (dice) {
      case 1:
        return (face = dice1.face);
        break;
      case 2:
        return (face = dice2.face);
        break;
      case 3:
        return (face = dice3.face);
        break;
      case 4:
        return (face = dice4.face);
      case 5:
        face = dice5.face;
      case 6:
        return (face = dice6.face);
    }
  } //end roll() function

  //Reroll Die
}); // DOMContentLoaded end
