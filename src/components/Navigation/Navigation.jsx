import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Contacts } from './components/Contacts/Contacts'
import { About } from './components/About/About'

export class Navigation extends React.Component {
    state = {}

    render() {
        return (
            <div>
                <Link to="/">Homepage</Link>
                <Link to="/about">About</Link>
                <Link to="/contacts" >Contacts </Link>
                <Link to="/addcontact">Add contact</Link>
            </div>
        )
    }
} 