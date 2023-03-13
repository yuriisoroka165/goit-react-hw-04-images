import css from "./Modal.module.css";
import { Component } from "react";
import PropTypes from "prop-types";

class Modal extends Component {
    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = event => {
        if (event.code === "Escape") {
            this.props.onClose();
        }
    };

    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    };

    render() {
        const { image, description } = this.props;
        return (
            <div className={css.overlay} onClick={this.handleBackdropClick}>
                <div className={css.modal}>
                    <img src={image} alt={description} />
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default Modal;
