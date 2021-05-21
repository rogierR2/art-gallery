import React from 'react';
import './PaintingCollection.css';
import Painting from '../Painting/Painting';

function PaintingCollection(props) {
    return (
        <div className="PaintingCollection center" data-toggle="modal" data-target="#exampleModal">
            {props.paintings.paintings.map(painting => {
                return <Painting painting={painting} /> 
            })}
        </div>
    );
}

export default PaintingCollection;