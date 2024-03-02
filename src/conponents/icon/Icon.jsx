import { clsx } from 'clsx';
import sprite from '../../assets/icons/icons.svg';
 
const Icon = ({name, className, secondaryClassName = null}) => {
    return <svg
        className={clsx(
            className && className,
            secondaryClassName && secondaryClassName
        )}
    >
        <use href={sprite + name}/>
    </svg>
}

export default Icon;