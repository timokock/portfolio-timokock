import React from 'react';
import App from 'next/app';
import auth0client from '../services/auth0';

// Stylings
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';

class MyApp extends App {
    
    static async getInitialProps({ Component, router, ctx }) {
        
        let pageProps = {};
        
        const user = process.browser ? auth0client.clientAuth() : auth0client.serverAuth(ctx.req);
        
        if(Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        };
        
        const auth = { user, isAuthenticated: !!user };

        return { pageProps, auth };
    } 

    render() {
        const { Component, pageProps, auth } = this.props;

        return (
                <Component {...pageProps} auth={auth}/>
        )
    }
}

export default MyApp;