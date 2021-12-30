type timerType = ReturnType<typeof setTimeout>

export const throttle = (callee: any, timeout: number) => {
  let timer: timerType | null = null;

  return (...args: any) => {
    if (timer) return;

    timer = setTimeout(() => {
      callee(...args);
      clearTimeout(timer);
      timer = null;
    }, timeout);
  };
};
