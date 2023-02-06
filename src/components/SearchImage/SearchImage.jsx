import { Component } from 'react';

import { getImage } from 'components/API/API';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ImageGalleryItem from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import ModalDetails from 'components/ModalDetails/ModalDetails';
import Loader from 'components/Loader/Loader';

import styles from './searchImage.module.scss';

class SearchImage extends Component {
  state = {
    search: '',
    items: [],
    loading: false,
    error: null,
    page: 1,
    showModal: false,
    modalDetails: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchImages();
    }
  }

  async fetchImages() {
    try {
      this.setState({ loading: true });
      const { search, page } = this.state;
      const data = await getImage(search, page);
      this.setState(({ items }) => ({ items: [...items, ...data.hits] }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  searchImages = ({ search }) => {
    this.setState({ search, items: [], page: 1 });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  showBigImage = ({ largeImageURL, tags }) => {
    this.setState({
      modalDetails: { largeImageURL, tags },
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      modalDetails: null,
    });
  };

  render() {
    const { items, loading, error, showModal, modalDetails } = this.state;
    const { searchImages, loadMore, showBigImage, closeModal } = this;

    return (
      <>
        <Searchbar onSubmit={searchImages} />
        <ImageGallery>
          <ImageGalleryItem items={items} showBigImage={showBigImage} />
        </ImageGallery>
        {loading && <Loader />}
        {error && (
          <p className={styles.errorMessage}>
            Something went wrong. Error: {error}. Please try again later
          </p>
        )}
        {Boolean(items.length) && (
          <Button loadMore={loadMore} text="load more" />
        )}
        {showModal && (
          <Modal close={closeModal}>
            <ModalDetails {...modalDetails} />
          </Modal>
        )}
      </>
    );
  }
}

export default SearchImage;
