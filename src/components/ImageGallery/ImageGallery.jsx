import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

const ImageGallery = () => {
    return (
        <Gallery>
            <ImageGalleryItem/>
        </Gallery>
    )
};

export default ImageGallery;

ImageGallery.propType = {
};