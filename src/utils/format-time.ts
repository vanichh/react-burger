const transliteTime = (
  number: number,
  arrName: [string, string, string] = ['день', 'дней', 'дня']
): string => {
  switch (number) {
    case 0:
      return 'Сегодня ';
    case 1:
      return 'Вчера ';
    default:
      const newNumber = number % 10;
      if (newNumber > 10 && newNumber < 20) {
        return `${number} ${arrName[2]} назад`;
      } else if (newNumber > 1 && newNumber < 5) {
        return `${number} ${arrName[1]} назад`;
      } else if (newNumber === 1) {
        return `${number} ${arrName[0]} назад`;
      }
      return `${number} ${arrName[2]} назад`;
  }
};

export const formatTime = (time: string): string => {
  const date = new Date(time);
  const dataUnix = Math.round(date.getTime() / 1000);
  const currentDataUnix = Math.round(new Date().getTime() / 1000);
  const differenceday = Math.round((currentDataUnix - dataUnix) / 86400);
  const dayOrder = transliteTime(differenceday);
  const hourAndMinute = Intl.DateTimeFormat('ru', {
    timeStyle: 'short',
  }).format(date);
  const timeZpne = ` I-GTM${Math.floor(date.getTimezoneOffset() / 60)}`;
  return `${dayOrder} ${hourAndMinute} ${timeZpne} `;
};
