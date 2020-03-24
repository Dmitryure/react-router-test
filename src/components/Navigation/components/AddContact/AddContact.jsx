import React from 'react';

export class AddContact extends React.Component {
    state = {}

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }



    render() {
        console.log(this.props)
        const { value } = this.state
        return (
            <>
                <input onChange={this.handleChange} value={value} name="user" />
                <button onClick={() => { this.props.addContact(this.state.user); this.props.history.push('/contacts') }}>Отправить</button>
            </>
        )
    }
}