import React from 'react';
import {createStore} from 'redux';
import Reducer from '../Reducer/Reducer';
const store=createStore(Reducer,
    window._REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENSION_());
export default store