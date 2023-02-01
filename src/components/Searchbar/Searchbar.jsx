import PropTypes from 'prop-types';
import { SearchbarHeader, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput} from './Searchbar.styled';

const Searchbar = () => {
    return (
        <SearchbarHeader>
            <SearchForm>
                <SearchFormButton type="submit">
                    <SearchFormButtonLabel>Search</SearchFormButtonLabel>
                </SearchFormButton>
                <SearchFormInput
                type="text"
                autocomplete="off"
                autofocus
                placeholder="Search images and photos"
                />
            </SearchForm>
        </SearchbarHeader>
    )
};

export default Searchbar;

Searchbar.propType = {
};