import { createPortal } from "react-dom";
import css from "./Backdrop.module.scss";
import { useCallback, useEffect } from "react";

export const Backdrop = ({closeModal, children}) => {
    const handleBackdropClick = (event) => {
        if(event.target === event.currentTarget) closeModal();
    }
    
    const closeModalByEscape = useCallback(
        event => {
            if (event.code === 'Escape') closeModal();
        },
        [closeModal]
    ) 
    
    useEffect(() => {
            window.addEventListener('keydown', closeModalByEscape);

            return window.removeEventListener('keydown', closeModalByEscape);
        }, [closeModalByEscape]
    );

    return createPortal(
        <div className={css.backdrop} onClick={handleBackdropClick}>
            <div className={css.modalContainer}>
                {children}
            </div>
        </div>
    )
}