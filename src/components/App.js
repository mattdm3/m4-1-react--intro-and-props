import React from 'react';

import Header from './Header';
import ChatStream from './ChatStream';
import Footer from './Footer';

import './App.css';

function App(props) {
  return (
    <div className="wrapper">
      <Header currentUser={props.currentUser} participants={props.participants} />
      <ChatStream messages={props.conversation.messages} currentUser={props.currentUser} />
      <Footer />
    </div>
  );
}

export default App;
