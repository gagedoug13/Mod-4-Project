import React from 'react'

export default function MediaCard(props) {
    return (
        <div className="mediaCard">
            <a href={props.article.url} target="_blank" rel="noopener noreferrer"><div className="card bg-dark text-white">
                <img className="mediaImages" src={props.article.urlToImage} className="card-img" alt="..."/> 
                <div className="card-img-overlay">
                <h5 className="card-title">{props.article.title}</h5>
                <a href={props.article.url} target="_blank" rel="noopener noreferrer"> <p className="card-text">{props.article.description}</p></a>
                    <p className="card-text"></p>
                </div>
            </div></a>
        </div>
    )
}
