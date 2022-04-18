import { RefObject, useRef, useState } from 'react';

export type TTypeBun = 'bun' | 'sauce' | 'main';
type TToggleTab = (ref: RefObject<HTMLElement>, TtypeBun: TTypeBun) => void;

export const useTab = () => {
  // переключение табов
  const [currentTab, setCurrentTAb] = useState<TTypeBun>('bun');

  const ref = {
    bun: useRef<HTMLElement>(null),
    sause: useRef<HTMLElement>(null),
    main: useRef<HTMLElement>(null),
  };

  const activTab = () => {
    const bunTop = ref.bun.current.getBoundingClientRect().top;
    const sauseTop = ref.sause.current.getBoundingClientRect().top;
    const mainTop = ref.main.current.getBoundingClientRect().top;
    if (bunTop > 200 && bunTop < 260) {
      setCurrentTAb('bun');
    } else if (sauseTop > 200 && sauseTop < 260) {
      setCurrentTAb('sauce');
    } else if (mainTop > 200 && mainTop < 260) {
      setCurrentTAb('main');
    }
  };

  const toggleTab: TToggleTab = (ref, bun) => {
    setCurrentTAb(bun);
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return { ref, activTab, toggleTab, currentTab };
};
