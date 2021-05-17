import React from 'react';
import './Painting.css';
import Info from '../Info/Info';

class Painting extends React.Component {
    render() {
        return (
            <article className="Painting fit" key={this.props.painting.id}>
                <figure className="image-container">
                    <a href="./view-art/tifa.html">
                        <img className="fit" src={this.props.painting.imgSrc} alt={this.props.painting.title + " painting"} />
                    </a>
                </figure>
                <Info painting={this.props.painting} />
            </article>
        )
    }
}

export default Painting;