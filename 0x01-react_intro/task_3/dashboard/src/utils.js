// function that returns the current year
export function getFullYear() {
  return new Date().getFullYear();
}

export function getFooterCopy(isIdex) {
  if (isIdex) {
    return 'Holberton School';
  }
  return 'Holberton School main dashboard';
}

export function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}
