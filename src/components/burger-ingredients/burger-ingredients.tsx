import { useState, useRef, useEffect } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import SectionIngredients from './section-ingredients';
import { useSelector } from 'react-redux';
import { RootState } from 'services/store';
import IngredientDetails from 'components/ingredient-details/ingredient-details';
import Modal from 'components/modal/modal';
import { isModalWindowsIngridient } from 'services/actions/ingredients';

type ingredientType = 'bun' | 'sauce' | 'main';

export const BurgerIngredients = (): JSX.Element => {
  const isModalOpen = useSelector(
    (store: RootState) => store.igridients.isModalOpenIngridients
  );

  const refBun = useRef<HTMLElement>(null);
  const refSause = useRef<HTMLElement>(null);
  const refMain = useRef<HTMLElement>(null);
  const refSectionIngredients = useRef<HTMLDivElement>(null);

  useEffect(() => {
    refSectionIngredients.current.addEventListener('scroll', () => {
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
    });
  }, []);

  // данные для отрисовки ингридиентов
  const dataIngredients = useSelector(
    (store: RootState) => store.igridients.listIgridients
  );

  // переключение табов
  const [current, setCurrent] = useState<ingredientType>('bun');

  const ModalWindow: React.FC = () => {
    return (
      <Modal
        isModalWindows={isModalWindowsIngridient}
        title='Детали Ингридиента'
      >
        <IngredientDetails />
      </Modal>
    );
  };

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
            onClick={() => {
              setCurrent('bun');
              refBun.current.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Булки
          </Tab>
          <Tab
            value='sauce'
            active={current === 'sauce'}
            onClick={() => {
              setCurrent('sauce');
              refSause.current.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Соусы
          </Tab>
          <Tab
            value='main'
            active={current === 'main'}
            onClick={() => {
              setCurrent('main');
              refMain.current.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Начинки
          </Tab>
        </div>
        <div className={`${styles.wrapper} mb-5`} ref={refSectionIngredients}>
          <SectionIngredients
            refElem={refBun}
            title='Булки'
            dataIngredients={dataIngredients.filter(
              (elem: { type: string }) => elem.type === 'bun'
            )}
          />
          <SectionIngredients
            refElem={refSause}
            title='Соусы'
            dataIngredients={dataIngredients.filter(
              (elem: { type: string }) => elem.type === 'sauce'
            )}
          />
          <SectionIngredients
            refElem={refMain}
            title='Начинки'
            dataIngredients={dataIngredients.filter(
              (elem: { type: string }) => elem.type === 'main'
            )}
          />
        </div>
      </section>
      {isModalOpen && <ModalWindow />}
    </>
  );
};

export default BurgerIngredients;
