import React, { Component } from 'react';
import { BounceLoader } from 'react-spinners';
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from './SearchBar';
import Loader from './Loader';
import ImageGallery from './ImageGallery';
import { fetchImages } from '../services/api';
import Button from './Button';

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
      page,
    } = this.state;

    if (prevState.query === nextQuery) {
      return;
    }

    const actualQuery = nextQuery.split('/').at(-1);

    this.setState({
      page: INITIAL_PAGE,
      isLoading: true,
    });

    try {
      const queryResults = await fetchImages({
        query: actualQuery,
        page,
        RESULTS_PER_PAGE,
      });

      if (queryResults.totalHits === 0) {
        throw new Error('No images has been found.');
      }

      this.setState({ imageList: queryResults.hits });
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

  render() {
    const {
      imageList,
      isLoading,
      isMaxPage,
    } = this.state;

    return (<div>
      {isLoading && (<Loader>
        <BounceLoader color='#3f51b5' />
      </Loader>)}

      <SearchBar onSubmit={this.handleQuerySubmit} />
      <ImageGallery images={imageList} />

      {!isMaxPage &&
        <Button onClick={this.handlePageIncrement} text='Load more' />}

      <Toaster
        position='top-right'
        reverseOrder={false}
      />
    </div>);
  }
}

export default App;
