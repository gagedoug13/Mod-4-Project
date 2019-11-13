import React from 'react'
import Card from './Card'

export default function CardContainer(props) {

    const eachTrail = props.trails.map(trail => {
		return <div key={trail.id}>
		  <Card trail={trail}  /> 
		</div>
	  })
    return (
        <div className="cardContainer">
            {eachTrail}
        </div>
    )
}
