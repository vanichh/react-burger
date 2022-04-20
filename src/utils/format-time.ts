const transliteTime = (
  number: number,
  arrNames: [string, string, string] = ['день назад', 'дней назад', 'дня назад']
): string => {
  switch (number) {
    case 0:
      return 'Сегодня';
    case 1:
      return 'Вчера';
    default:
      const newNumber = number % 10;
      if (newNumber > 10 && newNumber < 20) {
        return `${number} ${arrNames[2]}`;
      } else if (newNumber > 1 && newNumber < 5) {
        return `${number} ${arrNames[1]}`;
      } else if (newNumber === 1) {
        return `${number} ${arrNames[0]}`;
      }
      return `${number} ${arrNames[2]}`;
  }
};

export const formatTime = (timeUnix: string): string => {
  const date = new Date(timeUnix);
  const differenceday = new Date().getDate() - date.getDate();
  const day = transliteTime(differenceday);
  const time = Intl.DateTimeFormat('ru', {
    timeStyle: 'short',
  }).format(date);
  const timeZpne = ` I-GTM${Math.floor(date.getTimezoneOffset() / 60)}`;
  return `${day} ${time} ${timeZpne}`;
};
