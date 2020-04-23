import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { withRouter } from 'next/router';
import axios from 'axios';

class Test extends Component {

    static async getInitialProps({ query }) {
        const testID = query.id
        return {testID};
    };

    render() {
        const {testID} = this.props;
        return (
            <BaseLayout>
                <h1>Test Page id: {testID}</h1>
            </BaseLayout>
        );
    };
};

export default withRouter(Test);