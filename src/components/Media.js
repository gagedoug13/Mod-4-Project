import React from 'react'
import MediaCard from './MediaCard'

export default function Media(props) {

    const eachNews = props.news.map(article => {
		return <div key={article.source.id}>
		  <MediaCard article={article}  /> 
		</div>
	  })

    return (
        <div className="mediaBackground">
            <div className="mediaBody">
            <h1>{eachNews}</h1>
            </div>
        </div>
    )
}
