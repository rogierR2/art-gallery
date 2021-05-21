import React from 'react';
import './Intro.css';
import { ButtonComponent } from '../Button/Button';

class Intro extends React.Component {
    render() {
        return (
            <section className="Intro">
                <article>
                    <h1>Welcome to my art gallery</h1>
                    <p>I digitally paint as a hobby. Have a look at my art on my gallery.</p>
                    <p>Enjoy!</p>
                </article>
                <br />
                <div className='intro-btns'>
                    <ButtonComponent>
                        Go to Gallery
                    </ButtonComponent>
                </div>
                <hr />
            </section>
        )
    }
}

export default Intro;