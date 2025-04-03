
import React, { Component } from 'react';
import '../../css/common/Footer.css';

class Footer extends Component {

    constructor(props){
        super(props);
        this.state={
           
        }
    }

    render(){
        return(
            <div id="footer">
                <div id="footer-top">
                    <ul>
                        <li>
                            <span>
                                YTS &copy; 2011 - 2022
                            </span>
                        </li>
                        <li>
                            <a href="https://yts.mx/blog">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="https://yts.mx/dmca">
                                DMCA
                            </a>
                        </li>
                        <li>
                            <a href="https://yts.mx/api">
                                API
                            </a>
                        </li>
                        <li>
                            <a href="https://yts.mx/rss">
                                RSS
                            </a>
                        </li>
                        <li>
                            <a href="https://yts.mx/contact">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="https://yts.mx/browse">
                                Browse Movies
                            </a>
                        </li>
                        <li>
                            <a href="https://yts.mx/requests">
                                Requests
                            </a>
                        </li>
                        <li>
                            <a href="https://yts.mx/login">
                                Login
                            </a>
                        </li>
                        <li>
                            <a href="https://yts.mx/movies">
                                Movies
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="footer-middle">
                    <ul>
                        <li>
                            <a href="https://eztv.re/">
                                EZTV
                            </a>
                        </li>
                        <li>
                            <a href="https://yifystatus.com/">
                                YIFY Status
                            </a>
                        </li>
                        <li>
                            <a href="https://ytsproxies.com/">
                                YTS Proxies
                            </a>
                        </li>
                        <li>
                            <a href="http://ytsyifyupcmxftncrnqd4bmwxvhlibhdat74w6xnmn33njxts4eeaiqd.onion/">
                                YTS Proxies (TOR)
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="footer-bottom">
                    <ul>
                        <li>
                            <span>By using this site you agree to and accept our</span>
                        </li>
                        <li>
                            <a href="https://yts.mx/terms">
                                User Agreement<span>,</span>
                            </a>
                        </li>
                        <li>
                            <span>
                                which can be read
                            </span>
                        </li>
                        <li>
                            <a href="https://yts.mx/terms">
                                here<span>.</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footer;
