import React from 'react'
import './Form.css'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleChange = (event) =>  { 
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const {username, password, privet} = this.state
        return (
            <div className="form">
                <br />
                <input name="username" placeholder="Imya usera" onChange={this.handleChange}/>
                <input name="password" placeholder="password" onChange={this.handleChange}/>
                <span>Current form input is username {username}, password {password}, {privet}</span>
            </div>
        )
    }
}

export default Form