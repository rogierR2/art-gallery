import React from 'react';
import Intro from "../Intro/Intro";
import PaintingCollection from "../PaintingCollection/PaintingCollection";

class Gallery extends React.Component {
    render() {
        return (
            <div className="Gallery">
                <h1>Rogier's Art Gallery</h1>
                <Intro />
                <PaintingCollection painting={this.props.painting} />
            </div>
        )
    }
}

export default Gallery;