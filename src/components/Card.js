import React from 'react'
// import { Button } from 'reactstrap';

// export default (props) => {
//   return (
//     <Button color="danger">Danger!</Button>
//   );
// };

export default function Card(props) {
    return (
    <div className="card">
        <a href={props.trail.url} target = "_blank" className="btn btn-primary"><img src={props.trail.imgMedium} href={props.trail.url} className="card-img-top main-image" alt="..."/></a>
            <div className="card-body">
                <h5 className="card-title">{props.trail.name} | {props.trail.location} | {props.trail.difficulty}</h5>
                <p className="trail-summary">{props.trail.summary}</p>
                <p className="trail-condition">Status: {props.trail.conditionStatus} | Ascent: {props.trail.ascent} | Descent: {props.trail.descent}</p>
                <a href={props.trail.url} target = "_blank" className="btn btn-primary">Favorite</a>
            </div>
    </div>
    )
}
