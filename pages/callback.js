import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import auth0client from '../services/auth0';
import { withRouter } from 'next/router';

class Callback extends Component {

    async componentDidMount() {
        await auth0client.handleAuthentication();
        this.props.router.push('/');
    };

    render() {
        return (
            <BaseLayout>
                <BasePage>
                    <h1> Verifying login data... </h1>
                </BasePage>
            </BaseLayout>
        );
    };
};

export default withRouter(Callback);