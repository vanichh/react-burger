/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect, FC, useMemo } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import SectionIngredients from './section-ingredients';
import { useSelector } from 'react-redux';
import { RootState } from 'services/store';
import typeInfridients from 'utils/types';
import { throttle } from 'utils/throttle';
type typeBun = 'bun' | 'sauce' | 'main';

export const BurgerIngredients: FC = () => {
 // данные для отрисовки ингридиентов
  const ingredients: typeInfridients[] = useSelector(
    (store: RootState) => store.igridients.listIgridients
  );

  // переключение табов
  const [current, setCurrent] = useState<typeBun>('bun');

  const refBun = useRef<HTMLElement>(null);
  const refSause = useRef<HTMLElement>(null);
  const refMain = useRef<HTMLElement>(null);
  const refSectionIngredients = useRef<HTMLDivElement>(null);

  const toggleTab = (ref: React.RefObject<HTMLElement>, bun: typeBun) => {
    setCurrent(bun);
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const activTab = () => {
    const bunTop = refBun.current.getBoundingClientRect().top;
    const sauseTop = refSause.current.getBoundingClientRect().top;
    const mainTop = refMain.current.getBoundingClientRect().top;
    if (bunTop > 200 && bunTop < 260) {
      setCurrent('bun');
    } else if (sauseTop > 200 && sauseTop < 260) {
      setCurrent('sauce');
    } else if (mainTop > 200 && mainTop < 260) {
      setCurrent('main');
    }
  };
  const getIngredient = (typeBun: typeBun) => {
    return ingredients.filter(({ type }) => type === typeBun);
  };

  useEffect(() => {
    const optimizedActivTab = throttle(activTab, 50);
    refSectionIngredients.current.addEventListener('scroll', optimizedActivTab);
  }, []);

  return (
    <>
      <section className={`${styles.ingredients} ml-10`}>
        <h2 className='text text_type_main-large mt-10 mb-5'>
          Соберите бургер
        </h2>
        <div className={`${styles.list}`}>
          <Tab
            value='bun'
            active={current === 'bun'}
            onClick={() => toggleTab(refBun, 'bun')}>
            Булки
          </Tab>
          <Tab
            value='sauce'
            active={current === 'sauce'}
            onClick={() => toggleTab(refSause, 'sauce')}>
            Соусы
          </Tab>
          <Tab
            value='main'
            active={current === 'main'}
            onClick={() => toggleTab(refMain, 'main')}>
            Начинки
          </Tab>
        </div>
        {useMemo(
          () => (
            <div
              className={`${styles.wrapper} mb-5`}
              ref={refSectionIngredients}>
              <SectionIngredients
                refElem={refBun}
                title='Булки'
                dataIngredients={getIngredient('bun')}
              />
              <SectionIngredients
                refElem={refSause}
                title='Соусы'
                dataIngredients={getIngredient('sauce')}
              />
              <SectionIngredients
                refElem={refMain}
                title='Начинки'
                dataIngredients={getIngredient('main')}
              />
            </div>
          ),
          []
        )}
      </section>
    </>
  );
};

export default BurgerIngredients;
