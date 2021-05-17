import React from 'react';
import './Info.css';

class Info extends React.Component {
    render() {
        return (
            <div className="Info">
                <div className="Title">
                    <h3>{this.props.painting.title}</h3>
                </div>
                <div className="Desc">
                    <p>{this.props.painting.desc}</p>
                </div>
                <div className="Date">
                    <small>{this.props.painting.date}</small>
                </div>
            </div>
        )
    }
}

export default Info;
