import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { journalSlice } from './journal/journalSlice';


const combinedReducer = combineReducers({
  auth: authSlice.reducer,
  journal: journalSlice.reducer,
});

const rootReducer = ( state, action ) => {
  console.log(action);
  if (action.type === 'auth/logout') {
    state = {...state}
    delete state.auth
    delete state.journal
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer
  // reducer: {
    // auth: authSlice.reducer,
    // journal: journalSlice.reducer,
    // },
})
