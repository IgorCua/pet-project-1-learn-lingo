import clsx from "clsx";
import css from "./Filter.module.scss";
import { useState, useRef, useEffect } from "react";
// import './Selector.module.scss';
// import sprite from '../../../assets/icons/icons.svg';
// import 'overlayscrollbars/over';
// import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

const languages = ['All', 'French', 'English', 'German', 'Ukrainian', 'Polish'];
const pricePerHour = [ "30", "40", "50", "60", "70", "80", "90", "100", "110", "120", "130", "140", "150", "160", "170", "180", "190", "200",];

export const Filter = ({ filterObj, setFilterObj }) => {
    const [languagesIsActive, setLanguagesIsActive] = useState(false);
    const [perOurIsActive, setPerOurIsActive] = useState(false);
    const [carModelInput, setCarModelInput] = useState('');
    const [priceInput, setPriceInput] = useState('');
    // const [theme, setTheme] = useState('dark');
    let languagesRef = useRef(null);
    let perOurRef = useRef(null);

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

        if (eventId === "languages") {
            setLanguagesIsActive(!languagesIsActive);
        }

        if (eventId === "pricePerHour") {
            setPerOurIsActive(!perOurIsActive);
        }

        if (event.target.localName === "li") {
            currTargetId === "languages"
                ? (currentSelect = languagesRef.current.children[1]) && setLanguagesIsActive(!languagesIsActive)
                : (currentSelect = perOurRef.current.children[1]) && setPerOurIsActive(!perOurIsActive)
            
            currentSelect.value = event.target.innerText;
        }
    };

    function handleClickOutside(event) {
        if (languagesRef.current && !languagesRef.current.contains(event.target)) {
            setLanguagesIsActive(false);
        }
        if (perOurRef.current && !perOurRef.current.contains(event.target)) {
            setPerOurIsActive(false);
        }
    }
    

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [languagesRef, perOurRef]);

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
                        className={css.languages}
                        name="languages"
                        id="languages"
                        type="text"
                        placeholder="enter the text"
                        autoComplete="off"
                        // onChange={handleInputChange}
                    ></input>
                    
                    {languagesIsActive && <ul
                            id="carModelId"
                            className={clsx(css.list, [languagesIsActive && css.languagesActive])}
                        >
                            
                            {languages.map((elem, i) => {
                                const regExp = new RegExp(carModelInput, 'i');

                                if(carModelInput === '') {
                                    return (<li key={i} className={css.listItem}>{elem}</li>);
                                }
                                if(elem.match(regExp)){
                                    return (<li key={i} className={css.listItem}>{elem}</li>);
                                }
                                return '';
                            })}
                            
                        </ul>
                    }                   
                </div>

                <div className={css.knowlengeSelect}>
                    <label htmlFor="knowlengeSelect">Level of knowledge</label>
                    <div name="select" id="knowlengeSelect" className={css.knowledgeContainer}>
                        <p className={css.knowledgeSelected}>All</p>
                        <ul className={css.knowledgeList}>
                            <li className={css.knowledgeItem}><p>All</p></li>
                            <li className={css.knowledgeItem}><p>A1 Beginner</p></li>
                            <li className={css.knowledgeItem}><p>A2 Elementary</p></li>
                            <li className={css.knowledgeItem}><p>B1 Intermediate</p></li>
                            <li className={css.knowledgeItem}><p>B2 Upper-Intermediate</p></li>
                        </ul>
                    </div>
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
                        className={css.perHour}
                        name="perHour"
                        id="pricePerHour"
                        type="text"
                        placeholder="to $"
                        autoComplete="off"
                        // onChange={handleInputChange}
                    ></input>
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