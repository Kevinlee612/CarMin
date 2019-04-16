import React, { Component } from 'react';

Class post extends React.Component {
 
}
constructor(props) {
  // TODO: Authorization Step 1: Initialize the Smartcar object
  this.smartcar = new Smartcar({
    clientId: process.env.REACT_APP_CLIENT_ID,
    redirectUri: 'https://javascript-sdk.smartcar.com/redirect-2.0.0?app_origin=http://localhost:3000',
    testMode: true,
    onComplete: this.onComplete,
  });
}

authorize() {
  // TODO: Authorization Step 2a: Launch the authorization flow
  this.smartcar.openDialog({forcePrompt: true});
}

render() {
  // TODO: Authorization Step 2b: Launch the authorization flow
  return <Connect onClick={this.authorize} />;
}