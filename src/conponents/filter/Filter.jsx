// import clsx from "clsx";
import css from "./Filter.module.scss";
import { useState, useRef, useEffect, memo } from "react";
import { Input } from "./Input";

const languages = ['All', 'French', 'English', 'German', 'Ukrainian', 'Polish'];
const knowledge = ['All', 'A1 Beginner', 'A2 Elementary', 'B1 Intermediate', 'B2 Upper-Intermediate'];
const priceList = ['All', '10', '20', '30', '40'];

export const Filter = ({ filterPrams, handleFilter }) => {
    const [languagesIsActive, setLanguagesIsActive] = useState(false);
    const [knowledgeIsActive, setKnowledgeIsActive] = useState(false);
    const [priceIsActive, setPriceIsActive] = useState(false);
    const [languagesInput, setLanguagesInput] = useState('All');
    const [knowledgeInput, setKnowledgeInput] = useState('All');
    const [priceInput, setPriceInput] = useState('All');
    let languagesRef = useRef(null);
    let knowledgeRef = useRef(null);
    let priceRef = useRef(null);

    // console.log('start', priceInput);
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget.elements;
        
        let filterObj = {
            language: form.languagesInput.value,
            knowledge: form.knowledgeInput.value,
            price: form.priceInput.value
        }

        handleFilter(filterObj);
    };

    const handleSelect = (event) => {
        const currTargetId = event.currentTarget.children[2].id;
        const eventId = event.target.id;
        
        if (eventId === "languagesInput") {
            setLanguagesIsActive(!languagesIsActive);
        }

        if(eventId === 'knowledgeInput') {
            setKnowledgeIsActive(!knowledgeIsActive);
        }

        if (eventId === "priceInput") {
            setPriceIsActive(!priceIsActive);
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
                setPriceIsActive(!priceIsActive);
            }
        }
    };

    function handleClickOutside(event) {
        if (languagesRef.current && !languagesRef.current.contains(event.target)) {
            setLanguagesIsActive(false);
        }
        if (priceRef.current && !priceRef.current.contains(event.target)) {
            setPriceIsActive(false);
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
    }, [languagesRef, priceRef, knowledgeRef]);

    return (
        <div className={css.container}>
            <form className={css.form} onSubmit={handleSubmit}>
                <div className={css.langContainer}>
                    <Input 
                        inputIsActive={languagesIsActive}
                        setInputIsActive={setLanguagesIsActive}
                        inputRef={languagesRef}
                        id={'languagesInput'}
                        label={'Languages'}
                        handleSelect={handleSelect}
                        inputValue={languagesInput}
                        optionsList={languages}
                    />
                </div>
                <div className={css.knowledgeContainer}>
                    <Input 
                        inputIsActive={knowledgeIsActive}
                        setInputIsActive={setKnowledgeIsActive}
                        inputRef={knowledgeRef}
                        id={'knowledgeInput'}
                        label={'Level of Knowledge'}
                        handleSelect={handleSelect}
                        inputValue={knowledgeInput}
                        optionsList={knowledge}
                    />
                </div>
                <div className={css.priceContainer}>
                    <Input 
                        inputIsActive={priceIsActive}
                        setInputIsActive={setPriceIsActive}
                        inputRef={priceRef}
                        id={'priceInput'}
                        label={'price'}
                        handleSelect={handleSelect}
                        inputValue={priceInput}
                        optionsList={priceList}
                    />
                </div>
                <button className={css.submit} type="submit">
                    Search
                </button>
            </form>
        </div>
    );
};