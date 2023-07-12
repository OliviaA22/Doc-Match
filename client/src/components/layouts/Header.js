import React, { Fragment } from 'react';
import Navhelper from '../../helper/NavHelper';
import Mobilemenu from './Mobilemenu';
import { Link } from 'react-router-dom';
import navigation from '../../data/navigation.json';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Register from './Register';
import Login from './Login';
import { AuthContext } from '../contexts/authContext';

class Header extends Navhelper {
    static contextType = AuthContext;
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            registerModalIsOpen: false,
            loginModalIsOpen: false,
        };
    }

    openRegisterModal = () => {
        this.setState({ registerModalIsOpen: true });
    }

    closeRegisterModal = () => {
        this.setState({ registerModalIsOpen: false });
    }

    openLoginModal = () => {
        this.setState({ loginModalIsOpen: true });
    }

    closeLoginModal = () => {
        this.setState({ loginModalIsOpen: false });
    }

    handleLogout = () => {
        this.context.logout();
      }

    render() {
        const { user } = this.context;
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
                <header className="sigma_header header-absolute style-5 other can-sticky">
                    <div className="sigma_header-top dark-bg d-none d-md-block">
                        <div className="container-fluid">
                            <div className="sigma_header-top-inner">
                                <div className="sigma_header-top-links">
                                    <ul className="sigma_header-top-nav">
                                        <li>
                                            <Link to="#">
                                                <i className="fal fa-envelope" />
                                                spec@docmatch.de
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
                    <div className="sigma_header-middle">
                        <div className="container-fluid">
                            <div className="navbar">
                                <div className="sigma_logo-wrapper">
                                    <Link to="/" className="sigma_logo">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/logo-light.png"} alt="logo" />
                                    </Link>
                                </div>
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
                                        <li className="search-trigger header-controls-item d-none d-sm-block">
                                            <Link to="#" className="sigma_header-control-search bg-transparent border-0" title="Search" onClick={this.toggleSearch}>
                                                <i className="far fa-search" />
                                            </Link>
                                        </li>
                                        {!user ? (
                                            <>
                                            <li className="d-none d-sm-block">
                                                <button onClick={this.openLoginModal} className="sigma_btn btn-sm">
                                                    Login
                                                    <i className="fal fa-sign-in-alt" />
                                                </button>
                                                <Dialog open={this.state.loginModalIsOpen} onClose={this.closeLoginModal} aria-labelledby="form-dialog-title">
                                                    <DialogTitle id="form-dialog-title">Login</DialogTitle>
                                                    <DialogContent>
                                                        <Login />
                                                    </DialogContent>
                                                </Dialog>
                                            </li>
                                            <li className="d-none d-sm-block">
                                                <button onClick={this.openRegisterModal} className="sigma_btn btn-sm">
                                                    Register
                                                    <i className="fal fa-user-plus" />
                                                </button>
                                                <Dialog open={this.state.registerModalIsOpen} onClose={this.closeRegisterModal} aria-labelledby="form-dialog-title">
                                                    <DialogTitle id="form-dialog-title">Register</DialogTitle>
                                                    <DialogContent>
                                                        <Register />
                                                    </DialogContent>
                                                </Dialog>
                                            </li>
                                            </>
                                        ) : (
                                            <>
                                                <li className="d-none d-sm-block">
                                                    Hello, {user.firstName}
                                                </li>
                                                <li className="d-none d-sm-block">
                                                    <button onClick={this.handleLogout} className="sigma_btn btn-sm">
                                                        Logout
                                                        <i className="fal fa-sign-out-alt" />
                                                    </button>
                                                </li>
                                            </>
                                        )}
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
                </header>
                {/* Header */}
            </Fragment>
        );
    }
}

export default Header;