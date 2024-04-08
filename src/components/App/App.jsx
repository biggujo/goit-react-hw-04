import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar';
import Loader from '../Loader';
import ImageGallery from '../ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn';
import { fetchImages } from '../../services/api';
import { Wrapper } from './App.styled';
import GlobalStyles from '../Global/GlobalStyles';
import ErrorMessage from '../ErrorMessage/index.js';
import toast, { Toaster } from 'react-hot-toast';
import ImageModal from '../ImageModal/index.js';
import { useModalContext } from '../../providers/ModalProvider.jsx';

const INITIAL_PAGE = 1;
const RESULTS_PER_PAGE = 12;

export default function App() {
  const [query, setQuery] = useState('');
  const [imageList, setImageList] = useState([]);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [isMaxPage, setIsMaxPage] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {
    isModalOpen,
    setIsModalOpen,
    modalImageSrc,
    modalImageAlt,
  } = useModalContext();

  useEffect(() => {
    setImageList([]);
    setPage(INITIAL_PAGE);
    setIsMaxPage(true);
  }, [query]);

  useEffect(() => {
    if (query === '') {
      return;
    }

    const isMaxPageReached = (totalHits, perPage) => {
      return page > Math.floor(totalHits / perPage);
    };

    const fetchData = async () => {
      const actualQuery = query.split('/').at(-1);

      setIsLoading(true);
      setError(null);

      try {
        const {
          total,
          results,
        } = await fetchImages({
          query: actualQuery,
          page: page,
          perPage: RESULTS_PER_PAGE,
        });

        if (total === 0) {
          toast.error('No images has been found.');
          setIsLoading(false);
          return;
        }

        if (isMaxPageReached(total, RESULTS_PER_PAGE)) {
          setIsMaxPage(true);
        } else {
          setIsMaxPage(false);
        }

        setImageList(prevState => [
          ...prevState,
          ...results,
        ]);
      } catch (error) {
        setImageList([]);

        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [
    page,
    query,
  ]);

  const handlePageIncrement = () => {
    setPage(prevState => prevState + 1);
  };

  const handleQuerySubmit = async (values) => {
    setQuery(values.query);
  };

  return (<Wrapper>
    <SearchBar onSubmit={handleQuerySubmit} />
    {error && <ErrorMessage message={error}></ErrorMessage>}
    {imageList && imageList.length !== 0 && <ImageGallery images={imageList} />}
    {isLoading && (<Loader />)}
    {!isMaxPage && !isLoading &&
      <LoadMoreBtn onClick={handlePageIncrement} text='Load more' />}
    {isModalOpen && <ImageModal isOpen={isModalOpen}
                                src={modalImageSrc}
                                alt={modalImageAlt}
                                onRequestClose={() => {
                                  setIsModalOpen(false);
                                }} />}
    <Toaster
      position='top-right'
      reverseOrder={false}
    />
    <GlobalStyles />
  </Wrapper>);
}
