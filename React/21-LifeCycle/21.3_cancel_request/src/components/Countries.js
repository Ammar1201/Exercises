import React, { Component } from 'react';

class Countries extends Component {
  state = {countries: null, filteredCountries: null, searchQuery: '', controller: new AbortController()};

  componentDidMount() {
    const fetchData = async () => {
      const signal = this.state.controller.signal;
      try{
        const response = await fetch('https://restcountries.com/v2/all', {signal});
        if(!response.ok) {
          throw Error('error fetching countries');
        }
        const data = await response.json();
        this.setState({countries: data});
        this.setState({filteredCountries: data});
        console.log(data);
      }
      catch(error) {
        console.log(error);
      }
    };
    fetchData();
  };

  searchCountry({target}) {
    this.setState({searchQuery: target.value});

    if(target.value === '') {
      this.setState({filteredCountries: [...this.state.countries]});
    }

    const tmp = this.state.countries.filter(country => country.name.toLowerCase().includes(target.value.toLowerCase()));
    this.setState({filteredCountries: [...tmp]}); 
  }

  componentWillUnmount() {
    if (this.state.controller) {
      this.state.controller.abort();
      console.log("Fetch aborted");
    }
  }

  render() { 
    return ( 
      <div>
        <div>
          <label htmlFor="search">Search: </label>
          <input name='search' id='search' type="text" value={this.state.searchQuery} onChange={this.searchCountry.bind(this)} />
        </div>
        <ul>
        {this.state.filteredCountries && this.state.filteredCountries.map(country => {
          return <li key={country.name}>{country.name}</li>
        })}
        </ul>
      </div> 
    );
  }
}
 
export default Countries;