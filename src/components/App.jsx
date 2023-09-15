import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { fetchImages } from '../services/api';
import ImageGallery from './ImageGallery';

const INITIAL_PAGE = 1;
const RESULTS_PER_PAGE = 12;

class App extends Component {
  state = {
    imageList: [],
    page: INITIAL_PAGE,
    perPage: RESULTS_PER_PAGE,
  };

  handleQuerySubmit = async (values) => {
    await this.setState({ page: INITIAL_PAGE });

    await this.fetchQueryImages(values.query);
  };

  fetchQueryImages = async (query) => {
    const {
      page,
      perPage,
    } = this.state;

    try {
      const queryResults = await fetchImages({
        query,
        page,
        perPage,
      });

      this.setState({ imageList: queryResults.hits });

      console.log(queryResults);
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    const { imageList } = this.state;

    return (<div>
      <SearchBar onSubmit={this.handleQuerySubmit} />
      <ImageGallery images={imageList} />
    </div>);
  }
}

export default App;
