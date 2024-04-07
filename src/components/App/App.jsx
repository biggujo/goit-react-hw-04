import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from '../SearchBar';
import Loader from '../Loader';
import ImageGallery from '../ImageGallery';
import Button from '../Button';
import { fetchImages } from '../../services/api';
import { Wrapper } from './App.styled';
import GlobalStyles from '../Global/GlobalStyles';

const INITIAL_PAGE = 1;
const RESULTS_PER_PAGE = 12;

export default function App() {
  const [query, setQuery] = useState('');
  const [imageList, setImageList] = useState([]);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [isMaxPage, setIsMaxPage] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setImageList([]);
    setPage(INITIAL_PAGE);
    setIsMaxPage(true);
  }, [query]);

  useEffect(() => {
    if (query === "") {
      return;
    }

    const isMaxPageReached = (totalHits, perPage) => {
      return page > Math.floor(totalHits / perPage);
    };

    const fetchData = async () => {
      const actualQuery = query.split('/').at(-1);

      setIsLoading(true);

      try {
        const {
          totalHits,
          hits,
        } = await fetchImages({
          query: actualQuery,
          page: page,
          perPage: RESULTS_PER_PAGE,
        });

        if (totalHits === 0) {
          throw new Error('No images has been found.');
        }

        if (isMaxPageReached(totalHits, RESULTS_PER_PAGE)) {
          setIsMaxPage(true);
        } else {
          setIsMaxPage(false);
        }

        setImageList(prevState => [
          ...prevState,
          ...hits,
        ]);
      } catch (error) {
        setImageList([]);

        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page, query]);

  const handlePageIncrement = () => {
    setPage(prevState => prevState + 1);
  };

  const handleQuerySubmit = async (values) => {
    setQuery(`${Date.now()}/${values.query}`);
  };

  return (<Wrapper>
    <SearchBar onSubmit={handleQuerySubmit} />
    {imageList && imageList.length !== 0 && <ImageGallery images={imageList} />}
    {isLoading && (<Loader />)}
    {!isMaxPage && !isLoading &&
      <Button onClick={handlePageIncrement} text='Load more' />}
    <Toaster
      position='top-right'
      reverseOrder={false}
    />
    <GlobalStyles />
  </Wrapper>);
}
