import styles from './ingredient-details.module.css';

const IngredientDetails = (props: any) => {
    const styleText = `${styles.details__text} text text_type_main-default text_color_inactive`
    return (
        <>
            <img className='mb-4' src={props.image_large} alt={props.name} />
            <p className='text text_type_main-default mb-8'>{props.name}</p>
            <div className={styles.wpapper}>
                <p className={styleText}>
                    Калории, ккал
                    <br />
                    {props.calories}
                </p>
                <p className={styleText}>
                    Белки, г
                    <br />
                    {props.proteins}
                </p>
                <p className={styleText}>
                    Жиры, г
                    <br />
                    {props.fat}
                </p>
                <p className={styleText}>
                    Углеводы, г
                    <br />
                    {props.carbohydrates}
                </p>
            </div>
        </>
    );
};

export default IngredientDetails;
