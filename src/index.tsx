import React from 'react';
import {render} from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { App } from 'components';

import './index.scss';

render(
  <React.StrictMode>
    <div className="App" role="application">
      <App.Header />
      <App.Nav />
      <App.Aside />
      <App.Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
