import { useDispatch, useSelector } from 'react-redux';
import css from './Teachers.module.scss';
import { 
    selectTeachersList
} from '../../redux/teachers/selectors';
import { nanoid } from '@reduxjs/toolkit';

export const Teachers = () => {
    const dispatch = useDispatch();
    const teachersList = useSelector(selectTeachersList);
    // const reviewsList = teachersList.reviews;

    console.log(teachersList);

    return (
        <section>
            {teachersList.map((elem, i) => {
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
                    levels
                } = elem;

                return <div key={i}>
                    <div className={css.headerContainer}>
                        <div className={css.header}>
                            <p className={css.headerText}>Languages</p>
                            <h2 className={css.headerHeader}>{`${name} ${surname}`}</h2>
                        </div>
                        
                        <ul className={css.headerList}>
                            <li className={css.headerItem}>
                                <svg className={css.headerSvgBook}>

                                </svg>
                                <p>Lessons online</p>
                            </li>
                            <li className={css.headerItem}>
                                <p>Lessons done: {lessons_done}</p>
                            </li>
                            <li className={css.headerItem}>
                                <svg className={css.headerSvgStar}>

                                </svg>
                                <p>Rating: {rating}</p>
                            </li>
                            <li className={css.headerItem}>
                                <p>Price / 1 hour: <span>{price_per_hour}$</span></p>
                            </li>
                        </ul>
                        <svg className={css.headerSvgHeart}>

                        </svg>
                    </div>
                   
                    <ul className={css.descriptionList}>
                        <li className={css.descriptionItem}>Speaks: {languages.join(', ')}</li>
                        <li className={css.descriptionItem}>Lesson info: {lesson_info}</li>
                        <li className={css.descriptionItem}>Conditions: {conditions.join(' ')}</li>
                        <li className={css.descriptionItem}>{experience}</li>
                    </ul>

                    <p className={css.readMore}>Read more</p>

                    <ul className={css.repliesList}>
                        {reviews.map((review, i) => {
                            console.log(review)
                            return <li key={i} className={css.repliesItem}>
                                <div>
                                    <img src="" alt="" />
                                    <p>{review.reviewer_name}</p>
                                    <div>
                                        <svg>

                                        </svg>
                                        <p>{review.reviewer_rating}</p>
                                    </div>
                                </div>
                                <p>{review.comment}</p>
                            </li>
                        })}
                    </ul>
                    
                    <ul className={css.educationList}>
                        {levels.map((elem, i) => {
                            return <li key={i}>
                                <p>{elem}</p>
                            </li>
                        })}
                    </ul>

                    <button type='button'>Book trial lesson</button>
                </div>
            })}
        </section>
    )
}