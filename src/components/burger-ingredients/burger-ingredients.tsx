/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect, FC, useCallback } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import { SectionIngredients } from './';
import { useSelector } from 'services/types';
import { throttle } from 'utils/throttle';
import { useTab } from '../../utils/hooks/use-tab';
import type { TTypeBun  } from '../../utils/hooks/use-tab';

export const BurgerIngredients: FC = () => {
  // данные для отрисовки ингридиентов
  const { listIgridients } = useSelector((store) => store.igridients);

  const { ref, activTab, toggleTab, currentTab } = useTab();

  const divIngridients = useRef<HTMLDivElement>(null);

  const getIngredient = (typeBun: TTypeBun) =>
    listIgridients.filter(({ type }) => type === typeBun);

  useEffect(() => {
    const optimizedActivTab = throttle(activTab, 50);
    divIngridients.current.addEventListener('scroll', optimizedActivTab);
  }, []);

  const IngridientsList = useCallback(
    () => (
      <div className={`${styles.wrapper} mb-5`} ref={divIngridients}>
        <SectionIngredients
          refElem={ref.bun}
          title='Булки'
          dataIngredients={getIngredient('bun')}
        />
        <SectionIngredients
          refElem={ref.sause}
          title='Соусы'
          dataIngredients={getIngredient('sauce')}
        />
        <SectionIngredients
          refElem={ref.main}
          title='Начинки'
          dataIngredients={getIngredient('main')}
        />
      </div>
    ),
    []
  );

  return (
    <>
      <section className={`${styles.ingredients} ml-10`}>
        <h2 className='text text_type_main-large mt-10 mb-5'>
          Соберите бургер
        </h2>
        <div className={`${styles.list}`}>
          <Tab
            value='bun'
            active={currentTab === 'bun'}
            onClick={() => toggleTab(ref.bun, 'bun')}
          >
            Булки
          </Tab>
          <Tab
            value='sauce'
            active={currentTab === 'sauce'}
            onClick={() => toggleTab(ref.sause, 'sauce')}
          >
            Соусы
          </Tab>
          <Tab
            value='main'
            active={currentTab === 'main'}
            onClick={() => toggleTab(ref.main, 'main')}
          >
            Начинки
          </Tab>
        </div>
        <IngridientsList />
      </section>
    </>
  );
};
