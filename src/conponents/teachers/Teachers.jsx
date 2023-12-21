import { useDispatch, useSelector } from 'react-redux';
import css from './Teachers.module.scss';
import { 
    selectTeachersList
} from '../../redux/teachers/selectors';
import { nanoid } from '@reduxjs/toolkit';
import sprite from '../../assets/icons/icons.svg';
import { Replies } from './Replies';
import { TeachersCard } from './TeacherCard';

export const Teachers = () => {
    const dispatch = useDispatch();
    const teachersList = useSelector(selectTeachersList);
    // const reviewsList = teachersList.reviews;

    console.log(teachersList);

    return (
        <section>
            {teachersList.map((elem, i) => {
                // console.log(reviews)
                return <TeachersCard elem={elem} i={i}/>
            })}
        </section>
    )
}