import { SliderView } from './view';
const $ = require('jquery');

describe('drawing slider', () => {
  document.body.innerHTML = '<div id="root"></div>';
  const $root = $('#root');
  new SliderView($root, false);

  test('display', () => {
    expect($root.find('.js-range__button_two').length).toEqual(0);
  });
});

describe('drawing range slider', () => {
  document.body.innerHTML = '<div id="root"></div>';
  const $root = $('#root');
  new SliderView($root, true);

  test('display button', () => {
    expect($root.find('.js-range__button_two').length).toEqual(1);
  });
});
