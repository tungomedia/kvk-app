import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import './App.css';
import React from 'react';
import Api from './services/restApi';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      companies: [],
      searchResults: []
    };
  }

  /* Component mounted, go and fetch all companies, after fetching, store them in the state */
  componentDidMount() {
    // check if companies are loaded, if so don't fetch from server
    if (this.state.companies.length === 0) {
      this.load();
    }
  }

  load = async () => {
    this.setState({isLoading: true});
    const response = await Api.get('/companies');
    this.setState({
      companies: response.data.data
    });
    this.setState({isLoading: false});
    this.state.isLoading = false;
  }

  findCompanies = async (query) => {
    this.state.isLoading = true;
    const response = await Api.get(`/companies?search=${query}`);
    this.setState({
      searchResults: response.data.data
    });
    this.state.isLoading = false;
  }

  clearSearchResults = () => {
    this.setState({
      searchResults: []
    })
  };

  render() {
    let showBackButton = false;
    if (this.state.searchResults.length > 0) {
      showBackButton = true
    }
    return (
        <div>
          <div className="topbar"></div>
          <NavBar />
          <SearchBar handleSearch={this.findCompanies}/>
          <SearchResults 
            companies={this.state.searchResults.length > 0 ? this.state.searchResults: this.state.companies} 
            showBackButton={showBackButton}
            handleBackButton={this.clearSearchResults}
          />
          
        </div>
    );
  };
}

export default App;
