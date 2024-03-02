import sprite from '../../assets/icons/icons.svg';
 
export const Icon = ({name, width, height, className}) => {
    return <svg
        // width={width}
        // height={height}
        className={className}
    >
        <use href={sprite + name}/>
    </svg>
}