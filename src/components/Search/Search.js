import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      time: null
    }
    this.interval = null
    // console.log(props, 'CONSTRUCTOR');
  }

  // static getDerivedStateFromProps(p) {
  //   console.log('getDerivedStateFromProps => ', p)
  //   return p;
  // }

  shouldComponentUpdate(p) {
    // console.log('shouldComponentUpdate', p)
    if(p.title.length > 4) {
      return false
    }
    return true;
  }  

  componentDidMount() {
    // console.log('componentDidMount');

    this.interval = setInterval(() => {
      let {count} = this.state; // destructuring
      this.setState({
        count: count+1,
        time: new Date().toLocaleString()
      })
    }, 1000) // 1000ms
  }

  componentDidUpdate() {
    // console.log('componentDidUpdate')
    if(this.state.count === 10) {
      clearInterval(this.interval)
    }
  }

  render() {
    // console.log('RENDER ', this.state.count)
    return (
      <div>
        <h1>Search Component - {this.props.title}</h1>
        <h2>{this.state.time}</h2>

      </div>
   )
  }
}

export default Search
