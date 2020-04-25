import React, { Component } from 'react';
import BaseLayout from '../../components/layouts/BaseLayout';
import BasePage from '../../components/BasePage';
import { withRouter } from 'next/router';
import axios from 'axios';

class Portfolio extends Component {

    static async getInitialProps(context) {
        let post = {};
        const postID = context.query.id;

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}`);
            post = response.data;
        } catch (err) {
            console.log(err);
        };
        return {post: post};
    };

    render() {
        const { post } = this.props;
        return (
            <BaseLayout>
                <BasePage>
                    <h1>{post.title}</h1>
                    <h2>{post.body}</h2>
                    <p>{post.id}</p>
                </BasePage>
            </BaseLayout>
        );
    };
};

export default withRouter(Portfolio);