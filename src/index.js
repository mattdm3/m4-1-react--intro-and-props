import React from 'react';
import ReactDOM from 'react-dom';

import data from './data';
import App from './components/App';

import './styles.css';

const rootElement = document.getElementById('root');

console.log(data.conversation.messages);

ReactDOM.render(
  <App currentUser={data.currentUser} conversation={data.conversation} participants={data.conversation.participants} />,
  rootElement
);
