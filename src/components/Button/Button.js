import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const STYLES = ['light', 'dark', 'outline-dark', 'secondary'];
const SIZES = ['md', 'lg']

export const ButtonComponent = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize}) => {
        const checkButtonStyle = STYLES.includes(buttonStyle) 
        ? buttonStyle 
        : STYLES[0];

        const checkButtonSize = SIZES.includes(buttonSize) 
        ? buttonSize 
        : SIZES[0];

        return (
            <Link to='/gallery' className='btn-mobile'>
                <Button
                    // className={`variant=${checkButtonStyle} size=${checkButtonSize}`}
                    variant='light'
                    onClick={onClick}
                    type={type}
                >
                    {children}
                </Button>
            </Link>
        )
    };