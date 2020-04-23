import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { SuperComponent as Super } from '../components/SuperComponent';
import axios from 'axios';

class Index extends Component {

    static getInitialProps() {
        axios.get('https://jsonplaceholder.typicode.com/todos/1').then(data => console.log(data)).catch(err => console.log(err));

        console.log('This is initialProps method');
        return {};
    };

    constructor(props) {
        super(props);

        this.state = {
            title: 'Index Title in State',
            number: 0
        };

        console.log('Constructor');
    };

    componentDidMount() {
        console.log('componentDidMount');
    };

    componentDidUpdate() {
        console.log('componentDidUpdate');
    };

    componentWillUnmount() {
        console.log('componentWillUnmount');
    };

    render() {
        console.log('render');
        return (
            <BaseLayout>
                <h1>Index Page</h1>
                <h2>{this.state.title} {' '} {this.state.number}</h2>
                <button onClick={e => {this.setState({ title: 'Updated Title', number: this.state.number + 1 })}}>Update Title</button>
            </BaseLayout>
        );
    };
};

export default Index;