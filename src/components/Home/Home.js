import React, { Component } from 'react'
import Search from '../Search/Search'
import List from '../List/List';
import { TRENDING, TOP_RATED, UPCOMING } from '../../constants/api';
import SearchResults from '../SearchResults/SearchResults';

class Home extends Component {
  // state object is immutable
  state = {
    title: ""
  }

  changeTitle = (e) => {
    let val = e.target.value;
    if(isNaN(val)) {
      this.setState({
        title: val
      })
    }
  }

  onSearch = (res) => {
    console.log(res)
    this.setState({
      ...res
    })
  }

  render() {
    return (
      <div>
        <Search title={this.state.title} onSearch={this.onSearch} />
        {
          this.state.results ? 
            <SearchResults results={this.state.results} total={this.state.total} />
          :
          <React.Fragment>
            <List title="Trending Movies" url={TRENDING} deal={true} />
            <List title="Top Rated Movies" url={TOP_RATED} />
            <List title="Upcoming Movies" url={UPCOMING} />
          </React.Fragment>

        }
      </div>
    )
  }
}

export default Home
