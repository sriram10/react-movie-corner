import React, { Component } from 'react'
import { moviesAPI, GET_MOVIE } from '../../constants/api';

class Movie extends Component {
  state = {}

  componentDidMount() {
    const {params:{movieid}} = this.props.match
    moviesAPI.get(GET_MOVIE+movieid).then(res => {
      console.log(res)
      this.setState({
        ...res.data
      })
    })
  }

  goback = () => {
    console.log(this.props.history)
    this.props.history.goBack();
  }

  render() {
    const {params} = this.props.match
    
    if(!Object.keys(this.state).length) {
      return <h1>Loading...</h1>
    }

    return (
      <div>
        <h1>{this.state.title || this.state.original_title}</h1>
        <h2>{this.props.text}</h2>
        <button type="button" onClick={this.goback}>Go Back</button>
      </div>
    )
  }
}

export default Movie
