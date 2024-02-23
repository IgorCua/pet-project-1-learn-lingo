import { useDispatch, useSelector } from 'react-redux';
import css from './Teachers.module.scss';
import { 
    selectTeachersList,
    selectListID,
    selectResponseLength
} from '../../redux/teachers/selectors';
import { getTeachersList } from '../../redux/teachers/operations'; 
import { TeachersCard } from './TeacherCard';
import Section from '../section/Section';
import { Filter } from '../filter/Filter';
import { useEffect, useState } from 'react';
import { Backdrop } from '../modal/Backdrop';

export const Teachers = () => {
    const dispatch = useDispatch();
    const listID = useSelector(selectListID);
    const teachersList = useSelector(selectTeachersList);
    const responseLength = useSelector(selectResponseLength);
    const teachersListKeys = Object.keys(teachersList);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filterPrams, setFilterParams] = useState(null);
    const [isLoadMoreHidden, setIsLoadMoreHidden] = useState(false);
    // console.log("responseLength", responseLength)

    console.log('Teachers filterParams', filterPrams);

    const handleFilter = (obj) =>{
        setFilterParams(obj)
    }

    useEffect(()=>{
        if( responseLength && responseLength !== 4) setIsLoadMoreHidden(true);
    },[responseLength])

    const handleLoadMore = () => {
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
                            // console.log(teachersList[elem])
                            return <li key={i} className={css.item}>
                                <TeachersCard key={i} elem={teachersList[elem]} id={elem}/>
                            </li>
                        })}
                    </ul>

                    {!isLoadMoreHidden &&
                        <button 
                            type='button' 
                            className={css.loadMore_btn}
                            onClick={handleLoadMore}
                        >Load more</button>
                    }
                </div>
            </Section>
        </div>
    )
}