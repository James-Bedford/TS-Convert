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
      this.die = document.createElement(`div`);
      //this.span = document.createElement(`span`);
      this.die.className = `dice`;
      this.die.setAttribute(`id`, index);
      index++;
      // this.value = document.createTextNode(this.roll());
      let foo = Math.floor(Math.random() * 6 + 1); //needed for inital start
      this.value = document.createTextNode(foo);
      this.die.appendChild(this.value);
      console.log(this.value);
      dValues.push(foo);
      console.log(dValues);

      div2.appendChild(this.die);
      this.die.addEventListener(
        `click`,
        () => this.roll()
        //remove value from array
        //and add new number
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
      this.die.textContent = this.value;
      dValues.push(this.value);
    }
  } //end class Die

  btnNew.addEventListener(`click`, function () {
    new Die();
  });
  btnRe.addEventListener(`click`, function () {
    // dValues = []; //reset dice sum array.
    let ac = div2.innerHTML;
    let z = ac.length;
    console.log(`one ${ac}`);
    console.log(`Number of  dice are ${z / 32}`); // each div with a dice is 32 char - its a bad way of doing this but I cant seem to split out and coun t the dice anyother way
    //one <div class="dice" id="0">1</div><div class="dice" id="1">2</div>

    //This is perfect returns text value of dice
    for (i = 0; i < z; i++) {
      let node = document.getElementById(i);
      let display = node.textContent;
      console.log(`the text is ${display}`);
    }

    //try a loop

    //number of elements in a div
    //let element = document.getElementById("theElementId");
    //let element = document.getElementsByClassName(`div2.dice`);
    let element = document.querySelectorAll("div2.dice");
    //let nOC = element.length;
    let nOC = element.children.length;
    console.log(`number of dice are ${nOC}`);

    let myNodeList = document.querySelectorAll("div2.dice");

    //let myNodeList2 = document.querySelector("#0");
    //let myNodeList3 = document.getElementById("#1");
    let myArrayFromNodeList = []; // empty at first
    for (var i = 0; i < myNodeList.length; i++) {
      myArrayFromNodeList.push(myNodeList[i]); // ahhh, push it
      console.log(myNodeList[i]);
      //console.log(myNodeList2);
      //let ac = myNodeList2;
      // let ad = myNodeList3;
      //  console.log(`this is it ${ac}`);
      //console.log(`this is it ${ad}`);
      // console.log(ad);
    }
    //let numb = document.querySelectorAll("div2.div").length;
    //console.log(`doe number of dice are ${numb}`);
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
