import css from "./Searchbar.module.css";
import PropTypes from "prop-types";
import { Component } from "react";

class Searchbar extends Component {
    state = {
        queryString: "",
    };

    handleInputChange = event => {
        this.setState({ queryString: event.currentTarget.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.queryString);
    };

    render() {
        const { queryString } = this.state;
        return (
            <header className={css.Searchbar}>
                <form onSubmit={this.handleSubmit} className={css.SearchForm}>
                    <button type="submit" className={css.SearchForm__button}>
                        <span className={css.SearchForm__button_label}>
                            Search
                        </span>
                    </button>

                    <input
                        className={css.SearchForm__input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={queryString}
                        onChange={this.handleInputChange}
                    />
                </form>
            </header>
        );
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
