import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class About extends Component {
    render() {
        return (
            <BaseLayout>
                <BasePage className="about-page">
                    <h1>About Page</h1>
                </BasePage>
            </BaseLayout>
        );
    };
};

export default About;