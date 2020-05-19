import JsService from "../Services/JsService.js";
import store from "../store.js";

//Private
function _draw() {
  let jmodels = store.State.jmodels;
  let template = jmodels.Template;
  document.getElementById("jmodels").innerHTML = template;
  console.log(store.State._wager);
  console.log("^_wager^");

  if (store.State._wager == true) {
    document.getElementById("wager").classList.add("btn-success");
    document.getElementById("wager").classList.remove("btn-danger");
  } else {
    document.getElementById("wager").classList.add("btn-danger");
    document.getElementById("wager").classList.remove("btn-success");
  }

  //console.log(jmodels);
}

//Public
export default class JsController {
  constructor() {
    store.subscribe("jmodels", _draw);

    JsService.getApiRandom();
  }

  toggleWager() {
    JsService.toggleWager();
  }

  isCorrect(yn, value) {
    JsService.isCorrect(yn, value);
  }

  toggleAnswer() {}
}
