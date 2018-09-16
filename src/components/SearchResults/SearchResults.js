import React, { Component } from 'react'
import ListItem from '../ListItem/ListItem';

class SearchResults extends Component {
  render() {
    return (
      <div>
        {
          this.props.results ? 
          <div className="search-results">
            <h3 className="results-count">Total Items mathced : {this.props.total}</h3>
            <div>
              {
                this.props.results.map(item => <ListItem key={item.id} {...item} />)
              }
            </div>
          </div>
          : null
        }
      </div>
    )
  }
}

export default SearchResults
