import React, { Component } from 'react';
import * as firebaseInit from './FirebaseInit';

class NotificationComponent extends Component {
constructor(props){
  super(props)
    this.state={
        istokenFound:false
    }
}
setTokenFound = (flag) => {
this.setState({istokenFound:flag})
}

tokenfunction = async() => {
   const data = await firebaseInit.getToken(this.setTokenFound);
    if (data) {
      console.log("Token is", data);
    }
    return data;
     
 }   

componentDidMount(){
    this.tokenfunction()
}
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default NotificationComponent;