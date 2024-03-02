import { ReadMore } from './ReadMore';
import css from './TeacherCard.module.scss';
import sprite from '../../assets/icons/icons.svg';
import { useEffect, useState, useMemo } from 'react';
import { Backdrop } from '../modal/Backdrop';
import { BookLesson } from '../modal/BookLesson';
import { selectIsLoggedIn, selectUserFavoritesStr, selectUserID } from '../../redux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { updateFavorites } from '../../redux/auth/operations';
import Notiflix from 'notiflix';

export const TeachersCard = ({elem, i, id}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const dispatch = useDispatch();
    const userFavoritesStr = useSelector(selectUserFavoritesStr);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const userID = useSelector(selectUserID);
    const favArr = userFavoritesStr ? userFavoritesStr.split(', ') : null;
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

    const handleUpdateFavorite = () => {
        // console.log('hello', id);
        if (isLoggedIn) {
            setIsFavorite(!isFavorite);
            dispatch(updateFavorites({userID: userID, teacherID: id}));
        } else {
            // Notiflix.Notify.info('Cogito ergo sum');
            Notiflix.Report.info(
                'Unauthorized', 
                'Register or Login to be able to update favorites.', 
                'OK',
                {
                    info: {
                        // background: '#F4C550',
                        svgColor: 'rgba(255, 25, 0, 0.7)',
                        buttonBackground: '#F4C550',
                        buttonColor: '#242424',
                        backOverlayColor: 'rgba(55, 55, 55, 0.5)'
                    }
                }
            );
            return
        }
    }

    useEffect(() => {
        if ( favArr && favArr.includes(id)) {
            setIsFavorite(true);
        } else {
            setIsFavorite(false);
        }

    },[ favArr])

    return <article key={i} className={css.article}>
        {!isFavorite  
            ? <svg className={css.headerSvgHeart} onClick={handleUpdateFavorite}>
                <use href={sprite + '#icon-heart'}/>
            </svg>
            : <svg className={css.headerSvgHeart} onClick={handleUpdateFavorite}>
                <use href={sprite + '#icon-heart-filled'}/>
            </svg>
        }
        <figure className={css.teacherImgContainer}>
            <img className={css.teacherImg} src={avatar_url} alt="teacher avatar" />
            <svg className={css.teacherSvg}>
                <use href={sprite + '#icon-elipse'}/>
            </svg>
        </figure>
        <div className={css.contentContainer}>
            <div className={css.headerContainer}>
                <div className={css.header}>
                    <p className={css.headerText}>Languages</p>
                    <h2 className={css.headerName}>{`${name} ${surname}`}</h2>
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
            </ul>

            {!isOpen 
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

            {isOpen && 
                <button 
                    className={css.bookLesson} 
                    type='button'
                    onClick={() => setIsModalOpen(!isModalOpen)}
                >Book</button>
            }
        </div>
        

        {isModalOpen &&
            <Backdrop 
                isModalOpen={setIsModalOpen} 
            >
                <BookLesson 
                    isModalOpen={setIsModalOpen}
                    name={name} 
                    surname={surname} 
                    img={avatar_url}
                />
            </Backdrop>    
        }
    </article>
}