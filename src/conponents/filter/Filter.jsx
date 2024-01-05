import clsx from "clsx";
import css from "./Filter.module.scss";
import { useState, useRef, useEffect, memo } from "react";
// import './Selector.module.scss';
// import sprite from '../../../assets/icons/icons.svg';
// import 'overlayscrollbars/over';
// import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

const languages = ['All', 'French', 'English', 'German', 'Ukrainian', 'Polish'];
const knowledge = ['All', 'A1 Beginner', 'A2 Elementary', 'B1 Intermediate', 'B2 Upper-Intermediate'];
const pricePerHour = ['All', '10', '20', '30', '40'];

export const Filter = ({ filterObj, setFilterObj }) => {
    const [languagesIsActive, setLanguagesIsActive] = useState(false);
    const [perOurIsActive, setPerOurIsActive] = useState(false);
    const [knowledgeIsActive, setKnowledgeIsActive] = useState(false);
    const [languagesInput, setLanguagesInput] = useState('All');
    const [knowledgeInput, setKnowledgeInput] = useState('All');
    const [priceInput, setPriceInput] = useState('All');
    // const [theme, setTheme] = useState('dark');
    // let priceInput = 'All';
    let languagesRef = useRef(null);
    let perOurRef = useRef(null);
    let knowledgeRef = useRef(null);

    // console.log('start', priceInput);

    const handleSubmit = (event) => {
        const form = event.currentTarget.elements;
        event.preventDefault();
        // console.log('form', form.priceInput.value)
        // console.log('form', form.knowledgeInput.value)
        // console.log('form', form.languagesInput.value)

        // setFilterObj({
        //     language: form.languagesInput.value,
        //     knowledge: form.knowledgeInput.value,
        //     price: form.priceInput.value
            
        // });
    };

    const handleSelect = (event) => {
        const currTargetId = event.currentTarget.children[1].id;
        const eventId = event.target.id;
        
        if (eventId === "languagesInput") {
            setLanguagesIsActive(!languagesIsActive);
        }

        if(eventId === 'knowledgeInput') {
            setKnowledgeIsActive(!knowledgeIsActive);
            // console.log(knowledgeIsActive)
        }

        if (eventId === "priceInput") {
            setPerOurIsActive(!perOurIsActive);
            // setPriceInput(event.target.innerText);
        }

        if (event.target.localName === "li") {
            if (currTargetId === 'languagesInput') {
                setLanguagesInput(event.target.innerText);
                setLanguagesIsActive(!languagesIsActive);
            }
            if (currTargetId === 'knowledgeInput') {
                setKnowledgeInput(event.target.innerText);
                setKnowledgeIsActive(!knowledgeIsActive);
            }
            if (currTargetId === 'priceInput') {
                setPriceInput(event.target.innerText);
                setPerOurIsActive(!perOurIsActive);
            }
                // console.log("currentSelect", currentSelect);
            // currentSelect.value = event.target.innerText;
            // console.log('currTargetId', currTargetId)
            // console.log('evt target ', event.target.innerText);
            // console.log("input", priceInput);
            // console.log("currentSelect", currentSelect);
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

    // console.log('end', priceInput)
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
                        id="languagesInput"
                        type="text"
                        readOnly
                        value={languagesInput}
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
                                return (<li key={i} className={clsx(
                                    css.listItem,
                                    [elem === languagesInput && css.active]
                                )}>{elem}</li>);
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
                        ? <label className={css.formLabel} htmlFor="knowledgeInput">Level of knowledge</label>
                        : <label className={css.formLabel} htmlFor="knowledgeInput">Level</label>
                    }
                    <input 
                        className={css.knowledgeInput}
                        id="knowledgeInput"
                        name=""
                        readOnly 
                        value={knowledgeInput}
                    />
                    
                    {knowledgeIsActive && <ul className={clsx(
                        css.knowledgeList,
                        [knowledgeIsActive && css.knowledgeListActive]
                    )}>
                        {knowledge.map((elem, i)=>{
                            // console.log('MAP', elem)
                            return <li 
                                key={i} 
                                className={clsx(
                                    css.knowledgeItem, 
                                    [elem === knowledgeInput && css.active]
                                )}
                            >
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
                    <label className={css.formLabel} htmlFor="priceInput">
                        Price
                    </label>
                    <input
                        className={css.perHourInput}
                        // name="perHour"
                        id="priceInput"
                        type="text"
                        // placeholder="Price"
                        // autoComplete="off"
                        readOnly
                        // onChange={handleInputChange}
                        value={priceInput}
                    />
                    {<ul
                        className={clsx(
                            css.listPerHour,
                            perOurIsActive && css.perOurActive
                        )}
                    >
                        {pricePerHour.map((elem, i) => {
                            return (<li 
                                key={i}
                                className={clsx(
                                    css.listPerHourItem, 
                                    [elem === priceInput && css.active]
                                )} 
                            >
                                {elem}
                            </li>);
                        })}
                    </ul>}
                </div>

                <button className={css.submit} type="submit">
                    Search
                </button>
            </form>
        </div>
    );
};