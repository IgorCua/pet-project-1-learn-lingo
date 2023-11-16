import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import css from "./Backdrop.module.scss";
import sprite from '../../assets/icons/icons.svg';

export const Backdrop = ({closeModal, children}) => {
    console.log("cinldren: ", children);
    const handleBackdropClick = (event) => {
        if(event.target === event.currentTarget) closeModal();
    }
    
    const closeModalByEscape = useCallback(event => {
        console.log(event);
        console.log(event.code);
        if (event.code === 'Escape') closeModal();
    }, [closeModal]);
    // const closeModalByEscape = useCallback(
    //     e => {
    //       if (e.code === 'Escape') {
    //         closeModal();
    //       }
    //     },
    //     [closeModal]
    // );
    useEffect(() => {
            window.addEventListener('keydown', closeModalByEscape);

            return window.removeEventListener('keydown', closeModalByEscape);
        }, [closeModalByEscape]
    );

    return createPortal(
        <div className={css.backdrop} onClick={handleBackdropClick}>
            <div className={css.modalContainer}>
                <svg className={css.svgClose}>
                    <use href={sprite + '#icon-close'}/>
                </svg>
                {children}
            </div>
        </div>,
        document.body
    )
}