
import {createStore} from 'redux';
import {createWrapper} from 'next-redux-wrapper';
import Reducer from './reducer';
// create your reducer

// create a makeStore function
const makeStore = context => createStore(Reducer);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});