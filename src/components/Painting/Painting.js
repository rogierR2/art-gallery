import React, { useState, useEffect } from 'react';
import './Painting.css';
import Info from '../Info/Info';
import ModalImage from 'react-modal-image';

function Painting(props) {
    const [displayModal, setDisplayModal] = useState(false);
    const onClickOutside = (e) => {
        if (e.target.localName !== "button") {
            setDisplayModal(false);
        }
    };

    useEffect(() => {
        window.addEventListener("click", onClickOutside);
        return () => {
            window.removeEventListener("click", onClickOutside);
        }
    }, [])

    return (
        // TODO: Problem: images loading speed is too low using slower internet (throttling) -> lower resolution images for faster loading
        <article className="Painting fit" key={props.painting.id}>
            <figure className="image-container">
                <div>
                    <ModalImage className="painting-image" small={props.painting.imgSrc} large={props.painting.imgSrc} alt={props.painting.title + " painting"} />
                </div>
            </figure>
            <Info painting={props.painting} />
        </article>
    )
}

export default Painting;