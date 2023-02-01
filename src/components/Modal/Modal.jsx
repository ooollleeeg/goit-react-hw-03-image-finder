import { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalWrapper } from './Modal.styled';

const Modal = () => {
    return (
        <Overlay>
            <ModalWrapper>
                <img src="" alt="" />
            </ModalWrapper>
        </Overlay>
    )
}

export default Modal;

Modal.propType = {
};