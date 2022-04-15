export const statusOrder = (status: string): string => {
  switch (status) {
    case 'done': {
      return 'Выполнен';
    }
    case 'pending': {
      return 'Ожидает';
    }
    case 'created': {
      return 'Создан';
    }
  }
};