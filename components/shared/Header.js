import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import { Link as NextLink} from '../../routes';
import '../../styles/main.scss';

class Header extends Component {
    render() {
        return(
            <Fragment>
                {this.props.children}
                <p className="customClass">styled p element</p>
                <p className="customClassFile">styled p element</p>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/portfolios"><a>Portfolio</a></Link>
                <Link href="/blogs"><a>Blog</a></Link>
                <Link href="/cv"><a>CV</a></Link>
                <NextLink route='/test/2'>Test 2</NextLink>
                <NextLink route='/test/5'>Test 5</NextLink>
            </Fragment>
        );
    };
};

export default Header;