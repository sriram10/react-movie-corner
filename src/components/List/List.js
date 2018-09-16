
import React, { Component } from 'react'
import ListItem from '../ListItem/ListItem'
import './List.css'
import { API_KEY, moviesAPI } from '../../constants/api';

class List extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data
    }
  }


  clickItem = (index) => {
    this.setState(st => {
      st.data[index].highlight = !st.data[index].highlight;
      return {
        data: st.data
      }
    })
  }

  componentDidMount() {
    
    this.props.url && moviesAPI.get(this.props.url)
      .then(res => {
        console.log(res)
        this.setState({
          data: res.data.results.slice(0,8)
        })
      })
      .catch(err => {
        console.log('ERROR', err)
      })
  }

  render() {
    return (
      <div className="list-container">
        <div className="list-title">
          <h3>
            {this.props.title}
            {
              this.props.deal ? ' - Offers' : ''
            }
          </h3>
        </div>
        <div className="list">
          {
            this.state.data ? this.state.data.map((item, i) => {
              return <ListItem key={i} {...item} clicked={() => this.clickItem(i)} />
            }) : <h2>Loading...</h2>
          }
        </div>
      </div>
    )
  }
}

export default List
