import React from "react"

function Card({ song }) {
    return (
        <article id={song.id}>
            <h1>{song.artist}</h1>
            <h2>{song.title} </h2>
            <p>{song.duration} </p>
        </article>
    )
}

export default Card