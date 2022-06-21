import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { authenticate } from './actions'

export class Home extends Component {
    authenticate = (event) => {
        event.preventDefault();
        const { email, password } = event.target;
        this.props.authenticate(email.value, password.value);
    };

    render() { 
        return (
            <>
                {
                    this.props.isLoggedIn ? (
                        <p>
                            You are Logged in <Link to="/profile">go to Profile</Link>
                        </p>
                    ) : (
                        <form onSubmit={this.authenticate}>
                            <label htmlFor="email">Email:</label>
                            <input id="email" type="email" name="email" size="28" />
                            <label htmlFor="password">Password:</label>
                            <input id="password" type="password" name="password" size="28" />
                            <button type="submit">Log in</button>    
                        </form>
                    )
                }
            </>
        );
    }
}

export const HomeWithAuth = connect(
    (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
    { authenticate }
)(Home);