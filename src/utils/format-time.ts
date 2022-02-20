export const formatTime = (time: string): string => {
  let stringData: string = '';
  const date = new Date(time);
  const dataUnix = Math.round(date.getTime() / 1000);
  const currentDataUnix = Math.round(new Date().getTime() / 1000);
  const differenceday = Math.round((currentDataUnix - dataUnix) / 86400);
  switch (differenceday) {
    case 0: {
      stringData += 'Сегодня ';
      break;
    }
    case 1: {
      stringData += 'Вчера ';
      break;
    }
    default: {
      stringData += `${differenceday} дней назад `;
    }
  }
  const hourAndMinute = Intl.DateTimeFormat('ru', {
    timeStyle: 'short',
  }).format(date);
  stringData += hourAndMinute;

  const timeZpne = ` I-GTM${Math.floor(date.getTimezoneOffset() / 60)}`;
  stringData += timeZpne;

  return stringData;
};
