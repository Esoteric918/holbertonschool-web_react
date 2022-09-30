import { getFullYear, getLatestNotification, getFooterCopy } from './utils';

describe('getFullYear', () => {
  it('returns the current year', () => {
    expect(getFullYear()).toEqual(new Date().getFullYear());
  });
});

describe('getLatestNotification', () => {
  it('returns the current year', () => {
    expect(getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
  });
});

describe('getFooterCopy', () => {
  it('returns the current year', () => {
    expect(getFooterCopy(true)).toEqual('Holberton School');
  });
  it('returns the current year', () => {
    expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
  });
});
