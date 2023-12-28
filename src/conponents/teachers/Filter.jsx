import clsx from "clsx";
import css from "./Filter.module.scss";
import { useState, useRef, useEffect } from "react";
// import './Selector.module.scss';
// import sprite from '../../../assets/icons/icons.svg';
// import 'overlayscrollbars/over';
// import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

const carBrands = ["Toyota", "Lexus", "Honda", "Acura", "Chevrolet", "Chevrolet corvette", "Ford", "Kia", "Chrysler", "Hundai", "Hummer", "Subaru", "Suzuki", "Nissan",];
const pricePerHour = [ "30", "40", "50", "60", "70", "80", "90", "100", "110", "120", "130", "140", "150", "160", "170", "180", "190", "200",];

export const Filter = ({ filterObj, setFilterObj }) => {
    const [modelIsActive, setModelIsActive] = useState(false);
    const [perOurIsActive, setPerOurIsActive] = useState(false);
    const [carModelInput, setCarModelInput] = useState('');
    const [priceInput, setPriceInput] = useState('');
    // const [theme, setTheme] = useState('dark');
    let modelRef = useRef(null);
    let perOurRef = useRef(null);

    const handleSubmit = (event) => {
        const form = event.currentTarget.elements;
        event.preventDefault();
        // event.target.reset();
        // console.log(filterObj)
        // console.log(form.carModel.value);
        // console.log(form.perHour.value);
        // console.log(form.mileAgeFrom.value);
        // console.log(form.mileAgeTo.value);
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

        if (eventId === "carModel") {
            setModelIsActive(!modelIsActive);
        }

        if (eventId === "pricePerHour") {
            setPerOurIsActive(!perOurIsActive);
        }

        if (event.target.localName === "li") {
            currTargetId === "carModel"
                ? (currentSelect = modelRef.current.children[1]) && setModelIsActive(!modelIsActive)
                : (currentSelect = perOurRef.current.children[1]) && setPerOurIsActive(!perOurIsActive)
            
            currentSelect.value = event.target.innerText;
        }
    };

    function handleClickOutside(event) {
        if (modelRef.current && !modelRef.current.contains(event.target)) {
            setModelIsActive(false);
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
    }, [modelRef, perOurRef]);

    const handleInputChange = (event) => {
        const eventId = event.target.id;
        const eventVal = event.currentTarget.value;
        // console.log('on change', event);

        if (eventId === "carModel") {
            // console.log('', event.currentTarget.value)
            setCarModelInput(eventVal);
        }

        if (eventId === "pricePerHour") {
            setPriceInput(eventVal);
        }
        // console.log(carModelInput)
    }
    
    return (
        <div className={css.container}>
            <form className={css.form} onSubmit={handleSubmit}>
                <div
                    ref={modelRef}
                    className={css.modelContainer}
                    onClick={handleSelect}
                >
                    <label className={css.formLabel} htmlFor="carModel">
                        Car brand
                    </label>
                    <input
                        className={css.carModel}
                        name="carModel"
                        id="carModel"
                        type="text"
                        placeholder="enter the text"
                        autoComplete="off"
                        onChange={handleInputChange}
                    ></input>
                    
                    <ul
                        id="carModelId"
                        className={clsx(css.list, [
                            modelIsActive && css.modelActive,
                        ])}
                    >
                        
                        {carBrands.map((elem, i) => {
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
                </div>
                <div
                    ref={perOurRef}
                    className={css.containerPerHour}
                    onClick={handleSelect}
                >
                    <label className={css.formLabel} htmlFor="pricePerHour">
                        Price / 1 hour
                    </label>
                    <input
                        className={css.perHour}
                        name="perHour"
                        id="pricePerHour"
                        type="text"
                        placeholder="to $"
                        autoComplete="off"
                        onChange={handleInputChange}
                    ></input>
                    <ul
                        className={clsx(
                            css.listPerHour,
                            perOurIsActive && css.perOurActive
                        )}
                    >
                        {pricePerHour.map((elem, i) => {
                            return (<li className={css.listPerHourItem} key={i}>
                                    {elem}
                                </li>
                            );
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