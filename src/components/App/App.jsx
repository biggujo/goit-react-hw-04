import React, { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from '../SearchBar';
import Loader from '../Loader';
import ImageGallery from '../ImageGallery';
import Button from '../Button';
import { fetchImages } from '../../services/api';
import { Wrapper } from './App.styled';

const INITIAL_PAGE = 1;
const RESULTS_PER_PAGE = 12;

class App extends Component {
  state = {
    query: '',
    imageList: [],
    page: INITIAL_PAGE,
    isMaxPage: true,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const {
      query: nextQuery,
      page: nextPage,
    } = this.state;

    if (prevState.query === nextQuery && prevState.page === nextPage) {
      return;
    }

    if (prevState.query !== nextQuery) {
      this.setState({
        imageList: [],
        page: INITIAL_PAGE,
        isMaxPage: true,
      });
    }

    const actualQuery = nextQuery.split('/').at(-1);

    this.setState({
      isLoading: true,
    });

    try {
      const {
        totalHits,
        hits,
      } = await fetchImages({
        query: actualQuery,
        page: nextPage,
        perPage: RESULTS_PER_PAGE,
      });

      if (totalHits === 0) {
        throw new Error('No images has been found.');
      }

      if (this.isMaxPageReached(totalHits, RESULTS_PER_PAGE)) {
        this.setState({ isMaxPage: true });
      } else {
        this.setState({ isMaxPage: false });
      }

      this.setState((prevState) => {
        return {
          imageList: [
            ...prevState.imageList,
            ...hits,
          ],
        };
      });

    } catch (error) {
      this.setState({ imageList: [] });

      toast.error(error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handlePageIncrement = () => {
    this.setState((prevState) => {
      return { page: prevState.page + 1 };
    });
  };

  handleQuerySubmit = async (values) => {
    this.setState({ query: `${Date.now()}/${values.query}` });
  };

  isMaxPageReached(totalHits, perPage) {
    const { page } = this.state;

    return page > Math.floor(totalHits / perPage);
  }

  render() {
    const {
      imageList,
      isLoading,
      isMaxPage,
    } = this.state;

    return (<Wrapper>
      <SearchBar onSubmit={this.handleQuerySubmit} />
      <ImageGallery images={imageList} />

      {isLoading && (<Loader />)}

      {!isMaxPage && !isLoading &&
        <Button onClick={this.handlePageIncrement} text='Load more' />}

      <Toaster
        position='top-right'
        reverseOrder={false}
      />
    </Wrapper>);
  }
}

export default App;
