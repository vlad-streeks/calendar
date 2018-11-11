import React from 'react';
import ReactDOM from 'react-dom';
import Container from './src/components/container';

import { Provider } from 'react-redux';
import store from './store';


ReactDOM.render(
    <Provider store = { store }>
        <Container />
    </Provider>,
    document.getElementById('root')
);

//PS: You need to create and export this "container component" in src to work ok?