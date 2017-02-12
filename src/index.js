global.$ = global.jQuery = require('jquery');
const Components = require('./components/index.components.js');

let login = new Components.Login('login');

$('.info').each((index, dom) => {
  new Components.InfoBlock(dom, {
    title: $(dom).html(),
    content: `大吉大利顺顺利利${index + 1}`
  });
});