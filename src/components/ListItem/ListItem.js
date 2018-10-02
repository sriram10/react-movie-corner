import React from 'react'
import {Link} from 'react-router-dom'

const ListItem = (props) => {
    const addClass = props.highlight ? ' hi' : ''
    return (
    <Link to={'/movie/'+props.id} 
        className={"list-item movie" + addClass} 
        style={{
            backgroundImage: 'url(https://image.tmdb.org/t/p/w300'+(props.backdrop_path || props.poster_path) +')'
        }}
        onClick={props.clicked}>
        <div className="movie-title">{props.title || props.original_name}</div>
        <div>{props.vote_average || props.rating}</div>
    </Link>
    )
}

export default ListItem
