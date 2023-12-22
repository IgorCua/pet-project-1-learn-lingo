import { useDispatch, useSelector } from 'react-redux';
import css from './Teachers.module.scss';
import { 
    selectTeachersList
} from '../../redux/teachers/selectors';
import { nanoid } from '@reduxjs/toolkit';
import sprite from '../../assets/icons/icons.svg';
import { Replies } from './ReadMore';
import { TeachersCard } from './TeacherCard';
import Section from '../section/Section';

export const Teachers = () => {
    const dispatch = useDispatch();
    const teachersList = useSelector(selectTeachersList);
    // const reviewsList = teachersList.reviews;

    console.log(teachersList);

    return (
        <div className={css.container}>
            <Section>
                    {teachersList.map((elem, i) => {
                        // console.log(reviews)
                        return <TeachersCard key={i} elem={elem}/>
                    })}
            </Section>
        </div>
    )
}