import { ReadMore } from './ReadMore';
import css from './TeacherCard.module.scss';
import sprite from '../../assets/icons/icons.svg';
import { useState } from 'react';

export const TeachersCard = ({elem, i}) => {
    const [isOpen, setIsOpen] = useState(false);
    const {
        name, 
        surname, 
        lessons_done, 
        rating, 
        price_per_hour, 
        languages, 
        lesson_info, 
        conditions, 
        experience, 
        reviews,
        levels,
        avatar_url
    } = elem;

    const handleReadMore = () => {
        setIsOpen(!isOpen);
    }

    return <article key={i} className={css.article}>
        <figure className={css.teacherImgContainer}>
            <img className={css.teacherImg} src={avatar_url} alt="teacher avatar" />
            <svg className={css.teacherSvg}>
                <use href={sprite + '#icon-elipse'}/>
            </svg>
        </figure>
        <div className={css.headerContainer}>
            <div className={css.header}>
                <p className={css.headerText}>Languages</p>
                <h2 className={css.headerHeader}>{`${name} ${surname}`}</h2>
            </div>
            
            <ul className={css.headerList}>
                <li className={css.headerItem}>
                    <div className={css.itemContainer}>
                        <svg className={css.itemSvg}>
                            <use href={sprite + '#icon-book-opened'}/>
                        </svg>
                        <p className={css.itemText}>Lessons online</p>
                    </div>
                </li>
                <li className={css.headerItem}>
                    <p className={css.itemText}>Lessons done: </p>
                    <p className={css.itemSpan}>{lessons_done}</p>
                </li>
                <li className={css.headerItem}>
                    <div className={css.itemContainer}>
                        <svg className={css.itemSvg}>
                            <use href={sprite + '#icon-star'}/>
                        </svg>
                        <p className={css.itemText}>Rating: </p>
                    </div>
                    
                    <p className={css.itemSpan}>{rating}</p>
                </li>
                <li className={css.headerItem}>
                    <p className={css.itemText}>Price / 1 hour: </p>
                    <p className={css.price}>{price_per_hour}$</p>
                </li>
            </ul>
            <svg className={css.headerSvgHeart}>
                <use href={sprite + '#icon-heart'}/>
            </svg>
        </div>
    
        <ul className={css.descriptionList}>
            <li className={css.descriptionItem}>
                <p className={css.descriptionText}>
                    Speaks: <span className={css.descriptionSpan}>{languages.join(', ')}</span>
                </p>
            </li>
            <li className={css.descriptionItem}>
                <p className={css.descriptionText}>
                    Lesson info: <span className={css.descriptionSpan}>{lesson_info}</span>
                </p>
            </li>
            <li className={css.descriptionItem}>
                <p className={css.descriptionText}>
                    Conditions: <span className={css.descriptionSpan}>{conditions.join(' ')}</span>
                </p>
            </li>
            {/* <li className={css.descriptionItem}>
                <p className={css.descriptionText}>{experience}</p>
            </li> */}
        </ul>

        {   
            !isOpen 
                ? <p className={css.readMore} onClick={handleReadMore}>Read more</p>
                : <ReadMore reviews={reviews} experience={experience}/>
        } 
        
        <ul className={css.educationList}>
            {levels.map((elem, i) => {
                return <li key={i} className={css.educationList_item}>
                    <p>{`#${elem}`}</p>
                </li>
            })}
        </ul>

        {
            isOpen && 
            <button className={css.bookLesson} type='button'>Book trial lesson</button>
        }
    </article>
}