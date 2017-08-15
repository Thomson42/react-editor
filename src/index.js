import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App initialMessage="Waba Laba Dub Dub!" 
initialFontSize={24} 
initialBoldType = "normal" 
initialStyle = 'normal'
initialTextAlign = 'left'/>, 
document.getElementById('root'));

registerServiceWorker();