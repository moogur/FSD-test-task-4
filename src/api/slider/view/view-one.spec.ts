// Slider with one button
import { SliderView } from './view';
const $ = require('jquery');

document.body.innerHTML = '<div id="root"></div>';
const $root: JQuery = $('#root');
const view: SliderView = new SliderView($root, false);

describe('One button on slider', () => {
  const $elem: JQuery = $('.js-range__button_one');
  it('initalizing slider with one button', () => {
    expect($root.find('.js-range__button').length).toEqual(1);
  });

  it('add button to slider', () => {
    view.addRangeButton();
    expect($root.find('.js-range__button').length).toEqual(2);
  });

  it('set new css property (width) on button', () => {
    view.setNewPropertyToElem($elem, 'width', '100px');
    expect($elem.css('width')).toEqual('100px');
  });
});
