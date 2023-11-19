import css from './Home.module.scss';
import sprite from '../../assets/icons/icons.svg';

export const Home = () => {
    return (
        <div className={css.section}>
            <div className={css.getStartedContainer}>
                <h1>Unlock your potential with the best <span>language</span> tutors</h1>
                <p>
                    Embark on an Exciting Language Journey with Expert Language Tutors: 
                    Elevate your language proficiency to new heights by connecting 
                    with highly qualified and experienced tutors.
                </p>
                <button type='button'>Get started</button>
            </div>
            <div className={css.imageContainer}>
                <div className={css.imgDecoration}>
                    <div className={css.img}/>
                    <svg className={css.svg}>
                        <use href={sprite + "#icon-pc-screen"}/>
                    </svg>
                </div>
            </div>
            <div className={css.stat}></div>
        </div>
    )
}