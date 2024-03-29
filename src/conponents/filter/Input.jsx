import clsx from "clsx";
import css from "./Input.module.scss";
import sprite from "../../assets/icons/icons.svg";

export const Input = (props) => {
    const {
        inputIsActive, 
        setInputIsActive, 
        id,
        label,
        inputValue,
        optionsList
    } = props;

    return <>
        <label className={css.inputLabel} htmlFor={`${id}`}>
            <p>{`${label}`}</p>
        </label>
        <svg className={clsx(
            css.inputSvg,
                [inputIsActive && css.iconActive]
            )} 
            onClick={()=>setInputIsActive(!inputIsActive)}
        >
            <use href={sprite + '#icon-arrow'}/>
        </svg>
        <input
            className={css.input}
            id={`${id}`}
            type="text"
            readOnly
            value={inputValue}
        />
        {inputIsActive && 
            <ul
                className={clsx(
                    css.inputList, 
                    [inputIsActive && css.inputListActive]
                )}
            >
                
                {optionsList.map((elem, i) => {
                    return (<li key={i} className={clsx(
                        css.listItem,
                        [elem === inputValue && css.active]
                    )}>{elem}</li>);
                })}
            </ul>
        }                   
    </>
}