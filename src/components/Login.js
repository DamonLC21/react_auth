import React, { Component } from 'react'

export default class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    
    render() {
        return (
            <form className='login-form' onSubmit={this.handleSubmit}>
                <h1>Login</h1>
                <label>Username</label>
                <input name='username' id="username" value={this.state.username} onChange={this.handleChange} />
                <label>Password</label>
                <input type='password' id="password" name='password' value={this.state.password} onChange={this.handleChange} />
                <input type='submit' id="submit" value='Login' />
            </form>
        )
    }
}
