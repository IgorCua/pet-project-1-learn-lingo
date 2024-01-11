import { useDispatch, useSelector } from 'react-redux';
import css from './Teachers.module.scss';
import { 
    selectTeachersList
} from '../../redux/teachers/selectors';
import { TeachersCard } from './TeacherCard';
import Section from '../section/Section';
import { Filter } from '../filter/Filter';
import { useEffect, useState } from 'react';
import { Backdrop } from '../modal/Backdrop';

export const Teachers = () => {
    const dispatch = useDispatch();
    const teachersList = useSelector(selectTeachersList);
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const reviewsList = teachersList.reviews;

    // console.log(teachersList);
    const [filterPrams, setFilterParams] = useState(null);

    console.log('Teachers filterParams', filterPrams);

    const handleFilter = (obj) =>{
        setFilterParams(obj)
        console.log('TEST setFilterParams', teachersList)
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
                        {teachersList.map((elem, i) => {
                            // console.log(reviews)
                            return <li key={i} className={css.item}>
                                <TeachersCard key={i} elem={elem}/>
                            </li>
                        })}
                    </ul>
                </div>
            </Section>
        </div>
    )
}