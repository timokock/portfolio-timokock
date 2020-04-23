import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

class SuperComponent extends Component {

    constructor(props) {
        super(props);

        this.someVariable = 'Just a variable';
    };

    alertName(title) {
        alert(title);
    };

    render() {
        return (
            <BaseLayout>
                <h1>Super Component</h1>
            </BaseLayout>
        );
    };
};

export default SuperComponent;