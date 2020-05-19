import JModel from "./Models/JModel.js";
let _userTotal = 0;
let _wager = false;

let _state = {
  /** @type {JModel{}} */
  jmodels: null,
  _wager: false,
  _userTotal: null,
};

/** Collection of listeners to be called based on keyed state changes
 * @type {{[x:string]: function[]}}
 */
let _listeners = {
  jmodels: [],
  _wager: [],
  _userTotal: [],
};

//NOTE You should not need to change the code from this point down

/**
 * Validates the property string is defined in both the state and the listeners
 * @param {string} prop
 */
function _validateProp(prop) {
  if (!_state.hasOwnProperty(prop) || !Array.isArray(_listeners[prop])) {
    throw new Error(
      `Unkown property ${prop}, please review your state and listeners`
    );
  }
}

/**
 * Validates the subscriber is a function
 * @param {function} fn
 * @param {string} prop
 */
function _validateSubscriber(fn, prop) {
  if (typeof fn != "function") {
    throw new Error(`Unable to subscribe to ${prop} fn must be a function`);
  }
}

class Store {
  isCorrect(yn, value) {
    if (yn == "Y") {
      _userTotal += value;
      console.log(_userTotal);
    }
  }
  toggleWager() {
    if (!_wager) {
      _wager = true;
    } else {
      _wager = false;
    }
    console.log(_wager);
    console.log("^store^");
  }

  get _wager() {
    return _wager;
  }

  get _userTotal() {
    return _userTotal;
  }
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
  /**
   * Takes in a property to observe, and a function to run when it changes
   * @param {string} prop
   * @param {function} fn
   */
  subscribe(prop, fn) {
    _validateProp(prop);
    _validateSubscriber(fn, prop);
    _listeners[prop].push(fn);
  }

  /**
   * Takes in a property to set, and the value to set it to
   * @param {string} prop
   * @param {any} data
   */
  commit(prop, data) {
    _validateProp(prop);
    _state[prop] = data;
    _listeners[prop].forEach((fn) => fn());
  }
}

const store = new Store();
export default store;
