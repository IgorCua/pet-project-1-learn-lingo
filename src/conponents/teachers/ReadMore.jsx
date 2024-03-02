import { useSelector } from "react-redux"
import { 
    selectTeachersList
} from '../../redux/teachers/selectors';
import sprite from '../../assets/icons/icons.svg';
import css from './ReadMore.module.scss';

export const ReadMore = ({reviews, experience}) => {
    // const teachersList = useSelector(selectTeachersList);
    // console.log(reviews)
    
    return <section className={css.container}>
        
        <p className={css.experienceText}>{experience}</p>

        <ul className={css.repliesList}>
            {reviews.map((review, i) => {
                // const {review} = elem;
                return <li key={i} className={css.repliesItem}>
                    <div className={css.itemContainer}>
                        <div className={css.imageContainer}>
                            <svg className={css.avatar}>
                                <use href={sprite + '#icon-avatar-default'}/>
                            </svg>
                        </div>

                        <div className={css.nameContainer}>
                            <p className={css.name}>{review.reviewer_name}</p>

                            <div className={css.svgContainer}>
                                <svg className={css.svg}>
                                    <use href={sprite + '#icon-star'}/>
                                </svg>
                                <p className={css.rating}>{review.reviewer_rating}</p>
                            </div>
                        </div>
                    </div>
                    <p className={css.comment}>{review.comment}</p>
                </li>
            })}
        </ul>
    </section>
}