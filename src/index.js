import 'semantic-ui-css/semantic.min.css';
import './index.css';

import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom'

import stores from './stores';
import Show from './components/Show';
import ScrollToTop from './components/ScrollToTop'

render(
  <Provider
    roadmapElements={stores.roadmapElements}
    headerStore={stores.headerStore}
  >
    <BrowserRouter>
      <ScrollToTop>
        <Show/>
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
