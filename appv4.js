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

  class Die {
    constructor() {
      this.div = document.createElement(`div`);
      //this.span = document.createElement(`span`);
      this.div.className = `dice`;
      this.div.setAttribute(`id`, index);
      index++;
      // this.value = document.createTextNode(this.roll());
      let foo = Math.floor(Math.random() * 6 + 1);
      this.value = document.createTextNode(foo);
      this.div.appendChild(this.value);
      console.log(this.value);
      dValues.push(foo);
      console.log(dValues);
      //this.roll();

      div2.appendChild(this.div);
      this.div.addEventListener(
        `click`,
        () => this.roll(),
        console.log(`test`)
      );
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
      this.div.textContent = this.value;
    }
  } //end class Die

  btnNew.addEventListener(`click`, function () {
    new Die();
  });
  btnRe.addEventListener(`click`, function () {
    // dValues = []; //reset dice sum array.

    const nodeList = document.body.childNodes;

    let text = "";
    for (let i = 0; i < nodeList.length; i++) {
      text += nodeList[i].nodeName + "<br>";
      console.log(text);
    }
    //document.getElementsByClassName("div2").innerHTML = text;
  });

  btnSum.addEventListener(`click`, function () {
    let baa = dValues.reduce(getSum, 0);
    console.log(`The sum is ${baa}`);
    function getSum(total, num) {
      return total + Math.round(num);
    } //end getSum()

    //get div2 text values place in array and sum
    //let test =
  });
  /*
  rollDiceBtn.addEventListener(`click`, function () {
    for (let i = 0; i < arr.length; i++) {
      arr[i].roll();
    }
  });  */
}); // DOMContentLoaded end
