import css from "./Modal.module.css";
import { useEffect } from "react";
import PropTypes from "prop-types";

export default function Modal({ image, description, onClose }) {
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        console.log("added");

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            console.log("removed");
        };
    });

    const handleKeyDown = event => {
        if (event.code === "Escape") {
            onClose();
        }
    };

    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    };

    return (
        <div className={css.overlay} onClick={handleBackdropClick}>
            <div className={css.modal}>
                <img src={image} alt={description} />
            </div>
        </div>
    );
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
};
