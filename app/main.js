//import ValuesController from "./Controllers/ValuesController.js";
import JsController from "./Controllers/Jscontroller.js";

class App {
  JsController = new JsController();
}

console.log("main.js alive");

window["app"] = new App();
