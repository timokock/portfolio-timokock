import React, { Fragment, Component } from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import auth0 from '../../services/auth0';

const BsNavLink = (props) => {
    const { route, title } = props;
    return(
        <Link href={route}><a className="nav-link port-navbar-link"> {title} </a></Link>
    );
};

const Login = () => {
    return(
        <span className="nav-link port-navbar-link clickable" onClick={auth0.login}> Login </span>
    );
};

const Logout = () => {
    return(
        <span className="nav-link port-navbar-link clickable" onClick={auth0.logout}> Logout </span>
    );    
}

class Header extends Component {

    constructor(props) {
        super(props);

        this.toogle = this.toogle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toogle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {

        const { isAuthenticated } = this.props;

        return (
            <Fragment>
                <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
                    <NavbarBrand className="port-navbar-brand" href="/">timo kock</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="port-navbar-item">
                            <BsNavLink route="/" title="Home"/>
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink route="/about" title="About"/>
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink route="/portfolios" title="Portfolio"/>
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink route="/blogs" title="Blog"/>
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink route="/cv" title="CV"/>
                        </NavItem>
                        {!isAuthenticated &&
                            <NavItem className="port-navbar-item">
                                <Login />
                            </NavItem>
                        }
                        {isAuthenticated &&
                            <NavItem className="port-navbar-item">
                                <Logout />
                            </NavItem>
                        }
                    </Nav>
                    </Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default Header;