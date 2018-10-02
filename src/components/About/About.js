import React from 'react'
import {Link} from 'react-router-dom'

const About = (props) => {
  console.log(props)
  const path = props.location.pathname;
  return (
    <div>
      <h1>About</h1>
      <div>
        <ul>
          <li><Link to={path + "/a"}>A</Link></li>
          <li><Link to={path + "/a/b"}>B</Link></li>
          <li><Link to={path + "/a/b/c"}>C</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default About
