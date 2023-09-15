import React, { Component } from 'react';
import { BounceLoader } from 'react-spinners';
import toast from 'react-hot-toast';
import SearchBar from './SearchBar';
import Loader from './Loader';
import ImageGallery from './ImageGallery';
import { fetchImages } from '../services/api';

const INITIAL_PAGE = 1;
const RESULTS_PER_PAGE = 12;

class App extends Component {
  state = {
    query: '',
    imageList: [],
    page: INITIAL_PAGE,
    perPage: RESULTS_PER_PAGE,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const {
      query: nextQuery,
      page,
      perPage,
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
        perPage,
      });

      this.setState({ imageList: queryResults.hits });
    } catch (error) {
      toast(error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleQuerySubmit = async (values) => {
    this.setState({ query: `${Date.now()}/${values.query}` });
  };

  render() {
    const {
      imageList,
      isLoading,
    } = this.state;

    return (<div>
      {isLoading && (<Loader>
        <BounceLoader color='#3f51b5' />
      </Loader>)}
      <SearchBar onSubmit={this.handleQuerySubmit} />
      <ImageGallery images={imageList} />
    </div>);
  }
}

export default App;
