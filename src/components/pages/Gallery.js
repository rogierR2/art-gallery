import React from 'react';
import PaintingCollection from '../PaintingCollection/PaintingCollection';
import PAINTINGS from '../../paintings.json';

function Gallery() {
    return (
        <div>
            <h1>Rogier's Art Gallery</h1>
            <PaintingCollection paintings={PAINTINGS} />
        </div>
    )
}

export default Gallery;
