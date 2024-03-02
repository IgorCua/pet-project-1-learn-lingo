import { clsx } from 'clsx';
import sprite from '../../assets/icons/icons.svg';
import css from './Icon.module.scss';
 
const Icon = ({name, className, secondaryClassName = null}) => {
    return <svg
        className={clsx(
            css.svg,
            className && className,
            secondaryClassName && secondaryClassName
        )}
    >
        <use href={sprite + name}/>
    </svg>
}

export default Icon;