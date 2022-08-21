import {configureStore} from '@reduxjs/toolkit';
import departmentSlice from '../department/departmentSlice';
import staffSlice from '../staff/staffSlice';
// import thunk from 'redux-thunk';
// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const store = configureStore({
reducer: {
    staffStoreReducer: staffSlice.reducer,
    staffStoreDep: departmentSlice.reducer
} 
})

export default store


// import { configureStore } from '@reduxjs/toolkit';
// import { routerMiddleware, connectRouter } from 'connected-react-router';
// import { createBrowserHistory } from 'history';
// import thunk from 'redux-thunk';
// import { rootReducer } from './reducer';

// export const history = createBrowserHistory();

// // combineReducers will be handled internally by configureStore
// const rootReducer = (history) => ({
//   articles: articlesReducer,
//   selection: selectionReducer,
//   router: connectRouter(history)
// });

// const preloadedState = {};
// export const store = configureStore({
//   middleware: [thunk, routerMiddleware(history)],
//   reducer: rootReducer(history),
//   preloadedState,
// });