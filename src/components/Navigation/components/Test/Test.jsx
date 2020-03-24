import React from 'react'

export class Test extends React.Component {
    state = {}

    render() {
        return (
            <div>
                {this.props.id}
            </div>
        )
    }
}