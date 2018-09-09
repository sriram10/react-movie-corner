import React, { Component } from 'react';
import './App.css';
import Search from './components/Search/Search'
import List from './components/List/List';
import ListItem from './components/ListItem/ListItem';

const ListObj = [
  { title: "AAA", rating: 4},
  { title: "BBB", rating: 4.4},
  { title: "CCC", rating: 3},
  { title: "DDD", rating: 4.2},
  { title: "EEE", rating: 2.5},
]

const ListObj2 = [
  { title: "XXX", rating: 4},
  { title: "YYY", rating: 4.4},
  { title: "NNNN", rating: 3},
  { title: "NNNN", rating: 3},
  { title: "YYY", rating: 4.4},
  { title: "NNNN", rating: 3},
  { title: "NNNN", rating: 3},
  { title: "MMM", rating: 4.2},
  { title: "MMM", rating: 4.2},
  { title: "DDDDDD", rating: 2.5},
  { title: "DDDDDD", rating: 2.5},
]

class App extends Component {
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movies Corner</h1>
        </header>
        <input type="text" value={this.state.title} onChange={ this.changeTitle } />
        <Search title={this.state.title} />
        <List title="Trending Movies" url="/trending/all/day" deal={true} />
        <List title="Top Rated Movies" url="/movie/top_rated"/>
        <List title="Upcoming Movies" url="/movie/upcoming" />
        <ListItem title="Sample Content" rating="5" />
      </div>
    );
  }
}

export default App;
