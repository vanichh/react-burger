import styles from './burger-ingredients.module.css';
import ElemBurgerIngredients from './elem-burger-ingredients';
import DataProps from '../../utils/types';

interface PropsSectionIngredients {
  title: string;
  dataIngredients: DataProps[];
  refElem: React.RefObject<HTMLElement>;
}

const CLASSNAME_TITLE = 'text text_type_main-medium mb-4';

const SectionIngredients = (props: PropsSectionIngredients) => {
  
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

export default SectionIngredients;
