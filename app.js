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
  div1.appendChild(btnNew);
  div1.appendChild(btnRe);
  div1.appendChild(btnSum);
  mainContainer.classList.add(`mainContainer`);
  div1.classList.add(`div1`);
  div2.classList.add(`div2`);
  btnNew.classList.add(`button`);
  btnNew.setAttribute(`id`, `button1`);
  btnRe.classList.add(`button`);
  btnRe.setAttribute(`id`, `button2`);
  btnSum.classList.add(`button`);
  btnSum.setAttribute(`id`, `button3`);
  //btnSpots.classList.add(`button`);
  // btnSpots.setAttribute(`id`, `button4`);
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

      //On double click delete
      this.die.addEventListener(`dblclick`, () => {
        console.log(`dbl clicked`);
        let indexClick = getElementIndex(this.die);
        this.die.outerHTML = ""; //clear the dice ready for new values
        dValues.splice(indexClick, 1); //remove the value
      });

      this.die.addEventListener(`click`, () => {
        this.roll();
      });
    } //end of constructor

    roll() {
      this.value = Math.floor(Math.random() * 6 + 1);
      //this.div.textContent = this.value; //this adds the value to the div

      this.die.textContent = this.value;

      //get die index
      let indexClick = getElementIndex(this.die);
      dValues.splice(indexClick, 1); //remove the value
      dValues.push(this.value);
    }
  } //end class Die

  btnNew.addEventListener(`click`, function () {
    new Die();
  });
  //Reroll button
  btnRe.addEventListener(`click`, function () {
    let ac = div2.innerHTML;
    let z = ac.length;

    div2.innerHTML = ""; //clear the dice ready for new values
    dValues = []; //reset dice sum array.
    // each div with a dice is 32 char - its a bad way of doing this but I cant seem to split out and count the dice any other way
    //Rolls for the number of dice counted
    z = z / 32;
    for (let i = 0; i < z; i++) {
      new Die();
    }
  });
  //Sum dice button
  btnSum.addEventListener(`click`, function () {
    let sum = dValues.reduce(getSum, 0);
    alert(`The sum is ${sum}`);
    function getSum(total, num) {
      return total + Math.round(num);
    } //end getSum()
  }); //end btn sum
  //Function gets the child elementid
  function getElementIndex(el) {
    return [...el.parentElement.children].indexOf(el);
  } //end getElementIndex
}); // DOMContentLoaded end
