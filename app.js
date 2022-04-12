document.addEventListener("DOMContentLoaded", function () {
  let mainContainer = document.createElement(`div`);
  let div1 = document.createElement(`div`);
  let div2 = document.createElement(`div`);
  let dValues = [];
  let index = 0;
  mainContainer.className = `maincontainer`;
  document.body.appendChild(mainContainer);
  mainContainer.appendChild(div1);
  mainContainer.appendChild(div2);
  let btnNew = document.createElement(`btn`);
  let text1 = document.createTextNode(`New Die`);
  btnNew.appendChild(text1);
  let btnRe = document.createElement(`btn`);
  let text2 = document.createTextNode(`Reroll Die`);
  btnRe.appendChild(text2);
  let btnSum = document.createElement(`btn`);
  let text3 = document.createTextNode(`Sum Die`);
  btnSum.appendChild(text3);
  let btnSpots = document.createElement(`btn`);
  let text4 = document.createTextNode(`Old Skool`);
  btnSpots.appendChild(text4);
  div1.appendChild(btnNew);
  div1.appendChild(btnRe);
  div1.appendChild(btnSum);
  div1.appendChild(btnSpots);
  mainContainer.classList.add(`mainContainer`);
  div1.classList.add(`div1`);
  div2.classList.add(`div2`);
  btnNew.classList.add(`button`);
  btnNew.setAttribute(`id`, `button1`);
  btnRe.classList.add(`button`);
  btnRe.setAttribute(`id`, `button2`);
  btnSum.classList.add(`button`);
  btnSum.setAttribute(`id`, `button3`);
  btnSpots.classList.add(`button`);
  btnSpots.setAttribute(`id`, `button4`);
  class Die {
    constructor() {
      this.die = document.createElement(`div`);
      this.die.className = `dice`;
      this.die.setAttribute(`id`, index);
      index++;
      let foo = Math.floor(Math.random() * 6 + 1); //needed for inital start
      this.value = document.createTextNode(foo);
      this.die.appendChild(this.value);
      console.log(this.value);
      dValues.push(foo);
      console.log(dValues);
      this.indexNumber = dValues.length;
      div2.appendChild(this.die);
      this.die.addEventListener(`click`, () => {
        this.roll();
      });
    } //end of constructor

    roll() {
      this.value = Math.floor(Math.random() * 6 + 1);
      //this.div.textContent = this.value; //this adds the value to the div

      let face = [
        `\u2680`,
        `\u2680`,
        `\u2681`,
        `\u2682`,
        `\u2683`,
        `\u2684`,
        `\u2685`,
      ];

      //return face[dice];
      //return face[this.value];

      this.die.textContent = this.value;
      console.log(`remove array value`);
      //get die index
      let indexClick = getElementIndex(this.die);
      dValues.splice(indexClick, 1); //remove the value
      dValues.push(this.value);
    }
  } //end class Die

  btnNew.addEventListener(`click`, function () {
    new Die();
  });
  btnRe.addEventListener(`click`, function () {
    // dValues = []; //reset dice sum array.

    //dValues.forEach((Die) => this.roll());

    let ac = div2.innerHTML;
    let z = ac.length;
    console.log(`Div dice info ${ac}`);
    console.log(`Number of  dice are ${z / 32}`); // each div with a dice is 32 char - its a bad way of doing this but I cant seem to split out and count the dice any other way

    div2.innerHTML = ""; //clear the dice ready for new values
    dValues = []; //reset dice sum array.

    z = z / 32;
    for (let i = 0; i < z; i++) {
      new Die();
    }
  });

  btnSum.addEventListener(`click`, function () {
    let baa = dValues.reduce(getSum, 0);
    console.log(`The sum is ${baa}`);
    function getSum(total, num) {
      return total + Math.round(num);
    } //end getSum()
  }); //end btn sum
  //Function gets the child elementid
  function getElementIndex(el) {
    return [...el.parentElement.children].indexOf(el);
  } //end getElementIndex
}); // DOMContentLoaded end
