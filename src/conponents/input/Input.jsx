const testRadBtn = (props) => {
    const {id, value, name, onChange, onBlur} = props;

    return <div>
        <input 
            type="radio"
            name={name}
            value={id}
            checked={id === value}
            onChange={onChange}
            onBlur={onBlur}
            className={css.radioBtn}
        />
        <span className={css.checkmark}></span>
    </div>
}