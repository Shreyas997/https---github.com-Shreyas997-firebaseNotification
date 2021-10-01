import React, { Component } from 'react';

class ForegroundNotificationComponent extends Component {
constructor(props){
    super(props)
}
    
    render() {
        return (
            <div>
                <h1>{this.props.notification.title}</h1>
                <h6>{this.props.notification.body}</h6>
            </div>
        );
    }
}

export default ForegroundNotificationComponent;