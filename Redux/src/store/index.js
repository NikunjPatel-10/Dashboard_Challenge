import { configureStore, createSlice } from '@reduxjs/toolkit';
import { createStore } from 'redux'
// function counterReducer(state = { counter: 0 }, action) {
//     if (action.type === 'INCREMENT') {
//         return {
//             counter: state.counter + 1
//         }
//     }
//     else if (action.type === 'DECREMENT') {

//         return {
//             counter: state.counter - 1
//         }
//     }
//     return state
// }

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const initialAuthState = {
    isAuthenticated: false
}
const AuthSlice = createSlice({

    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
})

// let store = configureStore({
//     reducer: counterReducer
// });

let store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: AuthSlice.reducer }
})

export const counterAction = counterSlice.actions;
export const authAction = AuthSlice.actions;
export default store;