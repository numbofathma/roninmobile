import * as React from 'react';
import Router from 'next/router';

class ErrorPage extends React.Component {
    static async getInitialProps({ res }) {
        if (res) {
            res.writeHead(302, {
                Location: '/404'
            });
            res.end();
        } else {
            Router.push('/404');
        }
        return {};
    }
}

export default ErrorPage;
