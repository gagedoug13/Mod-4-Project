import React from 'react'
// import line from './line.png'

export default function FilterPage(props) {
    return (
        
        <div className="filterPage">
                <form className="filterForm">
                    <input 
                    type="text" 
                    placeholder="Filter Trails by Name"
                    value = {props.searchTerm}
                    onChange={props.updateSearchTerm}
                    />
                </form>
            {/* <img className='logo' src={line} alt="F"></img> */}
        </div>
    )
}
