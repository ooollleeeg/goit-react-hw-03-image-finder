import PropTypes from 'prop-types';
import { Component } from 'react';
import styles from './searchbar.module.scss';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({ search: '' });
  }

  render() {
    const { search } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div>
        <header className={styles.searchbar}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <button type="submit" className={styles.button}>
              <span className={styles.button__label}>Search</span>
            </button>

            <input
              className={styles.input}
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
              name="search"
              value={search}
              onChange={handleChange}
              required
            />
          </form>
        </header>
      </div>
    );
  }
}
export default Searchbar;

Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};
