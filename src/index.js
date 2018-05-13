import React from 'react';
import ReactDOM from 'react-dom';
import Home from './scenes/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
