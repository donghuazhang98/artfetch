import React from "react";
import { SocialIcon } from "react-social-icons";

import "./styles.scss";

class Footer extends React.Component {
    render() {
        return (
            <div id='footer-wrap'>
                <footer className='footer'>
                    <div className='top-footer'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <div className='footer-logo'>
                                    <a href='/' title='Mercury'>
                                        {/* <img
                                        src="https://i.imgur.com/bAnFKDw.png"
                                        width="72"
                                        alt="Mercury-Logo"
                                        className="img-fluid"
                                        /> */}
                                        ArtFetch
                                    </a>
                                    <p className='tagline'>
                                        A online demo gallery
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-2'>
                                <h4>Gallery</h4>
                                <ul className='footer-link'>
                                    <li>
                                        <a href='#' title='Trending'>
                                            Trending
                                        </a>
                                        <a href='#' title='Community'>
                                            Community
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-md-2'>
                                <h4>Magazine</h4>
                                <ul className='footer-link'>
                                    <li>
                                        <a href='#' title='Inspiration'>
                                            Inspiration
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' title='News'>
                                            News
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-md-3'>
                                <h4>Contact</h4>
                                <ul className='footer-link'>
                                    <li>
                                        <a
                                            href='mail-to:artfetch.official@gamil.com'
                                            title='Contact'
                                        >
                                            artfetch.official@gamil.com
                                        </a>
                                    </li>
                                    <li>
                                        <div className='icons'>
                                            <SocialIcon
                                                href='#'
                                                title='Facebook'
                                                network='facebook'
                                                bgColor='#ffffff'
                                            />
                                            <SocialIcon
                                                href='#'
                                                title='twitter'
                                                network='twitter'
                                                bgColor='#ffffff'
                                            />
                                            <SocialIcon
                                                href='#'
                                                title='instagram'
                                                network='instagram'
                                                bgColor='#ffffff'
                                            />
                                            <SocialIcon
                                                href='#'
                                                title='Link'
                                                network=''
                                                bgColor='#ffffff'
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-footer'>
                        <div className='row'>
                            <div className='col-md-5'>
                                <p className='copyright pt-3'>
                                    Copyright &copy; 2020
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
export default Footer;
