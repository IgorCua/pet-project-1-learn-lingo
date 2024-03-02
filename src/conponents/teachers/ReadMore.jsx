import css from './ReadMore.module.scss';
import Icon from "../icon/Icon";

export const ReadMore = ({reviews, experience}) => {
    
    return <section className={css.container}>
        
        <p className={css.experienceText}>{experience}</p>

        <ul className={css.repliesList}>
            {reviews.map((review, i) => {
                return <li key={i} className={css.repliesItem}>
                    <div className={css.itemContainer}>
                        <div className={css.imageContainer}>
                            <Icon className={css.avatar} name={'#icon-avatar-default'}/>
                        </div>

                        <div className={css.nameContainer}>
                            <p className={css.name}>{review.reviewer_name}</p>

                            <div className={css.svgContainer}>
                                <Icon className={css.svg} name={'#icon-star'}/>
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