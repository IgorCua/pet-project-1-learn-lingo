import { useSelector } from "react-redux"
import { 
    selectTeachersList
} from '../../redux/teachers/selectors';
import sprite from '../../assets/icons/icons.svg';
import css from './Replies.module.scss';

export const Replies = ({reviews}) => {
    // const teachersList = useSelector(selectTeachersList);
    console.log(reviews)
    
    return <div>
        <ul className={css.repliesList}>
            {reviews.map((review, i) => {
                // const {review} = elem;
                return <li key={i} className={css.repliesItem}>
                    <div>
                        <img src="" alt="" />
                        <p>{review.reviewer_name}</p>
                        <div>
                            <svg>
                                <use href={sprite + '#icon-star'}/>
                            </svg>
                            <p>{review.reviewer_rating}</p>
                        </div>
                    </div>
                    <p>{review.comment}</p>
                </li>
            })}
        </ul>
    </div>
}