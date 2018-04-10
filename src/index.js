import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import RepoListContainer from './components/RepoListContainer';

ReactDOM.render(<RepoListContainer />, document.getElementById('root'));
registerServiceWorker();
