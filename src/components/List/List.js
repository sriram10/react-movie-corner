
import React, { Component } from 'react'
import ListItem from '../ListItem/ListItem'
import './List.css'

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
    const API = 'https://api.themoviedb.org/3'
    const KEY = '?api_key=YOUR_API_KEY'

    this.props.url && fetch(API + this.props.url + KEY)
      .then(result => {
        return result.json()
      })
      .then(res => {
        console.log(res)
        this.setState({
          data: res.results.slice(0,8)
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