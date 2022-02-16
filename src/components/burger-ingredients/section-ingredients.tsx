import { FC, RefObject } from 'React';
import styles from './burger-ingredients.module.css';
import { ElemBurgerIngredients } from './';
import { IDataProps } from 'utils/types';

interface IPropsSectionIngredients {
  title: string;
  dataIngredients: IDataProps[];
  refElem: RefObject<HTMLElement>;
}

const CLASSNAME_TITLE = 'text text_type_main-medium mb-4';

export const SectionIngredients: FC<IPropsSectionIngredients> = (props) => {
  const { title, dataIngredients, refElem } = props;

  return (
    <section className='pt-5' ref={refElem}>
      <h3 className={CLASSNAME_TITLE}>{title}</h3>
      <div className={styles.ingredients__list}>
        {dataIngredients.map((elem: any) => (
          <ElemBurgerIngredients key={elem._id} {...elem} />
        ))}
      </div>
    </section>
  );
};
