import React from 'react'
import Card from './Card'

export default function CardContainer(props) {

    const eachTrail = props.trails.map(trail => {
		return <div key={trail.id}>
		  <Card trail={trail} /> 
		</div>
	  })
    return (
        <div>
          <div className="filterPage">
            
            <form className="filterForm">
                <input 
                type="text" 
                placeholder="Trails by Name / Location"
                value = {props.searchTerm}
                onChange={props.updateSearchTerm}
                />
            </form>
           
        </div>
        <div className="cardContainer">
            {eachTrail}
        </div>
    </div>
    )
}
