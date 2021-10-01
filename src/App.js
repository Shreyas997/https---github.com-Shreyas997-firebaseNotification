import React, { Component } from 'react';
import * as firebaseInit from './FirebaseInit';
import ForegroundNotificationComponent from './ForegroundNotificationComponent';
import NotificationComponent from './NotificationComponent';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showNotification:false,
      notification:{}
    };
  }
  
  componentDidMount(){
    firebaseInit.onMessageListener()
    .then((payload) => {
      console.log(payload);
      const notification = {}
      notification.title= payload.notification.title
      notification.body = payload.notification.body
      this.setState({showNotification:true,notification:notification})
    })
 .catch((err) => console.log("failed: ", err));
  }


  render() {
    return (
      <div>
      <NotificationComponent/>
      <ForegroundNotificationComponent notification={this.state.notification}/>
      NotificationComponent
      </div>
    );
  }
}
