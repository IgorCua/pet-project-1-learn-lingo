import { useDispatch, useSelector } from "react-redux";
import Section from "../section/Section";
import { TeachersCard } from "../teachers/TeacherCard";
import { 
    selectUserID,
    selectUserFavoritesStr, 
    selectUserFavoriteTeachersObj
} from "../../redux/auth/selectors";
import { useEffect } from "react";
import { getFavoriteTeachersList } from "../../redux/auth/operations";

export const FavoritesPage = () => {
    const favoriteTeachersObj = useSelector(selectUserFavoriteTeachersObj);
    const favoriteTeachersKeysArr = (favoriteTeachersObj) ? Object.keys(favoriteTeachersObj) : null;
    const userID = useSelector(selectUserID);
    const dispatch = useDispatch();
    // let favoritesListKeys;

    useEffect(()=>{
        if (!favoriteTeachersObj) {
            dispatch(getFavoriteTeachersList(userID));
        }
    },[favoriteTeachersObj])
    // {teachersListKeys.map((elem, i) => {
    //     // console.log(teachersList[elem])
    //     return <li key={i} className={css.item}>
    //         <TeachersCard key={i} elem={teachersList[elem]}/>
    //     </li>
    // })}
    return <Section>
        {favoriteTeachersKeysArr?.map((elem, i) => {
            return <ul>
                <li>
                    <TeachersCard key={i} elem={favoriteTeachersObj[elem]}/>
                </li>
            </ul> 
        })}
    </Section>
}