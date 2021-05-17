import React from 'react';
import './Painting.css';
import Info from '../Info/Info';

class Painting extends React.Component {
    render() {
        return (
            // TODO: Problem: images loading speed is too low using slower internet (throttling) -> lower resolution images for faster loading
            <article className="Painting fit" key={this.props.painting.id}>
                <figure className="image-container">
                    <a href="">
                        <img className="painting-image" src={this.props.painting.imgSrc} alt={this.props.painting.title + " painting"} />
                    </a>
                </figure>
                <br />
                <Info painting={this.props.painting} />
            </article>
        )
    }
}

export default Painting;