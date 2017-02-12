class InfoBlock {
  constructor (dom, info) {
    this.dom = dom;
    this.info = info;
    this.init();
  }

  init () {
    this.createDom();
    this.bindEvents();
  }

  createDom() {
    let $dom = $(this.dom);
    let $info = $(require('./info-block.component.html'));
    $info.find('header').html(this.info.title);
    $info.find('article').html(this.info.content);
    this.dom = $info.replaceAll($dom);
    this.$dom = $(this.dom);
  }

  bindEvents () {
    this.$dom.on('click', () => {
      this.collapse();
    });
  }

  collapse () {
    if(this.$dom.find('article').is(':hidden')) {
      this.$dom.find('article').show();
    } else {
      this.$dom.find('article').hide();
    }
  }

  drag () {}
}

module.exports = InfoBlock;
