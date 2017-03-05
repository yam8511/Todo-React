import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './src/container/App';
import todoReducer from './src/reducer/todo'

let store = createStore(todoReducer);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
