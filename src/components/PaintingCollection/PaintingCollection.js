import React from 'react';
import './PaintingCollection.css';
import Painting from '../Painting/Painting';

class PaintingCollection extends React.Component {
    render() {
        return (
            <div className="PaintingCollection center">
                {this.props.paintings.paintings.map(painting => {
                    return <Painting painting={painting} />
                })}
            </div>
        );
    }
}

export default PaintingCollection;