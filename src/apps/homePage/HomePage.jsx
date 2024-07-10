import css from './HomePage.module.scss';
import sprite from '../../assets/icons/icons.svg';
import { useNavigate } from 'react-router-dom';
import Section from '../../conponents/section/Section';

export const HomePage = () => {
    const navigate = useNavigate();
    
    return (
        <Section>
            <div className={css.container}>
                <article className={css.getStartedContainer}>
                    <h1 className={css.getStartedHeader}>Unlock your potential with the best <span>language</span> tutors</h1>
                    <main>
                        <p className={css.getStartedText}>
                            Embark on an Exciting Language Journey with Expert Language Tutors: 
                            Elevate your language proficiency to new heights by connecting 
                            with highly qualified and experienced tutors.
                        </p>
                    </main>
                
                    <button 
                        className={css.getStartedBtn} 
                        type='button'
                        onClick={() => navigate("/teachers")}
                    >Get started</button>
                </article>
                
                <figure className={css.imageContainer}>
                    <div className={css.imgDecoration}>
                        <div className={css.img}/>
                        <img 
                            src={require('../../assets/images/pc-screen-1x.png')} 
                            srcSet={`
                                ${require("../../assets/images/pc-screen-1x.png")} 1x, 
                                ${require("../../assets/images/pc-screen-2x.png")} 2x
                            `}
                            className={css.imgPc}>
                        </img>
                    </div>
                </figure>
            </div>
            
            <section className={css.stat}>
                <ul className={css.list}>
                    <li className={css.listItem}>
                        <p className={css.listNumber}>32,000+</p>
                        <p className={css.listText}>Experienced tutors</p>
                    </li>
                    <li className={css.listItem}>
                        <p className={css.listNumber}>300,000+</p>
                        <p className={css.listText}>5-star tutor reviews</p>
                    </li>
                    <li className={css.listItem}>
                        <p className={css.listNumber}>120+</p>
                        <p className={css.listText}>Subjects taught</p>
                    </li>
                    <li className={css.listItem}>
                        <p className={css.listNumber}>200+</p>
                        <p className={css.listText}>Tutor nationalities</p>
                    </li>
                </ul>
                <svg className={css.borderSvg}>
                    <use className={css.svgUse} href={sprite + '#dashed-border'}/>
                </svg>
            </section>
        </Section>
    )
}