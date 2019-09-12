// class 2 practical
// author: Melody Mingfang Zhang
// date created: 2019.09.20
// index.test.js

/* eslint-disable no-global-assign, no-underscore-dangle */

const birthday = require('./index');
// unit test
describe('Determines age based on birthday', () => {
  test('Returns 0 if birthday is today', () => {
    expect(birthday.howOld(Date.now())).toBe(0);
  });
});


describe('Determines age based on birthday', () => {
  let _Date;
  beforeAll(() => {
    // Save original date module
    _Date = Date;
  });

  afterAll(() => {
    // Reset Date
    Date = _Date;
  });

  beforeEach(() => {
    // Set a fixed date
    Date.now = jest.fn(() => new Date('01 Jan 2018').valueOf());
  });
  // test case 1: today's date
  test('Returns 0 if birthday is today', () => {
    expect(birthday.howOld(new Date('01 Jan 2018'))).toBe(0);
  });
  // test case 2: 1 year old
  test('Returns 1 if birthday in 2017', () => {
    expect(birthday.howOld(new Date('01 Jan 2017'))).toBe(1);
  });
  // test case 3: 2 year old
  test('Returns 2 if birthday in 2016', () => {
    expect(birthday.howOld(new Date('01 Jan 2016'))).toBe(2);
  });
  // test case 4: 2 year old but different date in year
  test('Returns 2 if birthday is after 01 Jan 2015', () => {
    expect(birthday.howOld(new Date('31 Dec 2015'))).toBe(2);
  });
  // test case 5: person not borned
  test('Returns -1 if birthday is after 01 Jan 2018', () => {
    expect(birthday.howOld(new Date('01 Jan 2019'))).toBe(-1);
  });
});
