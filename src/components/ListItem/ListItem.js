import React from 'react'

const ListItem = (props) => {
    const addClass = props.highlight ? ' hi' : ''
    return (
    <div 
        className={"list-item movie" + addClass} 
        style={{
            backgroundImage: 'url(https://image.tmdb.org/t/p/w300'+(props.backdrop_path || props.poster_path) +')'
        }}
        onClick={props.clicked}>
        <div>{props.title || props.original_name}</div>
        <div>{props.vote_average || props.rating}</div>
    </div>
    )
}

export default ListItem
