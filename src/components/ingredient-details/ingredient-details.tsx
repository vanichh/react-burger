import styles from './ingredient-details.module.css';

const IngredientDetails = (props: any) => {
    return (
        <div className={styles.details}>
            <img src={props.images} alt={props.images} />
            <p>{props.name}</p>
            <div className={styles.wpapper}>
                <p className={styles.details__text}>
                    Калории, ккал
                    <br />
                    {props.calories}
                </p>
                <p className={styles.details__text}>
                    Белки, г
                    <br />
                    {props.proteins}
                </p>
                <p className={styles.details__text}>
                    Жиры, г
                    <br />
                    {props.fat}
                </p>
                <p className={styles.details__text}>
                    Углеводы, г
                    <br />
                    {props.carbohydrates}
                </p>
            </div>
        </div>
    );
};

export default IngredientDetails;
