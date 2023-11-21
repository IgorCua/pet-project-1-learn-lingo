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
                <button className={css.getStartedBtn} type='button'>Get started</button>
            </div>
            <div className={css.imageContainer}>
                <div className={css.imgDecoration}>
                    <div className={css.img}/>
                    <svg className={css.svgPc}>
                        <use href={sprite + "#icon-pc-screen"}/>
                    </svg>
                </div>
            </div>
            <div className={css.stat}>
                <ul className={css.list}>
                    <li className={css.listItem}>
                        <p className={css.listNumber}>32,000+</p>
                        <p className={css.listText}>Experienced tutors</p>
                    </li>
                    <li className={css.listItem}>
                        <p className={css.listNumber}>300,000 +</p>
                        <p className={css.listText}>5-star tutor reviews</p>
                    </li>
                    <li className={css.listItem}>
                        <p className={css.listNumber}>120 +</p>
                        <p className={css.listText}>Subjects taught</p>
                    </li>
                    <li className={css.listItem}>
                        <p className={css.listNumber}>200 +</p>
                        <p className={css.listText}>Tutor nationalities</p>
                    </li>
                </ul>
                <svg className={css.borderSvg}>
                    <use className={css.svgUse} href={sprite + '#dashed-border'}/>
                </svg>
            </div>
        </div>
    )
}