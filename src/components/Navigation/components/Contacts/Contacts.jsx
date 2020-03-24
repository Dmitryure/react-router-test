import React from 'react'

export class Contacts extends React.Component {
    state = {}

    render () {
        const {contacts} = this.props
        return (
            <div>
                {contacts && contacts.map(item => {
                    return <div>{item}</div>
                })}
            </div>
        )
    }
} 