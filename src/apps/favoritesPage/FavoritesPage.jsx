import { useDispatch, useSelector } from "react-redux";
import Section from "../../conponents/section/Section";
import { TeachersCard } from "../../conponents/teacherCard/TeacherCard";
import { 
    selectUserID,
    selectUserFavoritesStr, 
    selectUserFavoriteTeachersObj
} from "../../redux/auth/selectors";
import { useEffect } from "react";
import { getFavoriteTeachersList } from "../../redux/auth/operations";
import css from './FavoritesPage.module.scss';


export const FavoritesPage = () => {
    const favoriteTeachersObj = useSelector(selectUserFavoriteTeachersObj);
    const favoriteTeachersKeysArr = (favoriteTeachersObj) ? Object.keys(favoriteTeachersObj) : null;
    const userID = useSelector(selectUserID);
    const dispatch = useDispatch();

    useEffect(()=>{
        if (!favoriteTeachersObj) {
            dispatch(getFavoriteTeachersList(userID));
        }
    },[favoriteTeachersObj])

    return <div className={css.container}>
        <Section>
            <ul className={css.list}>
                {favoriteTeachersKeysArr?.map((elem, i) => {
                    return <li key={i} className={css.listItem}>
                        <TeachersCard elem={favoriteTeachersObj[elem]} id={elem} i={i}/>
                    </li>
                })}
            </ul>
        </Section>
    </div> 
}