/**
 * @jest-environment jsdom
 */

import MOCK_SHOWS from '../../__mocks__/shows.js';
import showList from '../../components/showList.js';

describe('ShowsList module', () => {
  beforeEach(() => {
    showList.shows = MOCK_SHOWS;
  });

  test('counter should display 6', () => {
    document.body.innerHTML = '<div id="shows-count"></div>';
    showList.setCounterEl();

    const showsCounterEl = document.querySelector('#shows-count');

    expect(showsCounterEl.innerHTML).toBe(String(MOCK_SHOWS.length));
  });
});