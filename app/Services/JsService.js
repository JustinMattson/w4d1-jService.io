import store from "../store.js";
import JModel from "../Models/JModel.js";

let _wager = false;

// @ts-ignore
const _api = axios.create({
  baseURL: "https://jservice.io/api",
});

console.log("JsService is alive");
console.log(_wager);

class JsService {
  toggleWager() {
    // if true, userTotal will be modified
    // userTotal not influeced, right or wrong
    store.toggleWager();
  }
  isCorrect(yn, value) {
    // if true AND toggleWager is true
    // modify userTotal by appropriate value
    // N -= value
    // Y += value

    // call next question
    store.commit(yn, value);
  }

  getApiRandom() {
    _api
      .get("random")
      // NOTE if successful
      .then((response) => {
        let jmodels = new JModel(response.data[0]);

        console.log(jmodels);

        store.commit("jmodels", jmodels);
        console.log(jmodels);
      })
      // NOTE if failed
      .catch((error) => {
        console.error(error);
      });
  }
}

const service = new JsService();
export default service;
