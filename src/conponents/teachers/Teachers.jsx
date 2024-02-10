import { useDispatch, useSelector } from 'react-redux';
import css from './Teachers.module.scss';
import { 
    selectTeachersList,
    selectListID
} from '../../redux/teachers/selectors';
import { getTeachersList } from '../../redux/teachers/operations'; 
import { TeachersCard } from './TeacherCard';
import Section from '../section/Section';
import { Filter } from '../filter/Filter';
import { useEffect, useState } from 'react';
import { Backdrop } from '../modal/Backdrop';

export const Teachers = () => {
    const dispatch = useDispatch();
    const teachersList = useSelector(selectTeachersList);
    const listID = useSelector(selectListID);
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const reviewsList = teachersList.reviews;
    const teachersListKeys = Object.keys(teachersList);
    // console.log(teachersList);
    const [filterPrams, setFilterParams] = useState(null);

    console.log('Teachers filterParams', filterPrams);

    const handleFilter = (obj) =>{
        setFilterParams(obj)
        console.log('TEST setFilterParams', teachersList)
    }
    // console.log(teachersList)
    const handleTeachersList = (teachersList) => {
        // console.log(teachersList)
        
    }

    handleTeachersList(teachersList)

    const handleLoadMore = () => {
        console.log("LIST_ID", listID);
        dispatch(getTeachersList(listID));
    }
    
    return (
        <div className={css.container}>
            <Section>
                <div className={css.elementsContainer}>
                    {window.innerWidth < 768 
                        ? <button 
                            type='button' 
                            className={css.button}
                            onClick={()=>setIsModalOpen(true)}>Open filter</button>
                        : <Filter filterPrams={filterPrams} handleFilter={handleFilter}/>
                    }
                    {isModalOpen &&
                        <Backdrop isModalOpen={setIsModalOpen}>
                            <Filter filterPrams={filterPrams} handleFilter={handleFilter}/>
                        </Backdrop>
                    }
                    
                    <ul className={css.list}>
                        {teachersListKeys.map((elem, i) => {
                            console.log(teachersList[elem])
                            return <li key={i} className={css.item}>
                                <TeachersCard key={i} elem={teachersList[elem]}/>
                            </li>
                        })}
                    </ul>

                    <button 
                        type='button' 
                        className={css.loadMore_btn}
                        onClick={handleLoadMore}
                    >Load more</button>
                </div>
            </Section>
        </div>
    )
}