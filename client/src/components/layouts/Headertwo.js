import React, { Fragment } from 'react';
import Navhelper from '../../helper/NavHelper';
import Mobilemenu from './Mobilemenu';
import { Link } from 'react-router-dom';
import navigation from '../../data/navigation.json';

class Headertwo extends Navhelper {
    render() {
        return (
            <Fragment>
                {/* Mobile Menu */}
                <aside className={this.state.navMethod === true ? 'sigma_aside aside-open' : 'sigma_aside'}>
                    <div className="sigma_close aside-trigger" onClick={this.toggleNav}>
                        <span />
                        <span />
                    </div>
                    <Mobilemenu />
                </aside>
                <div className="sigma_aside-overlay aside-trigger" onClick={this.toggleNav} />
                {/* Mobile Menu */}
                {/* Header */}
                <header className="sigma_header style-5 bg-transparent shadow-none can-sticky">
                    <div className="container">
                        <div className="sigma_header-top d-none d-md-block">
                            <div className="sigma_header-top-inner">
                                <div className="sigma_header-top-links">
                                    <ul className="sigma_header-top-nav">
                                        <li>
                                            <Link to="#">
                                                <i className="fal fa-envelope" />
                                                spec@deocmatch.com
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="fal fa-map-marker-alt" />
                                                84347, Pfarrkirchen, Germany
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sigma_header-top-contacts">
                                    <ul className="sigma_header-top-nav">
                                        <li> <Link to="#"><i className="fab fa-facebook-f" /></Link>
                                        </li>
                                        <li> <Link to="#"><i className="fab fa-twitter" /></Link>
                                        </li>
                                        <li> <Link to="#"><i className="fab fa-linkedin-in" /></Link>
                                        </li>
                                        <li> <Link to="#"><i className="fab fa-google" /></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="sigma_header-middle pl-4 pr-4">
                            <div className="navbar">
                                <div className="sigma_logo-wrapper">
                                    <Link to="/" className="sigma_logo">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} alt="logo" />
                                    </Link>
                                </div>
                                <div className="d-flex align-items-center">
                                    <ul className="navbar-nav">
                                        {/* Data */}
                                        {navigation.map((item, i) => (
                                            <li key={i} className={item.child === true ? 'menu-item menu-item-has-children' : 'menu-item'}>
                                                {item.child === true ?
                                                    <Link to="#">{item.linkText}</Link>
                                                    :
                                                    <Link to={item.link}>{item.linkText}</Link>
                                                }
                                                {item.child === true ?
                                                    <ul className="sub-menu">
                                                        {item.submenu.map((item, i) => (
                                                            <li key={i} className={item.child === true ? 'menu-item menu-item-has-children' : 'menu-item'}>
                                                                {item.child === true ?
                                                                    <Link to="#">{item.linkText}</Link>
                                                                    :
                                                                    <Link to={item.link}>{item.linkText}</Link>
                                                                }
                                                                {item.child === true ?
                                                                    <ul className="sub-menu">
                                                                        {item.submenu.map((item, i) => (
                                                                            <li className="menu-item" key={i}>
                                                                                <Link to={item.link}>{item.linkText}</Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                    : ''}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    : ''}
                                            </li>
                                        ))}
                                        {/* Data */}
                                    </ul>
                                    <div className="sigma_header-controls style-2">
                                        <ul className="sigma_header-controls-inner">
                                            <li className="d-none d-sm-block ml-5">
                                                <Link to="/doctor-grid" className="sigma_btn btn-sm">
                                                    Find A Doctor
                                                    <i className="fal fa-plus ml-3" />
                                                </Link>
                                            </li>
                                            <li className="aside-toggle aside-trigger" onClick={this.toggleNav}>
                                                <span />
                                                <span />
                                                <span />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Header */}
            </Fragment>
        );
    }
}

export default Headertwo;