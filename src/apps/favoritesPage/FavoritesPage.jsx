import { useDispatch, useSelector } from "react-redux";
import Section from "../../conponents/section/Section";
import { TeachersCard } from "../../conponents/teacherCard/TeacherCard";
import { 
    selectUserID,
    selectUserFavoritesStr, 
    selectUserFavoriteTeachersObj
} from "../../redux/auth/selectors";
import { useEffect, useMemo } from "react";
import { getFavoriteTeachersList } from "../../redux/auth/operations";
import css from './FavoritesPage.module.scss';


export const FavoritesPage = () => {
    const favoriteTeachersObj = useSelector(selectUserFavoriteTeachersObj);
    const favoriteTeachersKeysArr = (favoriteTeachersObj) ? Object.keys(favoriteTeachersObj) : null;
    const userFavoritesStr = useSelector(selectUserFavoritesStr);
    const userID = useSelector(selectUserID);
    const dispatch = useDispatch();
    
    const teachersLengthMemo = useMemo(() => {
        const favArr = userFavoritesStr ? userFavoritesStr.split(', ').length : null;
        return favArr;
    }, [userFavoritesStr]);

    useEffect(()=>{
        if (!favoriteTeachersObj) {
            dispatch(getFavoriteTeachersList(userID));
        }
        if (favoriteTeachersKeysArr.length !== teachersLengthMemo) {
            dispatch(getFavoriteTeachersList(userID));
        }
    },[
        favoriteTeachersObj, 
        favoriteTeachersKeysArr, 
        dispatch, 
        teachersLengthMemo,
        userID
    ]);

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