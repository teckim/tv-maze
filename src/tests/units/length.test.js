import { comment2, comment1 } from '../../__mocks__/comments.js';
import { findLengthOnly } from '../../components/rendercomments.js';

describe('Comment Counter for Mocked comment1', () => {
  test('counter should return 2', () => {
    document.body.innerHTML = '<div class="commentarea"></div>';

    expect(findLengthOnly(comment1)).toBe(3);
  });

  test('counter section innerHtml should display counter', () => {
    document.body.innerHTML = '<div class="commentarea"></div>';
    findLengthOnly(comment1);
    const commentSection = document.querySelector('.t').innerHTML;
    expect(commentSection).toEqual('Comments(3)');
  });
});

describe('Comment Counter for Mocked comment2', () => {
  test('counter should return 2', () => {
    document.body.innerHTML = '<div class="commentarea"></div>';

    expect(findLengthOnly(comment2)).toBe(2);
  });

  test('counter section innerHtml should display counter', () => {
    document.body.innerHTML = '<div class="commentarea"></div>';
    findLengthOnly(comment2);
    const commentSection = document.querySelector('.t').innerHTML;
    expect(commentSection).toBe('Comments(2)');
  });
});
