import css from './Home.module.scss';

export const Home = () => {
    return (
        <div>
            <div className={css.getStartedContainer}></div>
            <div className={css.imageContainer}></div>
            <div className={css.stat}></div>
        </div>
    )
}