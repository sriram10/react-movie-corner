import React, { Component } from 'react'
import Axios from 'axios';
import { SEARCH, API_KEY, moviesAPI } from '../../constants/api';
import SearchResults from '../SearchResults/SearchResults';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      showClearBtn: null,
      // count: 0,
      // time: null
    }
    // this.interval = null
    // console.log(props, 'CONSTRUCTOR');
  }

  // static getDerivedStateFromProps(p) {
  //   console.log('getDerivedStateFromProps => ', p)
  //   return p;
  // }

  // shouldComponentUpdate(p) {
  //   // console.log('shouldComponentUpdate', p)
  //   if(p.title.length > 4) {
  //     return false
  //   }
  //   return true;
  // }  

  componentDidMount() {
    // console.log('componentDidMount');

    // this.interval = setInterval(() => {
    //   let {count} = this.state; // destructuring
    //   this.setState({
    //     count: count+1,
    //     time: new Date().toLocaleString()
    //   })
    // }, 1000) // 1000ms
  }

  componentDidUpdate() {
    // console.log('componentDidUpdate')
    // if(this.state.count === 10) {
    //   clearInterval(this.interval)
    // }
  }

  changeSearchText = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  searchMovies = (e) => {
    e.preventDefault();
    moviesAPI.get(SEARCH, {
      params: {
        query: this.state.search
      }
    }).then(res => {
      const {status, data} = res;
      if (status === 200) {
        this.setState({
          search: "",
          showClearBtn: true
        })
        this.props.onSearch({
          total: data.total_results,
          results: data.results
        })
      }
    }).catch(err => {
      console.log(err)
    })
  }

  clearResults = () => {
    this.props.onSearch({
      total: null,
      results: null
    })
    this.setState({
      showClearBtn: null
    })
  }

  render() {
    // console.log('RENDER ', this.state.count)
    return (
      <div>
        <form className="form-inline text-center align-center" onSubmit={this.searchMovies}>
          <div className="form-group">
            <input className="form-control mr-3" type="text" placeholder="Search Movies" onChange={this.changeSearchText} value={this.state.search} />
          </div>
          <div>
            <button type="submit" className="btn btn-default">Search</button>
            {
              this.state.showClearBtn ? 
              <button type="button" className="btn btn-danger ml-3" onClick={this.clearResults}>Clear Results</button>
              : null
            }
          </div>
        </form> 
      </div>
   )
  }
}

export default Search
