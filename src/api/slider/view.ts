const $ = require('jquery');

class SliderView {
  constructor(
    private $root: any,
    private range: boolean = false,
    ) {
      this.render();
    }

  public setNewPropertyToElem = (elem: any, prop: string, px: string): void => elem.css(prop, px);

  public addRangeButton = (): void => {
    const $slider = $('.js-range');

    $('<span>')
      .addClass('range__button range__button_two js-range__button_two')
      .appendTo($slider);
  }

  public removeRangeButton = (): void => {
    const $button = $('.js-range__button_two');

    $button.remove();
  }

  private render = (): void => {
    const $slider: any = $('<section>')
      .addClass('range js-range');
    $('<div>')
      .addClass('range__between js-range__between')
      .appendTo($slider);
    $('<span>')
      .addClass('range__button range__button_one js-range__button_one')
      .appendTo($slider);
    if (this.range) {
      $('<span>')
        .addClass('range__button range__button_two js-range__button_two')
        .appendTo($slider);
    }
    $slider.appendTo(this.$root);
  }
}

export { SliderView };
