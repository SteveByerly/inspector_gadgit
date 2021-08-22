const datetimeFormatOptions: Intl.DateTimeFormatOptions = {
  day: '2-digit',
  hour: 'numeric',
  minute: 'numeric',
  month: '2-digit',
  second: 'numeric',
  year: 'numeric',
};

export const getLogTimestamp = (): string => {
  const timestamp = Date.now();
  return new Date(timestamp).toLocaleString(undefined, datetimeFormatOptions);
};
