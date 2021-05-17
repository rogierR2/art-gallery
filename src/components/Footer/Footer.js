import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            //TODO: footer background turns black with opacity + white font + white ig logo when screen is small (responsive)
            <footer className="Footer">
                
                    <a href="https://www.instagram.com/rogier.art/" target="_blank" rel="noreferrer">
                        <p>Follow Rogier.art
                        {/* <img src="/images/logo-instagram.png" height="15" alt="Instagram logo"/> */}
                            <i class="fab fa-instagram ig-logo" ></i>
                        </p>
                    </a>
            </footer>
        )
    }
}

export default Footer;