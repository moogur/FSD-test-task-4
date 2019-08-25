// slider with two buttons
import { SliderView } from './view';
const $ = require('jquery');

document.body.innerHTML = '<div id="root"></div>';
const $root: JQuery = $('#root');
const view: SliderView = new SliderView($root, true);

describe('Two buttons on slider', () => {
  const $elem: JQuery = $('.js-range__button_one');
  it('initializing slider with range(two buttons)', () => {
    expect($root.find('.js-range__button').length).toEqual(2);
  });

  it('remove button to slider', () => {
    view.removeRangeButton();
    expect($root.find('.js-range__button').length).toEqual(1);
  });

  it('set new css property (color) on button', () => {
    view.setNewPropertyToElem($elem, 'color', 'blue');
    expect($elem.css('color')).toEqual('blue');
  });
});
