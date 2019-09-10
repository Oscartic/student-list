import React from 'react';
import { render } from 'react-dom';
import Provider from '../components/Provider';
import List from '../components/List';

render(
    <Provider>
        <List />
    </Provider>,
    document.querySelector('#root')
);