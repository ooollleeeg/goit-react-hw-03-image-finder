import PropTypes from 'prop-types';
import { ButtonLoad } from './Button.styled';

const Button = ({text}) => {
    return (
        <ButtonLoad type="button">
        {text}
        </ButtonLoad>
    )
};

export default Button;

Button.propType = {
};