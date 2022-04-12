//Container DiV1 + DIV2  Div1 3 buttons  Div2 four Div as Dice-->
document.addEventListener("DOMContentLoaded", function () {
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
  mainContainer.appendChild(div1);
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
  //Create die

  let div2 = document.createElement(`div`);
  mainContainer.appendChild(div2);

  //Create dice object
  class Dice {
    constructor(value, face) {
      this.value = value;
      this.face = face;
      // document.createElement(`span`);
      //document.createTextNode(roll());
    }

    roll() {
      let dice = Math.trunc(Math.random() * 6) + 1;
      this.value = dice;
      let face = [
        `\u2680`,
        `\u2680`,
        `\u2681`,
        `\u2682`,
        `\u2683`,
        `\u2684`,
        `\u2685`,
      ];
      return face[dice];
    }

    sum() {}
    newDice() {}
  } // Dice Class
  let d1 = new Dice(1, `\u2683`);
  let d2 = new Dice(2, `\u2680`);
  let d3 = new Dice(3, `\u2680`);
  let d4 = new Dice(4, `\u2683`);
  let span1 = document.createElement(`span`);
  let span2 = document.createElement(`span`);
  let span3 = document.createElement(`span`);
  let span4 = document.createElement(`span`);
  let dice1Txt = document.createTextNode(d1.roll());
  let dice2Txt = document.createTextNode(d2.roll());
  let dice3Txt = document.createTextNode(d3.roll());
  let dice4Txt = document.createTextNode(d4.roll());

  span1.appendChild(dice1Txt);
  span2.appendChild(dice2Txt);
  span3.appendChild(dice3Txt);
  span4.appendChild(dice4Txt);
  div2.appendChild(span1);
  div2.appendChild(span2);
  div2.appendChild(span3);
  div2.appendChild(span4);
  mainContainer.appendChild(div2);
  div2.classList.add(`div2`);
  span4.setAttribute(`id`, `dice4`);

  console.log(d1.roll(), d2.roll());
  let willThisWork = d1.value + d2.value;
  console.log(willThisWork);

  button1.addEventListener(`click`, function () {
    let show = document.getElementById(`dice4`);
    show.style.display = "block";
  });

  button2.addEventListener(`click`, function () {
    dice1Txt = document.createTextNode(d1.roll());
    span1.appendChild(dice1Txt);
  });
}); // DOMContentLoaded end
