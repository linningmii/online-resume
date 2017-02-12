module.exports = class Login {
  constructor (id) {
    this.password = new Array(6).fill('');
    init($(`#${id}`));
  }

  login () {
  }

  reset () {
  }
};

function init (selector) {
  selector.html('login');
}