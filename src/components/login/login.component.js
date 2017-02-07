module.exports = class Login {
  constructor (id) {
    this.password = new Array(6).fill('');
    init(document.getElementById(id))
  }

  login () {
  }

  reset () {
  }
};

function init (selector) {
  selector.innerHTML = 'login';
}