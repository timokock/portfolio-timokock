import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import { Link as NextLink} from '../../routes';
import '../../styles/main.scss';

class Header extends Component {
    render() {
        return(
            <Fragment>
                <Link href="/"><a> Home </a></Link>
                <Link href="/about"><a> About </a></Link>
                <Link href="/portfolios"><a> Portfolio </a></Link>
                <Link href="/blogs"><a> Blog </a></Link>
                <Link href="/cv"><a> CV </a></Link>
            </Fragment>
        );
    };
};

export default Header;