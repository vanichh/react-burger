import { ChangeEvent, useState } from 'react';

type TEvent = ChangeEvent<HTMLInputElement>;


export const useInputValue = <T extends Object>(obj: T) => {
  const [value, setValue] = useState<T>(obj);

  const handleValueInput = ({ target }: TEvent) => {
    setValue((prev) => ({ ...prev, [target.name]: target.value }));
  };

  return { handleValueInput, value, setValue };
};
