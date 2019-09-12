import React from 'react';
import { render } from 'react-dom';
import Provider from '../components/Provider';
import List from '../components/List';
import AddListForm from '../components/AddListForm';

render(
    <Provider>
        <List />
        <AddListForm />
    </Provider>,
    document.querySelector('#root')
);