import clsx from "clsx";
import css from "./Filter.module.scss";
import { useState, useRef, useEffect } from "react";
// import './Selector.module.scss';
// import sprite from '../../../assets/icons/icons.svg';
// import 'overlayscrollbars/over';
// import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

const languages = ['All', 'French', 'English', 'German', 'Ukrainian', 'Polish'];
const knowledge = ['All', 'A1 Beginner', 'A2 Elementary', 'B1 Intermediate', 'B2 Upper-Intermediate'];
const pricePerHour = [ "30", "40", "50", "60", "70", "80", "90", "100", "110", "120", "130", "140", "150", "160", "170", "180", "190", "200",];

export const Filter = ({ filterObj, setFilterObj }) => {
    const [languagesIsActive, setLanguagesIsActive] = useState(false);
    const [perOurIsActive, setPerOurIsActive] = useState(false);
    const [carModelInput, setCarModelInput] = useState('');
    const [priceInput, setPriceInput] = useState('');
    const [knowledgeList, setKnowledgeList] = useState('All');
    const [knowledgeIsActive, setKnowledgeIsActive] = useState(false);
    // const [theme, setTheme] = useState('dark');
    let languagesRef = useRef(null);
    let perOurRef = useRef(null);
    let knowledgeRef = useRef(null);

    const handleSubmit = (event) => {
        const form = event.currentTarget.elements;
        event.preventDefault();
        setFilterObj({
            model: form.carModel.value,
            pricePerHour: form.perHour.value,
            mileAgeFrom: form.mileAgeFrom.value,
            mileAgeTo: form.mileAgeTo.value,
        });
    };

    const handleSelect = (event) => {
        const currTargetId = event.currentTarget.children[1].id;
        const eventId = event.target.id;
        let currentSelect;
        // console.log('event', event);
        console.log('event currentTarget', event.currentTarget.children[1].id);
        console.log(event.target)
        if (eventId === "languages") {
            setLanguagesIsActive(!languagesIsActive);
        }

        if(eventId === 'knowlengeSelect') {
            setKnowledgeIsActive(!knowledgeIsActive);
            // console.log(knowledgeIsActive)
        }

        if (eventId === "pricePerHour") {
            setPerOurIsActive(!perOurIsActive);
        }

        if (event.target.localName === "li") {
            // currTargetId === "languages"
            //     ? (currentSelect = languagesRef.current.children[1]) && setLanguagesIsActive(!languagesIsActive)
            //     : (currentSelect = perOurRef.current.children[1]) && setPerOurIsActive(!perOurIsActive)
            currTargetId === 'languages' ? (currentSelect = languagesRef.current.children[1]) && setLanguagesIsActive(!languagesIsActive)
            : currTargetId === 'knowlengeSelect' ? (currentSelect = knowledgeRef.current.children[1]) && setKnowledgeIsActive(!knowledgeIsActive)
            : (currentSelect = perOurRef.current.children[1]) && setPerOurIsActive(!perOurIsActive)
            
            console.log('LI currTargetId', currTargetId);
            console.log('LI eventId', eventId)
            console.log('LI event', event);   
            // console.log("HandleSelect", currentSelect.value);
            // console.log('HandleSelect', event.target.innerText);
            currentSelect.value = event.target.innerText;
            // event.target.innerText = currentSelect.value
        }
    };

    function handleClickOutside(event) {
        if (languagesRef.current && !languagesRef.current.contains(event.target)) {
            setLanguagesIsActive(false);
        }
        if (perOurRef.current && !perOurRef.current.contains(event.target)) {
            setPerOurIsActive(false);
        }
        if(knowledgeRef.current && !knowledgeRef.current.contains(event.target)) {
            setKnowledgeIsActive(false);
        }
    }
    

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [languagesRef, perOurRef, knowledgeRef]);

    // const handleInputChange = (event) => {
    //     const eventId = event.target.id;
    //     const eventVal = event.currentTarget.value;
    //     // console.log('on change', event);

    //     if (eventId === "languages") {
    //         // console.log('', event.currentTarget.value)
    //         setCarModelInput(eventVal);
    //     }

    //     if (eventId === "pricePerHour") {
    //         setPriceInput(eventVal);
    //     }
    //     // console.log(carModelInput)
    // }
    
    const isItemActive = (elem, state) => {
        console.log("isItemActive", elem)
        console.log("state", state)
        return elem === state ? true : false;
    }

    return (
        <div className={css.container}>
            <form className={css.form} onSubmit={handleSubmit}>
                <div
                    ref={languagesRef}
                    className={css.modelContainer}
                    onClick={handleSelect}
                >
                    <label className={css.formLabel} htmlFor="languages">
                        Languages
                    </label>
                    <input
                        className={css.languagesInput}
                        // name="languages"
                        id="languages"
                        type="text"
                        readOnly
                    />
                    
                    {languagesIsActive && 
                        <ul
                            id="carModelId"
                            className={clsx(
                                css.list, 
                                [languagesIsActive && css.languagesActive]
                            )}
                        >
                            
                            {languages.map((elem, i) => {
                                return (<li key={i} className={css.listItem}>{elem}</li>);
                            })}
                        </ul>
                    }                   
                </div>

                <div 
                    className={css.knowlengeSelect}
                    ref={knowledgeRef}
                    onClick={handleSelect}
                >
                    {window.innerWidth > 767
                        ? <label className={css.formLabel} htmlFor="knowlengeSelect">Level of knowledge</label>
                        : <label className={css.formLabel} htmlFor="knowlengeSelect">Level</label>
                    }
                    <input 
                        className={css.knowledgeInput}
                        id="knowlengeSelect"
                        readOnly 
                    />
                    
                    {knowledgeIsActive && <ul className={clsx(
                        css.knowledgeList,
                        [knowledgeIsActive && css.knowledgeListActive]
                    )}>
                        {knowledge.map((elem, i)=>{
                            // console.log('MAP', elem)
                            return <li key={i} className={clsx(
                                css.knowledgeItem, 
                                // [isItemActive(elem, knowledge) && css.knowledgeActive]
                            )}>
                                {elem}
                            </li>
                        })}
                    </ul>}
                </div>

                <div
                    ref={perOurRef}
                    className={css.containerPerHour}
                    onClick={handleSelect}
                >
                    <label className={css.formLabel} htmlFor="pricePerHour">
                        Price
                    </label>
                    <input
                        className={css.perHourInput}
                        name="perHour"
                        id="pricePerHour"
                        type="text"
                        // placeholder="Price"
                        // autoComplete="off"
                        readOnly
                        // onChange={handleInputChange}
                    />
                    <ul
                        className={clsx(
                            css.listPerHour,
                            perOurIsActive && css.perOurActive
                        )}
                    >
                        {pricePerHour.map((elem, i) => {
                            return (<li className={css.listPerHourItem} key={i}>{elem}</li>);
                        })}
                    </ul>
                </div>

                <button className={css.submit} type="submit">
                    Search
                </button>
            </form>
        </div>
    );
};