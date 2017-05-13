import convertDate, { cutDate } from './convertDate';

it('convert date correctly', () => {
  expect(convertDate('1958-08-29')).toEqual('29.08.1958');
  expect(convertDate('1958-08')).toEqual('1958-08');
  expect(convertDate(100)).toEqual(100);
});

it('cut date correctly', () => {
  expect(cutDate('2017-05-13T18:25:04.812Z')).toEqual('2017-05-13');
  expect(cutDate('2017-05')).toEqual('2017-05');
  expect(cutDate(100)).toEqual(100);
});
