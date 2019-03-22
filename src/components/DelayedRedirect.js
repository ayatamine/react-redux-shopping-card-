import React, { Component } from 'react';

export default class DelayedRedirect extends Component {
    state = {
        redirect: false,
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                redirect: true,
            })
        }, 2000)
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to={'/'} />
            )
        }

        return (
            <div>
                Redirecting to "/" in two seconds
            </div>
        )
    }
}