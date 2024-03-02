import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import css from "./Backdrop.module.scss";
import Icon from "../icon/Icon";

export const Backdrop = ({isModalOpen, children}) => {
    const handleBackdropClick = (event) => {
        if(event.target === event.currentTarget) isModalOpen();
    }
    
    const closeModalByEscape = useCallback(event => {
        if (event.code === 'Escape') isModalOpen(false);
    }, [isModalOpen]);
    
    useEffect(() => {
            window.addEventListener('keydown', closeModalByEscape);

            return window.removeEventListener('keydown', closeModalByEscape);
        }, [closeModalByEscape]
    );

    return createPortal(
        <div className={css.backdrop} onClick={handleBackdropClick}>
            <div className={css.modalContainer}>
                <div onClick={() => isModalOpen(false)}>
                    <Icon className={css.svgClose} name={'#icon-close'}/>
                </div>
                {children}
            </div>
        </div>,
        document.body
    )
}
