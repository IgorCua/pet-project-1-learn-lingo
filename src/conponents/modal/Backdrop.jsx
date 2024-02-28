import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import css from "./Backdrop.module.scss";
import sprite from '../../assets/icons/icons.svg';

export const Backdrop = ({isModalOpen, children}) => {
    const handleBackdropClick = (event) => {
        if(event.target === event.currentTarget) isModalOpen();
    }
    
    const closeModalByEscape = useCallback(event => {
        console.log(event);
        console.log(event.code);
        if (event.code === 'Escape') isModalOpen(false);
    }, [isModalOpen]);
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
                <svg className={css.svgClose} onClick={() => isModalOpen(false)}>
                    <use href={sprite + '#icon-close'}/>
                </svg>
                {children}
            </div>
        </div>,
        document.body
    )
}