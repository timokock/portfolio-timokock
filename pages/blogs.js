import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class Blogs extends Component {
    render() {
        return (
            <BaseLayout>
                <BasePage className="blogs-page">
                    <h1>Blogs Page</h1>
                </BasePage>
            </BaseLayout>
        );
    };
};

export default Blogs;